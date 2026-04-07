export interface Piece {
  slug: string;
  name: string;
  number: string;
  category: string;
  role: string;
  colors: { name: string; hex: string }[];
  whatItIs: string;
  whyItBelongs: string;
  fabricLogic: string;
  silhouetteFit: string;
  pairsWith: string;
  wardrobeRole: string;
  placeholderColor: string;
}

export const pieces: Piece[] = [
  {
    slug: "brushed-cotton-trousers",
    name: "Brushed Cotton Trousers",
    number: "01",
    category: "Bottoms",
    role: "Foundation",
    colors: [
      { name: "Cream", hex: "#F2EDE4" },
      { name: "Stone", hex: "#A8967A" },
      { name: "Nile", hex: "#5A6B48" },
      { name: "Cacao", hex: "#6B5144" },
    ],
    whatItIs:
      "Flat-front trouser in heavyweight brushed cotton with a single forward pleat, side adjusters, and an elasticated back waist. No belt loops, no cuffs.",
    whyItBelongs:
      "The most-worn piece in any wardrobe. These replace whatever chinos are in the drawer \u2014 same versatility, better hand, cleaner line.",
    fabricLogic:
      "Brushed Egyptian cotton, 280gsm. Heavier than a chino, softer to the touch. The brush gives it texture that reads richer than plain cotton.",
    silhouetteFit:
      "Medium rise, straight through the thigh, slight taper to the ankle. The elasticated back gives comfort; the side adjusters and clean front keep it sharp.",
    pairsWith:
      "Every top in the collection. Cream trousers under the half-zip for evening. Stone trousers with polo for daytime. Nile with the half-zip for a weekend look. Cacao with the crewneck for a warm tonal combination.",
    wardrobeRole: "Foundation \u2014 the piece everything else rests on",
    placeholderColor: "#A8967A",
  },
  {
    slug: "band-collar-shirt",
    name: "Band-Collar Shirt",
    number: "02",
    category: "Tops",
    role: "Core",
    colors: [
      { name: "Parch", hex: "#FAF8F4" },
      { name: "Espresso", hex: "#2C1E14" },
    ],
    whatItIs:
      "A shirt with no spread collar \u2014 a clean 2.5cm band at the neck, mother-of-pearl buttons, a slightly longer back hem. Sits between casual and formal.",
    whyItBelongs:
      "The standard dress shirt is wrong for what AZZOY does. Too corporate for dinner, too formal for a Cairo afternoon. The band collar is the middle ground that feels intentional.",
    fabricLogic:
      "Fine Egyptian cotton poplin, 120gsm. Crisp but not stiff. Breathable enough for October warmth, clean enough for January evenings under the half-zip.",
    silhouetteFit:
      "Body follows the torso without gripping it. Slightly curved hem allows wearing untucked. Sleeves end precisely at the wrist bone.",
    pairsWith:
      "Under the half-zip or crewneck for evening. Alone over brushed cotton trousers for daytime. Parch shirt with stone trousers is the easiest Collection One combination.",
    wardrobeRole: "Core \u2014 bridges casual and formal",
    placeholderColor: "#FAF8F4",
  },
  {
    slug: "fine-knit-polo",
    name: "Fine-Knit Polo",
    number: "03",
    category: "Tops",
    role: "Core",
    colors: [
      { name: "Stone", hex: "#A8967A" },
      { name: "Cream", hex: "#F2EDE4" },
      { name: "Navy", hex: "#1B2838" },
    ],
    whatItIs:
      "Long-sleeve polo in fine-gauge knit. Three-button placket, ribbed cuffs, no chest logo.",
    whyItBelongs:
      "October and November in Cairo are still warm by day. A fine-knit polo is the perfect weight for a 25\u00b0C afternoon \u2014 and under a half-zip, it becomes an evening look.",
    fabricLogic:
      "Cotton-cashmere blend, 70/30. The cotton keeps it cool; the cashmere gives it a hand that cotton alone can\u2019t match. 180gsm \u2014 light enough to layer, substantial enough alone.",
    silhouetteFit:
      "Follows the body cleanly. Not tight, not loose. Hem sits at the hip, untucked or half-tucked.",
    pairsWith:
      "Stone polo with cream trousers \u2014 the Collection One signature. Navy polo with stone trousers for daytime. Cream polo alone with nile trousers.",
    wardrobeRole: "Core \u2014 the most versatile top",
    placeholderColor: "#A8967A",
  },
  {
    slug: "cotton-cashmere-half-zip",
    name: "Cotton-Cashmere Half-Zip",
    number: "04",
    category: "Knitwear",
    role: "Layer",
    colors: [
      { name: "Stone", hex: "#A8967A" },
      { name: "Navy", hex: "#1B2838" },
      { name: "Nile", hex: "#5A6B48" },
      { name: "Bordeaux", hex: "#5C2D35" },
    ],
    whatItIs:
      "A mid-weight half-zip in cotton-cashmere knit. Ribbed collar and cuffs, no branding. The zip is matte brass, not chrome \u2014 warm metal that matches the trouser hardware.",
    whyItBelongs:
      "The half-zip is the most-worn layering piece in Cairo from November through February. Men wear them to the office, to dinner, walking on the Corniche. AZZOY\u2019s replaces the mall brands.",
    fabricLogic:
      "Cotton-cashmere blend, 70/30, 280gsm. Heavier than the polo, with more structure. The cotton keeps it breathable for Cairo\u2019s mild winters; the cashmere gives it a softness cotton alone can\u2019t match.",
    silhouetteFit:
      "Sits clean on the body without bulk. The collar stands when zipped and folds flat when open. Hem hits at the hip.",
    pairsWith:
      "Over the T-shirt or band-collar shirt with any trouser in the collection. Stone half-zip with cream trousers for weekend. Navy half-zip over the band-collar shirt for a layered evening look.",
    wardrobeRole: "Layer \u2014 the everyday piece, the one he reaches for first",
    placeholderColor: "#1B2838",
  },
  {
    slug: "cashmere-blend-crewneck",
    name: "Cashmere-Blend Crewneck",
    number: "05",
    category: "Knitwear",
    role: "Layer",
    colors: [
      { name: "Cream", hex: "#F2EDE4" },
      { name: "Ash", hex: "#4A4540" },
      { name: "Nile", hex: "#5A6B48" },
      { name: "Cacao", hex: "#6B5144" },
    ],
    whatItIs:
      "A crewneck sweater in mid-weight cashmere blend. No logos, no ribbed detailing beyond the cuffs and hem. The simplest piece in the collection.",
    whyItBelongs:
      "December through February in Cairo averages 12\u201314\u00b0C at night. Air conditioning in restaurants can make it cooler. A proper knit layer is necessary.",
    fabricLogic:
      "Wool-cashmere blend, 60/40, 7-gauge. The wool gives structure; the cashmere gives softness against the skin. This ratio is deliberate \u2014 100% cashmere pills and sags. This won\u2019t.",
    silhouetteFit:
      "Sits on the body without clinging. Enough room to layer a shirt underneath. Hem falls at the hip.",
    pairsWith:
      "Over the band-collar shirt with brushed cotton trousers. Cream crewneck with navy trousers for winter evenings. Cacao crewneck with cream trousers for a warm tonal look.",
    wardrobeRole: "Layer \u2014 warmth without a jacket",
    placeholderColor: "#4A4540",
  },
  {
    slug: "drawstring-wool-trousers",
    name: "Drawstring Wool Trousers",
    number: "06",
    category: "Bottoms",
    role: "Foundation",
    colors: [
      { name: "Ash", hex: "#4A4540" },
      { name: "Navy", hex: "#1B2838" },
      { name: "Espresso", hex: "#2C1E14" },
    ],
    whatItIs:
      "Trouser in tropical-weight wool with a concealed drawstring waist, single forward pleat, and slash pockets. The front reads as a traditional waistband; the drawstring is functional, not decorative.",
    whyItBelongs:
      "Without a jacket, the trouser cannot look like an orphaned suit piece. The drawstring waist signals that this trouser was made for knitwear and polos, not for a blazer that got left behind.",
    fabricLogic:
      "Tropical wool, 210gsm. It drapes better than cotton, holds a soft crease, and breathes in Cairo\u2019s winter warmth.",
    silhouetteFit:
      "Medium rise, relaxed through the thigh with a gentle taper to the ankle. Fuller than the brushed cotton pair \u2014 the wool needs room to drape. No break at the hem.",
    pairsWith:
      "The crewneck, the half-zip, the band-collar shirt. Ash drawstring trousers with cream crewneck for a November dinner. Navy with parch band-collar for evening.",
    wardrobeRole: "Foundation \u2014 the dressier base",
    placeholderColor: "#4A4540",
  },
  {
    slug: "cotton-tshirt",
    name: "Cotton T-Shirt",
    number: "07",
    category: "Tops",
    role: "Base",
    colors: [
      { name: "Espresso", hex: "#2C1E14" },
      { name: "Parch", hex: "#FAF8F4" },
      { name: "Stone", hex: "#A8967A" },
    ],
    whatItIs:
      "Crewneck T-shirt in heavyweight fine cotton. No graphics, no visible branding. The hem, the weight, and the hand tell you everything.",
    whyItBelongs:
      "Every wardrobe system needs a base layer that works alone on hot days and underneath layers on cool ones. The gap between this and a mall T-shirt is obvious.",
    fabricLogic:
      "Long-staple Egyptian cotton jersey, 220gsm. Heavier than a standard tee, which means it holds its shape and doesn\u2019t cling. The long-staple fiber gives a smoothness that gets better with washing.",
    silhouetteFit:
      "Straight body, not boxy, not slim. The shoulder seam sits exactly on the shoulder bone. Slightly longer in the back. The hem is clean.",
    pairsWith:
      "Under the half-zip, under the crewneck \u2014 or alone with brushed cotton trousers. Espresso tee with stone trousers is the simplest good look in the collection.",
    wardrobeRole: "Base \u2014 the invisible foundation of every layer",
    placeholderColor: "#2C1E14",
  },
  {
    slug: "short-sleeve-knit-polo",
    name: "Short-Sleeve Knit Polo",
    number: "08",
    category: "Tops",
    role: "Core",
    colors: [
      { name: "Cream", hex: "#F2EDE4" },
      { name: "Stone", hex: "#A8967A" },
      { name: "Navy", hex: "#1B2838" },
    ],
    whatItIs:
      "Short-sleeve polo in textured cotton knit. Two-button placket, ribbed collar that sits flat, no chest logo. Finished like knitwear, not cut-and-sew \u2014 the body is fully fashioned, not trimmed from a roll.",
    whyItBelongs:
      "October in Cairo is 28\u201332\u00b0C during the day. The long-sleeve polo is too warm for October. The T-shirt is too bare. This bridges both.",
    fabricLogic:
      "100% Egyptian cotton in a textured knit, 200gsm. The texture gives it visual weight that a plain piqu\u00e9 polo lacks. No cashmere \u2014 this is a warm-weather piece and the cotton breathes better alone.",
    silhouetteFit:
      "Sleeve ends mid-bicep, not at the shoulder and not at the elbow. Body is clean but not tight. The hem is straight, sitting at the hip.",
    pairsWith:
      "Cream short-sleeve polo with stone trousers \u2014 the October daytime look. Navy with cream trousers for a cooler evening. Stone alone with nile brushed cotton trousers for weekend.",
    wardrobeRole: "Core \u2014 the warm-weather alternative to the long-sleeve polo",
    placeholderColor: "#F2EDE4",
  },
];

export function getPieceBySlug(slug: string): Piece | undefined {
  return pieces.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return pieces.map((p) => p.slug);
}
