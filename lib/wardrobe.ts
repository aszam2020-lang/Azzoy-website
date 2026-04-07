export interface Outfit {
  name: string;
  season: string;
  temperature: string;
  garments: string[];
  description: string;
  placeholderColor: string;
}

export const outfits: Outfit[] = [
  {
    name: "The Introduction",
    season: "October \u00b7 Day",
    temperature: "28\u00b0C",
    garments: [
      "Cream Short-Sleeve Knit Polo",
      "Stone Brushed Cotton Trousers",
    ],
    description:
      "The first look people will see from AZZOY. 28\u00b0C \u2014 short sleeves, warm tones. Two pieces, nothing else needed.",
    placeholderColor: "#A8967A",
  },
  {
    name: "Opening Night",
    season: "October \u00b7 Evening",
    temperature: "22\u00b0C",
    garments: [
      "Navy Fine-Knit Polo",
      "Cream Brushed Cotton Trousers",
    ],
    description:
      "The collection\u2019s signature evening look. Navy polo, cream trousers.",
    placeholderColor: "#1B2838",
  },
  {
    name: "Zamalek Saturday",
    season: "November \u00b7 Weekend",
    temperature: "24\u00b0C",
    garments: [
      "Stone Cotton-Cashmere Half-Zip",
      "Espresso Cotton T-Shirt",
      "Cream Brushed Cotton Trousers",
    ],
    description:
      "Half-zip zipped halfway over the tee, cream trousers below.",
    placeholderColor: "#A8967A",
  },
  {
    name: "Winter Dinner",
    season: "December \u00b7 Evening",
    temperature: "15\u00b0C",
    garments: [
      "Ash Cashmere-Blend Crewneck",
      "Parch Band-Collar Shirt",
      "Navy Drawstring Wool Trousers",
    ],
    description:
      "Knitwear over a shirt collar, dark trousers below.",
    placeholderColor: "#4A4540",
  },
  {
    name: "New Cairo Meeting",
    season: "January \u00b7 Day",
    temperature: "18\u00b0C",
    garments: [
      "Stone Cotton-Cashmere Half-Zip",
      "Parch Band-Collar Shirt",
      "Ash Drawstring Wool Trousers",
    ],
    description:
      "Half-zip collar over band collar. Smart without a tie.",
    placeholderColor: "#A8967A",
  },
  {
    name: "Nile-side",
    season: "February \u00b7 Evening",
    temperature: "14\u00b0C",
    garments: [
      "Navy Cotton-Cashmere Half-Zip",
      "Cream Cashmere-Blend Crewneck",
      "Ash Drawstring Wool Trousers",
    ],
    description:
      "Cream knitwear under navy half-zip, ash below. The collar at the neck replaces any need for a scarf.",
    placeholderColor: "#1B2838",
  },
];
