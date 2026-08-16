export type NavigationItem = {
  readonly label: string;
  readonly href: `#${string}`;
};

export type Preparation = {
  readonly name: string;
  readonly description: string;
};

export type MethodPoint = {
  readonly title: string;
  readonly description: string;
};

export type FrequentlyAskedQuestion = {
  readonly question: string;
  readonly answer: string;
};

export type PublicContact = {
  readonly instagramUrl: `https://www.instagram.com/${string}/`;
};

export const publicContact: PublicContact = {
  instagramUrl: "https://www.instagram.com/bbq.you/",
};

export type MomentDivider = {
  readonly eyebrow: string;
  readonly line: string;
};

export const sensoryWords = ["Fuoco", "Legno", "Tempo", "Brace", "Convivialità", "Cura"] as const;

export const heroFacts = [
  "Perugia e Umbria",
  "Una storia documentata dal 2013",
  "Sistema sviluppato da Roberto Spaccini",
] as const;

export const momentDivider: MomentDivider = {
  eyebrow: "Un momento, prima di continuare",
  line: "Il fuoco si accende. Il resto dell’evento prende forma intorno a lui.",
};

export const navigationItems: readonly NavigationItem[] = [
  { label: "Esperienza", href: "#esperienza" },
  { label: "Cotture", href: "#cotture" },
  { label: "Metodo", href: "#metodo" },
  { label: "Storia", href: "#storia" },
  { label: "Servizi", href: "#servizi" },
];

export const preparations: readonly Preparation[] = [
  {
    name: "Porchetta",
    description: "Tempo, temperatura e attenzione per una preparazione che non si improvvisa.",
  },
  {
    name: "Ribs",
    description: "Una cottura lenta, seguita fino al momento del servizio.",
  },
  {
    name: "Pulled pork",
    description: "Lunghe ore di cottura per arrivare alla consistenza cercata.",
  },
  {
    name: "Manzo",
    description: "Tagli e cotture vengono valutati all'interno della proposta concordata.",
  },
  {
    name: "Maiale",
    description: "Preparazioni diverse, scelte in base al servizio e all'occasione.",
  },
  {
    name: "Pollo",
    description: "Preparato nel contesto del menu definito per l'evento.",
  },
  {
    name: "Panini al momento",
    description: "Preparati e consegnati nell'area barbecue durante il servizio.",
  },
];

export const methodPoints: readonly MethodPoint[] = [
  {
    title: "Pellet e legno",
    description:
      "Il sistema lavora principalmente a pellet e può integrare essenze legnose selezionate quando sono adatte alla preparazione.",
  },
  {
    title: "Temperatura sotto controllo",
    description:
      "La gestione del calore accompagna cotture lunghe e regolari, seguite da chi conosce direttamente la macchina.",
  },
  {
    title: "Calore diffuso",
    description:
      "I diffusori distribuiscono il calore nella camera di cottura e gli alimenti restano separati dalla fiamma.",
  },
  {
    title: "Liquidi verso l'esterno",
    description:
      "Grassi e liquidi di cottura vengono convogliati fuori, invece di cadere direttamente sulla fonte di calore sotto gli alimenti.",
  },
];

export const eventTypes = [
  "Compleanni",
  "Matrimoni",
  "Lauree",
  "Feste private",
  "Aziende",
  "Cantine",
  "Birrerie",
  "Sagre",
] as const;

export const frequentlyAskedQuestions: readonly FrequentlyAskedQuestion[] = [
  {
    question: "Per quali eventi è disponibile il servizio?",
    answer:
      "Valutiamo compleanni, matrimoni, lauree, feste private, appuntamenti aziendali, eventi in cantine e birrerie, sagre e altre occasioni. Ogni richiesta viene esaminata in base al luogo e all'organizzazione necessaria.",
  },
  {
    question: "In quali zone operate?",
    answer:
      "L'area operativa iniziale è Perugia e l'Umbria. Possiamo valutare anche richieste fuori regione, senza dare per scontata la disponibilità.",
  },
  {
    question: "Esiste un numero minimo di persone?",
    answer:
      "Non dichiariamo un minimo o un massimo fisso. Il numero indicativo di invitati ci serve per capire quale servizio e quali preparazioni possono essere adatti.",
  },
  {
    question: "Portate voi barbecue e stand?",
    answer:
      "Per il servizio sul posto possiamo portare barbecue, stand, area cucina e attrezzatura necessaria. La configurazione viene concordata in base all'evento e agli spazi disponibili.",
  },
  {
    question: "Come viene servito il cibo?",
    answer:
      "Il servizio può essere organizzato a buffet oppure con panini preparati e consegnati nell'area barbecue. La modalità effettiva viene definita insieme per il singolo evento.",
  },
  {
    question: "È possibile prenotare e ritirare?",
    answer:
      "Sì, alcune preparazioni possono essere prenotate e ritirate in sede. Disponibilità, quantità, tempi e prezzo vengono confermati caso per caso.",
  },
  {
    question: "Quanto anticipo serve?",
    answer:
      "Dipende dalla preparazione e dal tipo di evento. Indicando una data, anche approssimativa, possiamo verificare la fattibilità e concordare i tempi.",
  },
  {
    question: "Come viene calcolato il prezzo?",
    answer:
      "Il prezzo dipende da preparazioni, quantità, luogo, attrezzatura e organizzazione del servizio. Per questo costruiamo la proposta dopo aver raccolto le informazioni essenziali sull'evento.",
  },
];
