import "./globals.css";
import type { Metadata, Viewport } from "next";

const SITE_URL = "https://buildapp.lat";
const SITE_NAME = "BuildApp";
const TITLE = "BuildApp — Apps que venden más en tu Tienda Nube";
const DESCRIPTION =
  "Plataforma latinoamericana para crear popups, recuperación de carritos, cross-sells y banners en Tienda Nube. Describilos en español y los armamos por vos. Sin programar. Sin esperar a un desarrollador.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · BuildApp" },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "Tienda Nube", "Nuvemshop", "ecommerce", "apps Tienda Nube",
    "popups", "cross-sell", "recuperación de carritos",
    "Hot Sale", "Black Friday", "Mercado Pago", "Mercado Libre",
    "Argentina", "LATAM", "SaaS", "AI ecommerce",
    "no-code ecommerce", "personalización storefront",
  ],
  authors: [{ name: "BuildApp", url: SITE_URL }],
  creator: "BuildApp",
  publisher: "BuildApp",
  category: "ecommerce",
  formatDetection: { email: false, address: false, telephone: false },

  alternates: {
    canonical: "/",
    languages: { "es-AR": "/", "es-419": "/" },
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["es_MX", "es_CO", "es_CL", "pt_BR"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    // images generadas automáticamente desde app/opengraph-image.tsx
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    // images generadas desde app/twitter-image.tsx
    creator: "@buildapp_lat",
    site: "@buildapp_lat",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // icons (favicon, apple-icon) y manifest se generan automáticamente desde:
  //   app/icon.tsx        → /icon (favicon 32x32)
  //   app/apple-icon.tsx  → /apple-icon (180x180)
  //   app/icon-large/     → /icon-large (512x512 maskable)
  //   app/manifest.ts     → /manifest.webmanifest

  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: SITE_NAME },
  other: { "msapplication-TileColor": "#050505", "color-scheme": "dark" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#050505" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "BuildApp",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: DESCRIPTION,
              url: SITE_URL,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Plan free para siempre con 3 apps activas",
              },
              creator: { "@type": "Organization", name: "BuildApp", url: SITE_URL },
            }),
          }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        {/* Ambient gradient — siempre en movimiento */}
        <div className="fixed inset-0 pointer-events-none z-0 ambient-bg" aria-hidden />
        <div className="fixed inset-0 pointer-events-none z-0 aurora-bg" aria-hidden />
        <div className="fixed inset-0 noise pointer-events-none z-[1]" aria-hidden />
        {children}
      </body>
    </html>
  );
}
