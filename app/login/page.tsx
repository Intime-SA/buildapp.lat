import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Ingresar",
  description:
    "Ingresá a BuildApp para seguir construyendo apps que venden más en tu Tienda Nube. Login con Tienda Nube, Google o magic link.",
  alternates: { canonical: "/login" },
  openGraph: {
    title: "Ingresar · BuildApp",
    description: "Volvé a tu panel de BuildApp y seguí iterando tus apps.",
    url: "/login",
    type: "website",
  },
  twitter: {
    title: "Ingresar · BuildApp",
    description: "Volvé a tu panel de BuildApp y seguí iterando tus apps.",
  },
  robots: { index: false, follow: true },
};

export default function LoginPage() {
  return <LoginForm />;
}
