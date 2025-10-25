export interface Stavka {
  naziv: string;
  cena: string;
}

export interface Kategorija {
  naziv: string;
  stavke: Stavka[];
}

export const jelovnik: Kategorija[] = [
  {
    naziv: "DORUČAK",
    stavke: [
      { naziv: "Omlet sa šunkom", cena: "450 RSD" },
      { naziv: "Palačinke sa nutelom", cena: "380 RSD" },
      { naziv: "Domaća pogača sa kajmakom", cena: "280 RSD" },
      { naziv: "Jaja na oko sa slaninom", cena: "320 RSD" },
      { naziv: "Forest doručak (jaja, slanina, dvopek)", cena: "320 RSD" },
      { naziv: "Forest doručak (jaja, slanina, dvopek)", cena: "320 RSD" },
    ]
  },
  {
    naziv: "PREDJELA",
    stavke: [
      { naziv: "Kajmak sa pršutom", cena: "550 RSD" },
      { naziv: "Domaća pogačica sa ajvarom", cena: "280 RSD" },
      { naziv: "Teleća čorba", cena: "320 RSD" },
      { naziv: "Pohovani kačkavalj", cena: "420 RSD" }
    ]
  },
  {
    naziv: "GLAVNA JELA",
    stavke: [
      { naziv: "Vešalica sa roštilja", cena: "890 RSD" },
      { naziv: "Svinjski vrat u dimljenoj slanini", cena: "950 RSD" },
      { naziv: "Domaći ćevapi (6 kom.)", cena: "680 RSD" },
      { naziv: "Pileći file u sosu od pečuraka", cena: "750 RSD" }
    ]
  },
  {
    naziv: "PIĆA",
    stavke: [
      { naziv: "Domaća rakija", cena: "350 RSD" },
      { naziv: "Vino (0.2l)", cena: "280 RSD" },
      { naziv: "Pivo (0.5l)", cena: "220 RSD" },
      { naziv: "Sok (0.33l)", cena: "180 RSD" }
    ]
  },
  {
    naziv: "DESERTI",
    stavke: [
      { naziv: "Palačinke sa džemom", cena: "250 RSD" },
      { naziv: "Štrudla sa jabukama", cena: "280 RSD" },
      { naziv: "Čokoladna torta", cena: "320 RSD" },
      { naziv: "Voćna salata", cena: "200 RSD" }
    ]
  },
  {
    naziv: "PRILOZI",
    stavke: [
      { naziv: "Pomfrit", cena: "150 RSD" },
      { naziv: "Pirinač", cena: "120 RSD" },
      { naziv: "Srpska salata", cena: "180 RSD" },
      { naziv: "Povrće sa roštilja", cena: "200 RSD" }
    ]
  }
];