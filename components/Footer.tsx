import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <Logo size={22} className="mb-2" />
          <p className="text-xs text-ink-dimmer">© 2026 BuildApp · App Partner de Tienda Nube · Tiendas en LATAM</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-dimmer">
          <a href="#" className="hover:text-ink transition-colors">Términos</a>
          <a href="#" className="hover:text-ink transition-colors">Privacidad</a>
          <a href="#" className="hover:text-ink transition-colors">Ayuda</a>
          <a href="#" className="hover:text-ink transition-colors">Status</a>
          <a href="#" className="hover:text-ink transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
