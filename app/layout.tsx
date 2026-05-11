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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "BuildApp — Apps que venden más" }],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
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

  icons: {
    icon: [{
      url: "data:image/svg+xml," + encodeURIComponent(
        `<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><rect x='3' y='15' width='14' height='14' rx='3.5' fill='#10b981'/><rect x='15' y='3' width='14' height='14' rx='3.5' fill='#6366f1'/><circle cx='22' cy='10' r='2' fill='white'/></svg>`
      ),
      type: "image/svg+xml",
    }],
    apple: [{
      url: "data:image/svg+xml," + encodeURIComponent(
        `<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><rect width='32' height='32' rx='6' fill='#050505'/><rect x='4' y='15' width='12' height='12' rx='3' fill='#10b981'/><rect x='15' y='4' width='12' height='12' rx='3' fill='#6366f1'/><circle cx='21' cy='10' r='1.8' fill='white'/></svg>`
      ),
    }],
  },

  manifest: "/manifest.webmanifest",
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
        {/* Aurora secundario */}
        <div className="fixed inset-0 pointer-events-none z-0 aurora-bg" aria-hidden />
        {/* Noise overlay */}
        <div className="fixed inset-0 noise pointer-events-none z-[1]" aria-hidden />
        {children}
      </body>
    </html>
  );
}
