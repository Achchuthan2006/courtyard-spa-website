import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appRoot = path.resolve(__dirname, "..");
const distClientDir = path.join(appRoot, "dist", "client");
const serverEntryUrl = pathToFileURL(path.join(appRoot, "dist", "server", "index.js")).href;
const productsSourcePath = path.join(appRoot, "src", "lib", "products.ts");

function extractBlock(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start);

  if (start === -1 || end === -1) {
    throw new Error(`Could not find block between "${startMarker}" and "${endMarker}"`);
  }

  return source.slice(start, end);
}

function extractSlugs(block) {
  return [...block.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
}

async function getRoutes() {
  const source = await readFile(productsSourcePath, "utf8");
  const categoriesBlock = extractBlock(source, "export const categories", "export const products");
  const productsBlock = source.slice(source.indexOf("export const products"));

  const categorySlugs = extractSlugs(categoriesBlock);
  const productSlugs = extractSlugs(productsBlock);

  return [
    "/",
    "/about",
    "/book",
    "/financing",
    ...categorySlugs.map((slug) => `/collections/${slug}`),
    ...productSlugs.map((slug) => `/products/${slug}`),
  ];
}

function getOutputPath(routePath) {
  if (routePath === "/") {
    return path.join(distClientDir, "index.html");
  }

  const cleanPath = routePath.replace(/^\/+/, "");
  return path.join(distClientDir, cleanPath, "index.html");
}

async function prerender() {
  const { default: serverBuild } = await import(serverEntryUrl);
  const routes = await getRoutes();

  for (const routePath of routes) {
    const response = await serverBuild.fetch(new Request(`http://localhost${routePath}`));

    if (!response.ok) {
      throw new Error(`Failed to prerender ${routePath}: ${response.status}`);
    }

    const html = await response.text();
    const outputPath = getOutputPath(routePath);

    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, "utf8");
  }
}

await prerender();
