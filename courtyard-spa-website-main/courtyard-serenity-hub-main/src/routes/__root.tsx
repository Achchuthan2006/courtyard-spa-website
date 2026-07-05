import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-muted-foreground">404</p>
        <h1 className="mt-4 font-serif text-5xl text-foreground">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for has drifted out of view.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 text-xs eyebrow bg-primary text-primary-foreground rounded-sm"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Courtyard Spa Co. - Premium Hot Tubs, Swim Spas & Cold Plunges" },
      {
        name: "description",
        content:
          "Premium hot tubs, swim spas, and cold plunges designed for the modern home. Space is the new luxe.",
      },
      { name: "author", content: "The Courtyard Spa Company" },
      {
        property: "og:title",
        content: "The Courtyard Spa Co. - Premium Hot Tubs, Swim Spas & Cold Plunges",
      },
      {
        property: "og:description",
        content: "Premium hot tubs, swim spas, and cold plunges designed for the modern home.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "The Courtyard Spa Co. - Premium Hot Tubs, Swim Spas & Cold Plunges",
      },
      {
        name: "description",
        content:
          "Courtyard Bloom is a luxury e-commerce and lead-generation website for premium hot tubs, swim spas, and cold plunges.",
      },
      {
        property: "og:description",
        content:
          "Courtyard Bloom is a luxury e-commerce and lead-generation website for premium hot tubs, swim spas, and cold plunges.",
      },
      {
        name: "twitter:description",
        content:
          "Courtyard Bloom is a luxury e-commerce and lead-generation website for premium hot tubs, swim spas, and cold plunges.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b7430c43-210c-4c84-a9f0-dd45a4e94166/id-preview-12414f5a--81f93610-badc-4e5c-a1f1-9ff115b63dcb.lovable.app-1776806433380.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b7430c43-210c-4c84-a9f0-dd45a4e94166/id-preview-12414f5a--81f93610-badc-4e5c-a1f1-9ff115b63dcb.lovable.app-1776806433380.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
