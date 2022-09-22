import React from 'react';

const data = [
  {
    id: 1,
    name: 'TAMKO DANIELLE',
    specialty: 'GELE',
    rubrique: 1,
    imageUrl: '/images/rubriques/GELE/alcools/baileys.jpg',
  },
  {
    id: 2,
    name: 'BIKORO ANTOINE',
    specialty: 'GELE',
    rubrique: 1,
    imageUrl: '/images/rubriques/GELE/alcools/belaire.jpg',
  },
  {
    id: 3,
    name: 'SADJO ULRICH',
    specialty: 'GELE',
    rubrique: 1,
    imageUrl: '/images/rubriques/GELE/alcools/campari.jpg',
  },
  {
    id: 4,
    name: 'TAMOKOUE MAMBOU',
    specialty: 'GELE',
    rubrique: 1,
    imageUrl: '/images/rubriques/GELE/alcools/chivas.jpg',
  },
  {
    id: 5,
    name: 'AMOU’OU MVONDO',
    specialty: 'GELE',
    rubrique: 1,
    imageUrl: '/images/rubriques/GELE/alcools/jackdaniels.jpg',
  },
  {
    id: 6,
    name: 'GAELLE TCHOCK',
    specialty: 'GELE',
    rubrique: 1,
    imageUrl: '/images/rubriques/GELE/alcools/tequilla.jpg',
  },
  {
    id: 7,
    name: 'MONDO STEVE',
    specialty: 'GELE',
    rubrique: 1,
    imageUrl: '/images/rubriques/GELE/alcools/vodka.jpg',
  },
  {
    id: 8,
    name: 'TEKAPSO YANN',
    specialty: 'GELE',
    rubrique: 2,
    imageUrl: '/images/rubriques/GELE/bouffe/eru.png',
  },
  {
    id: 9,
    name: 'NJATENG LOIC',
    specialty: 'GELE',
    rubrique: 2,
    imageUrl: '/images/rubriques/GELE/bouffe/koki.jpg',
  },
  {
    id: 10,
    name: 'ZEH ZANG ASTRIDE',
    specialty: 'GELE',
    rubrique: 2,
    imageUrl: '/images/rubriques/GELE/bouffe/nkui.jpg',
  },
  {
    id: 11,
    name: 'DONTSA REINE',
    specialty: 'GELE',
    rubrique: 2,
    imageUrl: '/images/rubriques/GELE/bouffe/okok.jpg',
  },
  {
    id: 12,
    name: 'TAMOKOUE MAMBOU',
    specialty: 'GELE',
    rubrique: 2,
    imageUrl: '/images/rubriques/GELE/bouffe/pilé.jpg',
  },
  {
    id: 13,
    name: 'NYANGONO WINNIE',
    specialty: 'GELE',
    rubrique: 2,
    imageUrl: '/images/rubriques/GELE/bouffe/tarosaucejaune.jpg',
  },
  {
    id: 14,
    name: 'MEVONGO PAUL',
    specialty: 'GELE',
    rubrique: 7,
    imageUrl: '/images/rubriques/GELE/film/365jours.jpg',
  },
  {
    id: 15,
    name: 'MEDIEM PHILIPPE',
    specialty: 'GELE',
    rubrique: 7,
    imageUrl: '/images/rubriques/GELE/film/annabelle.jpg',
  },
  {
    id: 16,
    name: 'ZOUMKEZANG BRAI',
    specialty: 'GELE',
    rubrique: 7,
    imageUrl: '/images/rubriques/GELE/film/ça.jpg',
  },
  {
    id: 17,
    name: 'BIKORO ANTOINE',
    specialty: 'GELE',
    rubrique: 7,
    imageUrl: '/images/rubriques/GELE/film/chapelledudiable.jpg',
  },
  {
    id: 18,
    name: 'ADA FELICITE',
    specialty: 'GELE',
    rubrique: 7,
    imageUrl: '/images/rubriques/GELE/film/fastandfurious.jpg',
  },
  {
    id: 19,
    name: 'TAMKO DANIELLE',
    specialty: 'GELE',
    rubrique: 7,
    imageUrl: '/images/rubriques/GELE/film/host.jpg',
  },
  {
    id: 20,
    name: 'ABOTYI JEFF',
    specialty: 'GELE',
    rubrique: 7,
    imageUrl: '/images/rubriques/GELE/film/lanonne.jpg',
  },
  {
    id: 21,
    name: 'NYANGONO WINNIE',
    specialty: 'GELE',
    rubrique: 4,
    imageUrl: '/images/rubriques/GELE/mangas/attaquedestitans.jpg',
  },
  {
    id: 22,
    name: 'KENFACK IVAN',
    specialty: 'GELE',
    rubrique: 4,
    imageUrl: '/images/rubriques/GELE/mangas/blackclover.jpg',
  },
  {
    id: 23,
    name: 'KOUAKAM LUPRINCE',
    specialty: 'GELE',
    rubrique: 4,
    imageUrl: '/images/rubriques/GELE/mangas/demonslayer.jpg',
  },
  {
    id: 24,
    name: 'TANTSIE JIRUS',
    specialty: 'GELE',
    rubrique: 4,
    imageUrl: '/images/rubriques/GELE/mangas/dragonball.jpg',
  },
  {
    id: 25,
    name: 'MANI BENE',
    specialty: 'GELE',
    rubrique: 4,
    imageUrl: '/images/rubriques/GELE/mangas/hunterxhunter.jpg',
  },
  {
    id: 26,
    name: 'ELUMBA LAETITIA',
    specialty: 'GELE',
    rubrique: 4,
    imageUrl: '/images/rubriques/GELE/mangas/naruto.jpg',
  },

  {
    id: 27,
    name: 'DJIETO LORDON',
    specialty: 'GELE',
    rubrique: 5,
    imageUrl: '/images/rubriques/GELE/marques/adidas.jpg',
  },
  {
    id: 28,
    name: 'ADA FELICITE',
    specialty: 'GELE',
    rubrique: 5,
    imageUrl: '/images/rubriques/GELE/marques/chanel.jpg',
  },
  {
    id: 29,
    name: 'TANKEU TALLA',
    specialty: 'GELE',
    rubrique: 5,
    imageUrl: '/images/rubriques/GELE/marques/dior.jpg',
  },
  {
    id: 30,
    name: 'YANOU PAULIN',
    specialty: 'GELE',
    rubrique: 5,
    imageUrl: '/images/rubriques/GELE/marques/h&m.jpg',
  },
  {
    id: 31,
    name: 'ZOUMKEZAMG BRAI',
    specialty: 'GELE',
    rubrique: 5,
    imageUrl: '/images/rubriques/GELE/marques/lacoste.png',
  },
  {
    id: 32,
    name: 'TEKAPSO YANN',
    specialty: 'GELE',
    rubrique: 5,
    imageUrl: '/images/rubriques/GELE/marques/nike.jpg',
  },
  {
    id: 33,
    name: 'TANKEU TALLA',
    specialty: 'GELE',
    rubrique: 5,
    imageUrl: '/images/rubriques/GELE/marques/zara.jpg',
  },
  {
    id: 34,
    name: 'DAOU STEVEN',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/audi.jpg',
  },
  {
    id: 35,
    name: 'DONTSA RENNE',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/bmw.jpg',
  },
  {
    id: 36,
    name: 'SADJO ULRICH',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/ferrari.webp',
  },
  {
    id: 37,
    name: 'DAOU STEVEN',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/lamborghini.jpg',
  },
  {
    id: 38,
    name: 'DJIETO LORDON',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/landrover.jpg',
  },
  {
    id: 39,
    name: 'GAELLE TCHOCK',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/lexus.jpg',
  },
  {
    id: 40,
    name: 'YANOU PAULIN',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/mercedes-benz.jpg',
  },
  {
    id: 41,
    name: 'KENFACK IVAN',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/porsche.jpg',
  },
  {
    id: 42,
    name: 'ONDIGUI GERMAINE',
    specialty: 'GETEL',
    rubrique: 8,
    imageUrl: '/images/rubriques/getel/capotes/durex.jpg',
  },
  {
    id: 43,
    name: 'MBOCK ISMAEL',
    specialty: 'GETEL',
    rubrique: 8,
    imageUrl: '/images/rubriques/getel/capotes/manix.png',
  },
  {
    id: 44,
    name: 'KOUNGOU FERNAND',
    specialty: 'GETEL',
    rubrique: 8,
    imageUrl: '/images/rubriques/getel/capotes/skin.jpg',
  },
  {
    id: 45,
    name: 'AKEM LOIC',
    specialty: 'GETEL',
    rubrique: 8,
    imageUrl: '/images/rubriques/getel/capotes/soft.jpg',
  },
  {
    id: 46,
    name: 'MBA DAVID',
    specialty: 'GETEL',
    rubrique: 9,
    imageUrl: '/images/rubriques/getel/musiques/44,niska.jpg',
  },
  {
    id: 47,
    name: 'ZAMO',
    specialty: 'GETEL',
    rubrique: 9,
    imageUrl: '/images/rubriques/getel/musiques/enfer,stromae.jpg',
  },
  {
    id: 48,
    name: 'MBASSI MBELLE',
    specialty: 'GETEL',
    rubrique: 9,
    imageUrl: '/images/rubriques/getel/musiques/jefe,ninho.jpg',
  },
  {
    id: 49,
    name: 'OYANA MELODIE',
    specialty: 'GETEL',
    rubrique: 9,
    imageUrl: '/images/rubriques/getel/musiques/macarenaa,damso.jpg',
  },
  {
    id: 50,
    name: 'MANGA FOE',
    specialty: 'GETEL',
    rubrique: 9,
    imageUrl: '/images/rubriques/getel/musiques/telephone,booba.jpg',
  },

  {
    id: 51,
    name: 'MOMO METCHOP GYREL',
    specialty: 'GETEL',
    rubrique: 10,
    imageUrl: '/images/rubriques/getel/SERIES/dynastie.jpg',
  },
  {
    id: 52,
    name: 'TCHOUNTANG SERENA',
    specialty: 'GETEL',
    rubrique: 10,
    imageUrl: '/images/rubriques/getel/SERIES/riverdale.png',
  },
  {
    id: 53,
    name: 'FONKOU TCHINDA',
    specialty: 'GETEL',
    rubrique: 10,
    imageUrl: '/images/rubriques/getel/SERIES/scandal.jpg',
  },
  {
    id: 54,
    name: 'NCHANG JETHRO',
    specialty: 'GETEL',
    rubrique: 10,
    imageUrl: '/images/rubriques/getel/SERIES/vampirediaries.jpg',
  },

  {
    id: 55,
    name: 'ESSAMA ANTHONY',
    specialty: 'GETEL',
    rubrique: 11,
    imageUrl: '/images/rubriques/getel/stars/booba.jpg',
  },
  {
    id: 56,
    name: 'OKALA XAVIER',
    specialty: 'GETEL',
    rubrique: 11,
    imageUrl: '/images/rubriques/getel/stars/damso.jpg',
  },
  {
    id: 57,
    name: 'NEOSSI TCHINDA',
    specialty: 'GETEL',
    rubrique: 11,
    imageUrl: '/images/rubriques/getel/stars/MJ.jpg',
  },
  {
    id: 58,
    name: 'NSOMO CEDRICK',
    specialty: 'GETEL',
    rubrique: 11,
    imageUrl: '/images/rubriques/getel/stars/ninho.jpg',
  },
  {
    id: 59,
    name: 'SALLA JACKSOM',
    specialty: 'GETEL',
    rubrique: 11,
    imageUrl: '/images/rubriques/getel/stars/niska.jpg',
  },
];

const rubriques = [
  {
    id: 1,
    name: 'ALCOOLS',
    image: '/images/rubriques/GELE/alcools/a-icon.jpg',
  },
  {
    id: 2,
    name: 'BOUFFE',
    image: '/images/rubriques/GELE/bouffe/a-icon.jpg',
  },
  {
    id: 4,
    name: 'MANGAS',
    image: '/images/rubriques/GELE/mangas/a-icon.jpg',
  },
  {
    id: 5,
    name: 'MARQUES',
    image: '/images/rubriques/GELE/marques/a-icon.jpg',
  },
  {
    id: 6,
    name: 'VOITURES',
    image: '/images/rubriques/GELE/voitures/a-icon.jpg',
  },
  {
    id: 7,
    name: 'FILMS',
    image: '/images/rubriques/GELE/film/a-icon.png',
  },
  {
    id: 8,
    name: 'CAPOTES',
    image: '/images/rubriques/getel/capotes/a-icon.jpg',
  },
  {
    id: 9,
    name: 'MUSIQUES',
    image: '/images/rubriques/getel/musiques/a-icon.jpg',
  },
  {
    id: 10,
    name: 'SERIES',
    image: '/images/rubriques/getel/SERIES/a-icon.jpg',
  },
  {
    id: 11,
    name: 'STARS',
    image: '/images/rubriques/getel/stars/A-ICONµ.jpg',
  },
];

export { data, rubriques };
