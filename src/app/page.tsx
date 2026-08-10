import Image from "next/image";

export default function HomePage() {
  return (
    <div className="foundation-page">
      <a className="skip-link" href="#contenuto-principale">
        Salta al contenuto
      </a>

      <header className="site-header">
        <Image
          src="/spaccini-barbecue-logo.svg"
          alt="Logo Spaccini Barbecue"
          width={342.03}
          height={270.16}
          sizes="(max-width: 480px) 160px, 256px"
          className="brand-logo"
          priority
        />
      </header>

      <main id="contenuto-principale" className="site-main" tabIndex={-1}>
        <div className="intro">
          <h1>Spaccini Barbecue</h1>
          <p>
            Cotture lente e barbecue per eventi a Perugia e in Umbria. Il nuovo sito è in
            preparazione.
          </p>
          <a className="instagram-link" href="https://www.instagram.com/bbq.you/">
            Seguici su Instagram
          </a>
        </div>
      </main>

      <footer className="site-footer">
        <p>Spaccini Barbecue · Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
