import { EmberGlow } from "@/components/motion/ember-glow";
import { MotionCta } from "@/components/motion/motion-cta";
import { Reveal } from "@/components/motion/reveal";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  eventTypes,
  frequentlyAskedQuestions,
  heroFacts,
  methodPoints,
  momentDivider,
  preparations,
  publicContact,
  sensoryWords,
} from "@/content/home";

export default function HomePage() {
  return (
    <div className="site-shell" id="inizio">
      <a className="skip-link" href="#contenuto-principale">
        Salta al contenuto
      </a>

      <SiteHeader />

      <main id="contenuto-principale" tabIndex={-1}>
        <section className="hero section-frame" aria-labelledby="hero-title">
          <Reveal as="div" className="hero-copy">
            <p className="eyebrow">Barbecue per eventi a Perugia e in Umbria</p>
            <h1 id="hero-title">Il barbecue che diventa parte del tuo evento.</h1>
            <p className="hero-intro">
              Cotture lente, profumo di legno e preparazioni servite appena fatte. Portiamo il
              nostro barbecue, lo stand e l’esperienza necessaria per trasformare il momento del
              cibo in qualcosa che gli invitati possano vedere, vivere e ricordare.
            </p>
            <div className="hero-actions">
              <MotionCta className="button button--primary" href="#contatti">
                Raccontaci il tuo evento
              </MotionCta>
              <a className="text-link" href="#esperienza">
                Scopri l’esperienza
                <span aria-hidden="true">↘</span>
              </a>
            </div>
            <ul className="hero-facts">
              {heroFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </Reveal>

          <div className="hero-visual" aria-hidden="true">
            <div className="heat-rings">
              <EmberGlow />
              <span className="heat-rings__core" />
              <span className="heat-rings__label heat-rings__label--top">Tempo</span>
              <span className="heat-rings__label heat-rings__label--right">Fuoco</span>
              <span className="heat-rings__label heat-rings__label--bottom">Cura</span>
            </div>
            <p>“Per me il cibo è un’emozione.”</p>
          </div>
        </section>

        <div className="sensory-strip" aria-hidden="true">
          <ul>
            {sensoryWords.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        </div>

        <section className="problem-section" id="esperienza" aria-labelledby="problem-title">
          <div className="section-frame problem-grid">
            <Reveal as="div" className="section-heading section-heading--dark">
              <p className="section-number">01 — Esperienza</p>
              <h2 id="problem-title">Tu pensa agli invitati. Al fuoco pensiamo noi.</h2>
            </Reveal>
            <Reveal as="div" className="problem-copy" delay={0.1}>
              <p className="lead-copy">
                Il cibo di un evento richiede tempi, attrezzature, gestione delle cotture, servizio
                e coordinamento. Spaccini porta sul posto ciò che serve per trasformare questa
                necessità organizzativa in una parte visibile dell’occasione.
              </p>
              <ul className="responsibility-list" aria-label="Cosa gestiamo">
                <li>Barbecue e attrezzatura</li>
                <li>Stand e area cucina</li>
                <li>Cotture e preparazione</li>
                <li>Servizio concordato</li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="live-section section-frame" aria-labelledby="live-title">
          <Reveal as="div" className="section-heading">
            <p className="section-kicker">Dal nostro arrivo al servizio</p>
            <h2 id="live-title">Una cucina che entra nella scena.</h2>
            <p>
              Ogni configurazione viene concordata in base all’evento: il percorso resta chiaro, il
              servizio si adatta al contesto reale.
            </p>
          </Reveal>
          <ol className="experience-steps">
            <Reveal as="li" delay={0}>
              <span>01</span>
              <h3>Organizziamo l’area</h3>
              <p>Arriviamo con barbecue, stand e attrezzatura previsti per il servizio.</p>
            </Reveal>
            <Reveal as="li" delay={0.08}>
              <span>02</span>
              <h3>Completiamo le cotture</h3>
              <p>Gestiamo tempi e preparazioni fino al momento concordato.</p>
            </Reveal>
            <Reveal as="li" delay={0.16}>
              <span>03</span>
              <h3>Lavoriamo a vista</h3>
              <p>Il barbecue diventa un punto vivo dell’evento, davanti agli invitati.</p>
            </Reveal>
            <Reveal as="li" delay={0.24}>
              <span>04</span>
              <h3>Serviamo</h3>
              <p>Buffet oppure panini preparati al momento, secondo la formula definita.</p>
            </Reveal>
          </ol>
        </section>

        <section className="cook-section" id="cotture" aria-labelledby="cook-title">
          <div className="section-frame">
            <Reveal as="div" className="section-heading section-heading--split">
              <div>
                <p className="section-number">02 — Cotture</p>
                <h2 id="cook-title">Il tempo è un ingrediente.</h2>
              </div>
              <p>
                Le preparazioni vengono scelte e organizzate per il singolo servizio. Nessun menu
                preconfezionato: disponibilità e proposta si definiscono insieme.
              </p>
            </Reveal>
            <div className="preparation-grid">
              {preparations.map((preparation, index) => (
                <Reveal
                  as="article"
                  className={`preparation-card preparation-card--${(index % 4) + 1}${index === 0 ? " preparation-card--featured" : ""}`}
                  delay={(index % 4) * 0.06}
                  key={preparation.name}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{preparation.name}</h3>
                  <p>{preparation.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="moment-divider" aria-hidden="true">
          <span className="moment-divider__glow" />
          <p className="moment-divider__eyebrow">{momentDivider.eyebrow}</p>
          <p className="moment-divider__line">{momentDivider.line}</p>
        </div>

        <section
          className="method-section section-frame"
          id="metodo"
          aria-labelledby="method-title"
        >
          <Reveal as="div" className="method-intro">
            <p className="section-number">03 — Metodo</p>
            <h2 id="method-title">Un sistema progettato intorno alla cottura.</h2>
            <p>
              Roberto cucina con una macchina che ha sviluppato e perfezionato nel tempo. La
              differenza parte dal funzionamento: energia, temperatura e percorso dei liquidi sono
              elementi concreti del progetto.
            </p>
          </Reveal>
          <div className="method-layout">
            <div className="method-diagram" aria-hidden="true">
              <div className="method-diagram__chamber">
                <span />
                <span />
                <span />
              </div>
              <div className="method-diagram__heat">Calore</div>
              <div className="method-diagram__drain">Raccolta esterna</div>
            </div>
            <ol className="method-list">
              {methodPoints.map((point, index) => (
                <Reveal as="li" delay={index * 0.08} key={point.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="services-section" id="servizi" aria-labelledby="services-title">
          <div className="section-frame">
            <Reveal as="div" className="section-heading section-heading--centered">
              <p className="section-number">04 — Servizi</p>
              <h2 id="services-title">Due modi per scegliere Spaccini.</h2>
            </Reveal>
            <div className="service-grid">
              <Reveal as="article" className="service-card service-card--pickup">
                <p className="service-card__number">A</p>
                <h3>Prenotazione e ritiro</h3>
                <p>
                  Concordiamo preparazione, quantità e tempi. Disponibilità e prezzo vengono
                  confermati sulla richiesta.
                </p>
                <ul>
                  <li>Preparazioni su prenotazione</li>
                  <li>Quantità da concordare</li>
                  <li>Tempi definiti per la cottura</li>
                  <li>Ritiro in sede</li>
                </ul>
                <a className="text-link" href="#contatti">
                  Chiedi una preparazione <span aria-hidden="true">↘</span>
                </a>
              </Reveal>
              <Reveal as="article" className="service-card service-card--event" delay={0.1}>
                <p className="service-card__number">B</p>
                <h3>Barbecue e catering per eventi</h3>
                <p>
                  Non è un catering tradizionale: portiamo il nostro barbecue, lo stand e la
                  preparazione dal vivo davanti agli invitati.
                </p>
                <ul>
                  <li>Barbecue e area cucina sul posto</li>
                  <li>Preparazione a vista</li>
                  <li>Buffet o panini appena preparati</li>
                  <li>Proposta costruita sull’evento</li>
                </ul>
                <a className="text-link" href="#contatti">
                  Raccontaci l’evento <span aria-hidden="true">↘</span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="story-section section-frame" id="storia" aria-labelledby="story-title">
          <div className="story-heading">
            <p className="section-number">05 — Storia</p>
            <h2 id="story-title">Prima è nato il barbecue. Poi è arrivato tutto il resto.</h2>
          </div>
          <div className="story-content">
            <blockquote className="founder-manifesto">
              <div className="founder-manifesto__voice">
                <p>
                  Voglio offrirti la mia esperienza e trasmetterti la mia passione, perché per me il
                  cibo è un’emozione.
                </p>
                <p>
                  Vengo dalla cultura contadina umbra, fatta di rispetto per la materia prima e di
                  condivisione. Seleziono e preparo personalmente ciò che cucino.
                </p>
                <p>
                  Parto dalle tecniche tradizionali e le unisco all’innovazione del sistema barbecue
                  che ho sviluppato.
                </p>
                <p>Il risultato? Sarai tu a giudicarlo.</p>
              </div>
              <div className="founder-manifesto__signature">
                <cite>Roberto Spaccini</cite>
              </div>
            </blockquote>
            <p className="story-lead">
              Spaccini Barbecue nasce dall’evoluzione del lavoro di Roberto: dalla passione per la
              cottura alla progettazione della macchina, fino al servizio negli eventi.
            </p>
            <div className="story-timeline">
              <Reveal as="article" delay={0}>
                <span>Origini</span>
                <h3>Progettare il sistema</h3>
                <p>
                  Roberto sviluppa il bruciatore e l’intero barbecue, sperimentando configurazioni,
                  temperature e lunghe cotture.
                </p>
              </Reveal>
              <Reveal as="article" delay={0.08}>
                <span>2013</span>
                <h3>Incontrare il pubblico</h3>
                <p>
                  La presenza a Piacere Barbecue documenta già allora dimostrazioni del sistema a
                  pellet e preparazioni offerte al pubblico.
                </p>
              </Reveal>
              <Reveal as="article" delay={0.16}>
                <span>Oggi</span>
                <h3>Dal prodotto al servizio</h3>
                <p>
                  L’interesse per ciò che usciva dal barbecue ha accompagnato l’evoluzione verso
                  eventi, cotture dal vivo e preparazioni su richiesta.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="events-section" aria-labelledby="events-title">
          <div className="section-frame events-layout">
            <Reveal as="div" className="section-heading">
              <p className="section-number">06 — Occasioni</p>
              <h2 id="events-title">Ogni evento parte da una conversazione.</h2>
              <p>
                Valutiamo direttamente luogo, numero indicativo di persone, servizio, menu e
                organizzazione. Non imponiamo un limite fisso prima di conoscere l’occasione.
              </p>
            </Reveal>
            <ul className="event-list" aria-label="Eventi da valutare">
              {eventTypes.map((eventType, index) => (
                <Reveal as="li" delay={(index % 4) * 0.05} key={eventType}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {eventType}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="faq-section section-frame" aria-labelledby="faq-title">
          <Reveal as="div" className="faq-intro">
            <p className="section-number">07 — Domande</p>
            <h2 id="faq-title">Prima di accendere il fuoco.</h2>
            <p>
              Le risposte essenziali per capire se il servizio può essere adatto alla tua richiesta.
            </p>
          </Reveal>
          <div className="faq-list">
            {frequentlyAskedQuestions.map((item, index) => (
              <details key={item.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.question}
                  <span className="faq-marker" aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contatti" aria-labelledby="contact-title">
          <div className="section-frame contact-inner">
            <p className="section-kicker">Il primo passo è semplice</p>
            <h2 id="contact-title">Che evento hai in mente?</h2>
            <p>
              Raccontaci data, luogo e numero indicativo di persone. Valuteremo insieme cotture,
              servizio e organizzazione.
            </p>
            <MotionCta className="button button--contact" href={publicContact.instagramUrl}>
              Scrivici su Instagram
              <span aria-hidden="true">↗</span>
            </MotionCta>
            <p className="contact-note">La richiesta è informativa e non comporta un impegno.</p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileCtaBar />
    </div>
  );
}
