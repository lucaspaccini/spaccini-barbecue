import { publicContact } from "@/content/home";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <p className="footer-brand">Spaccini Barbecue</p>
          <p>Perugia, Umbria</p>
        </div>
        <a href={publicContact.instagramUrl}>Instagram @bbq.you</a>
      </div>
      <div className="footer-legal">
        <p>© {currentYear} Spaccini Barbecue</p>
        <p>Tutti i diritti riservati</p>
      </div>
    </footer>
  );
}
