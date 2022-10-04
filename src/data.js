import React from 'react';

const data = [
  {
    id: 1,
    name: 'TAMKO DANIELLE',
    specialty: 'GELE',
    rubrique: 1,
    imageUrl: '/images/rubriques/GELE/alcools/baileys.jpg',
    title: 'baileys',
  },
  {
    id: 2,
    name: 'BIKORO ANTOINE',
    specialty: 'GELE',
    rubrique: 1,
    imageUrl: '/images/rubriques/GELE/alcools/belaire.jpg',
    title: 'belaire',
  },
  {
    id: 3,
    name: 'SADJO ULRICH',
    specialty: 'GELE',
    rubrique: 1,
    imageUrl: '/images/rubriques/GELE/alcools/campari.jpg',
    title: 'campari',
  },
  {
    id: 4,
    name: 'TAMOKOUE MAMBOU',
    specialty: 'GELE',
    rubrique: 1,
    imageUrl: '/images/rubriques/GELE/alcools/chivas.jpg',
    title: 'chivas',
  },
  {
    id: 5,
    name: 'AMOU’OU MVONDO',
    specialty: 'GELE',
    rubrique: 1,
    imageUrl: '/images/rubriques/GELE/alcools/jackdaniels.jpg',
    title: 'jack daniels',
  },
  {
    id: 6,
    name: 'GAELLE TCHOCK',
    specialty: 'GELE',
    rubrique: 1,
    imageUrl: '/images/rubriques/GELE/alcools/tequilla.jpg',
    title: 'tequilla',
  },
  {
    id: 7,
    name: 'MONDO STEVE',
    specialty: 'GELE',
    rubrique: 1,
    imageUrl: '/images/rubriques/GELE/alcools/vodka.jpg',
    title: 'vodka',
  },
  {
    id: 8,
    name: 'TEKAPSO YANN',
    specialty: 'GELE',
    rubrique: 2,
    imageUrl: '/images/rubriques/GELE/bouffe/eru.png',
    title: 'eru',
  },
  {
    id: 9,
    name: 'NJATENG LOIC',
    specialty: 'GELE',
    rubrique: 2,
    imageUrl: '/images/rubriques/GELE/bouffe/koki.jpg',
    title: 'koki',
  },
  {
    id: 10,
    name: 'ZEH ZANG ASTRIDE',
    specialty: 'GELE',
    rubrique: 2,
    imageUrl: '/images/rubriques/GELE/bouffe/nkui.jpg',
    title: 'nkui',
  },
  {
    id: 11,
    name: 'DONTSA REINE',
    specialty: 'GELE',
    rubrique: 2,
    imageUrl: '/images/rubriques/GELE/bouffe/okok.jpg',
    title: 'okok',
  },
  {
    id: 12,
    name: 'TAMOKOUE MAMBOU',
    specialty: 'GELE',
    rubrique: 2,
    imageUrl: '/images/rubriques/GELE/bouffe/pilé.jpg',
    title: 'pilé',
  },
  {
    id: 13,
    name: 'NYANGONO WINNIE',
    specialty: 'GELE',
    rubrique: 2,
    imageUrl: '/images/rubriques/GELE/bouffe/tarosaucejaune.jpg',
    title: 'taro sauce jaune',
  },
  {
    id: 14,
    name: 'MEVONGO PAUL',
    specialty: 'GELE',
    rubrique: 7,
    imageUrl: '/images/rubriques/GELE/film/365jours.jpg',
    title: '365 jours',
  },
  {
    id: 15,
    name: 'MEDIEM PHILIPPE',
    specialty: 'GELE',
    rubrique: 7,
    imageUrl: '/images/rubriques/GELE/film/annabelle.jpg',
    title: 'annabelle',
  },
  {
    id: 16,
    name: 'ZOUMKEZANG BRAI',
    specialty: 'GELE',
    rubrique: 7,
    imageUrl: '/images/rubriques/GELE/film/ça.jpg',
    title: 'ça',
  },
  {
    id: 17,
    name: 'BIKORO ANTOINE',
    specialty: 'GELE',
    rubrique: 7,
    imageUrl: '/images/rubriques/GELE/film/chapelledudiable.jpg',
    title: 'chapelle du diable',
  },
  {
    id: 18,
    name: 'ADA FELICITE',
    specialty: 'GELE',
    rubrique: 7,
    imageUrl: '/images/rubriques/GELE/film/fastandfurious.jpg',
    title: 'fast and furious',
  },
  {
    id: 19,
    name: 'TAMKO DANIELLE',
    specialty: 'GELE',
    rubrique: 7,
    imageUrl: '/images/rubriques/GELE/film/host.jpg',
    title: 'host',
  },
  {
    id: 20,
    name: 'ABOTYI JEFF',
    specialty: 'GELE',
    rubrique: 7,
    imageUrl: '/images/rubriques/GELE/film/lanonne.jpg',
    title: 'la nonne',
  },
  {
    id: 21,
    name: 'NYANGONO WINNIE',
    specialty: 'GELE',
    rubrique: 4,
    imageUrl: '/images/rubriques/GELE/mangas/attaquedestitans.jpg',
    title: 'attaque des titans',
  },
  {
    id: 22,
    name: 'KENFACK IVAN',
    specialty: 'GELE',
    rubrique: 4,
    imageUrl: '/images/rubriques/GELE/mangas/blackclover.jpg',
    title: 'black clover',
  },
  {
    id: 23,
    name: 'KOUAKAM LUPRINCE',
    specialty: 'GELE',
    rubrique: 4,
    imageUrl: '/images/rubriques/GELE/mangas/demonslayer.jpg',
    title: 'demon slayer',
  },
  {
    id: 24,
    name: 'TANTSIE JIRUS',
    specialty: 'GELE',
    rubrique: 4,
    imageUrl: '/images/rubriques/GELE/mangas/dragonball.jpg',
    title: 'dragon ball',
  },
  {
    id: 25,
    name: 'MANI BENE',
    specialty: 'GELE',
    rubrique: 4,
    imageUrl: '/images/rubriques/GELE/mangas/hunterxhunter.jpg',
    title: 'hunter x hunter',
  },
  {
    id: 26,
    name: 'ELUMBA LAETITIA',
    specialty: 'GELE',
    rubrique: 4,
    imageUrl: '/images/rubriques/GELE/mangas/naruto.jpg',
    title: 'naruto',
  },

  {
    id: 27,
    name: 'DJIETO LORDON',
    specialty: 'GELE',
    rubrique: 5,
    imageUrl: '/images/rubriques/GELE/marques/adidas.jpg',
    title: 'adidas',
  },
  {
    id: 28,
    name: 'ADA FELICITE',
    specialty: 'GELE',
    rubrique: 5,
    imageUrl: '/images/rubriques/GELE/marques/chanel.jpg',
    title: 'chanel',
  },
  {
    id: 29,
    name: 'TANKEU TALLA',
    specialty: 'GELE',
    rubrique: 5,
    imageUrl: '/images/rubriques/GELE/marques/dior.jpg',
    title: 'dior',
  },
  {
    id: 30,
    name: 'YANOU PAULIN',
    specialty: 'GELE',
    rubrique: 5,
    imageUrl: '/images/rubriques/GELE/marques/h&m.jpg',
    title: 'h & m',
  },
  {
    id: 31,
    name: 'ZOUMKEZAMG BRAI',
    specialty: 'GELE',
    rubrique: 5,
    imageUrl: '/images/rubriques/GELE/marques/lacoste.png',
    title: 'lacoste',
  },
  {
    id: 32,
    name: 'TEKAPSO YANN',
    specialty: 'GELE',
    rubrique: 5,
    imageUrl: '/images/rubriques/GELE/marques/nike.jpg',
    title: 'nike',
  },
  {
    id: 33,
    name: 'TANKEU TALLA',
    specialty: 'GELE',
    rubrique: 5,
    imageUrl: '/images/rubriques/GELE/marques/zara.jpg',
    title: 'zara',
  },
  {
    id: 34,
    name: 'DAOU STEVEN',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/audi.jpg',
    title: 'audi',
  },
  {
    id: 35,
    name: 'DONTSA RENNE',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/bmw.jpg',
    title: 'bmw',
  },
  {
    id: 36,
    name: 'SADJO ULRICH',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/ferrari.webp',
    title: 'ferrari',
  },
  {
    id: 37,
    name: 'DAOU STEVEN',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/lamborghini.jpg',
    title: 'lamborghini',
  },
  {
    id: 38,
    name: 'DJIETO LORDON',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/landrover.jpg',
    title: 'land rover',
  },
  {
    id: 39,
    name: 'GAELLE TCHOCK',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/lexus.jpg',
    title: 'lexus',
  },
  {
    id: 40,
    name: 'YANOU PAULIN',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/mercedes-benz.jpg',
    title: 'mercedes-benz',
  },
  {
    id: 41,
    name: 'KENFACK IVAN',
    specialty: 'GELE',
    rubrique: 6,
    imageUrl: '/images/rubriques/GELE/voitures/porsche.jpg',
    title: 'porsche',
  },
  {
    id: 42,
    name: 'ONDIGUI GERMAINE',
    specialty: 'GTEL',
    rubrique: 8,
    imageUrl: '/images/rubriques/getel/capotes/durex.jpg',
    title: 'durex',
  },
  {
    id: 43,
    name: 'MBOCK ISMAEL',
    specialty: 'GTEL',
    rubrique: 8,
    imageUrl: '/images/rubriques/getel/capotes/manix.png',
    title: 'manix',
  },
  {
    id: 44,
    name: 'KOUNGOU FERNAND',
    specialty: 'GTEL',
    rubrique: 8,
    imageUrl: '/images/rubriques/getel/capotes/skin.jpg',
    title: 'skin',
  },
  {
    id: 45,
    name: 'AKEM LOIC',
    specialty: 'GTEL',
    rubrique: 8,
    imageUrl: '/images/rubriques/getel/capotes/soft.jpg',
    title: 'soft',
  },
  {
    id: 46,
    name: 'MBA DAVID',
    specialty: 'GTEL',
    rubrique: 9,
    imageUrl: '/images/rubriques/getel/musiques/44,niska.jpg',
    title: '44,niska',
  },
  {
    id: 47,
    name: 'ZAMO',
    specialty: 'GTEL',
    rubrique: 9,
    imageUrl: '/images/rubriques/getel/musiques/enfer,stromae.jpg',
    title: 'enfer,stromae',
  },
  {
    id: 48,
    name: 'MBASSI MBELLE',
    specialty: 'GTEL',
    rubrique: 9,
    imageUrl: '/images/rubriques/getel/musiques/jefe,ninho.jpg',
    title: 'jefe,ninho',
  },
  {
    id: 49,
    name: 'OYANA MELODIE',
    specialty: 'GTEL',
    rubrique: 9,
    imageUrl: '/images/rubriques/getel/musiques/macarenaa,damso.jpg',
    title: 'macarenaa,damso',
  },
  {
    id: 50,
    name: 'MANGA FOE',
    specialty: 'GTEL',
    rubrique: 9,
    imageUrl: '/images/rubriques/getel/musiques/telephone,booba.jpg',
    title: 'telephone,booba',
  },

  {
    id: 51,
    name: 'MOMO METCHOP GYREL',
    specialty: 'GTEL',
    rubrique: 10,
    imageUrl: '/images/rubriques/getel/SERIES/dynastie.jpg',
    title: 'dynastie',
  },
  {
    id: 52,
    name: 'TCHOUNTANG SERENA',
    specialty: 'GTEL',
    rubrique: 10,
    imageUrl: '/images/rubriques/getel/SERIES/riverdale.png',
    title: 'riverdale',
  },
  {
    id: 53,
    name: 'FONKOU TCHINDA',
    specialty: 'GTEL',
    rubrique: 10,
    imageUrl: '/images/rubriques/getel/SERIES/scandal.jpg',
    title: 'scandal',
  },
  {
    id: 54,
    name: 'NCHANG JETHRO',
    specialty: 'GTEL',
    rubrique: 10,
    imageUrl: '/images/rubriques/getel/SERIES/vampirediaries.jpg',
    title: 'vampire diaries',
  },

  {
    id: 55,
    name: 'ESSAMA ANTHONY',
    specialty: 'GTEL',
    rubrique: 11,
    imageUrl: '/images/rubriques/getel/stars/booba.jpg',
    title: 'booba',
  },
  {
    id: 56,
    name: 'OKALA XAVIER',
    specialty: 'GTEL',
    rubrique: 11,
    imageUrl: '/images/rubriques/getel/stars/damso.jpg',
    title: 'damso',
  },
  {
    id: 57,
    name: 'NEOSSI TCHINDA',
    specialty: 'GTEL',
    rubrique: 11,
    imageUrl: '/images/rubriques/getel/stars/MJ.jpg',
    title: 'michael jackson',
  },
  {
    id: 58,
    name: 'NSOMO CÉDRIC',
    specialty: 'GTEL',
    rubrique: 11,
    imageUrl: '/images/rubriques/getel/stars/ninho.jpg',
    title: 'ninho',
  },
  {
    id: 59,
    name: 'SALLA JACKSOM',
    specialty: 'GTEL',
    rubrique: 11,
    imageUrl: '/images/rubriques/getel/stars/niska.jpg',
    title: 'niska',
  },

  {
    id: 60,
    name: 'Essama Anthony',
    specialty: 'GTEL',
    rubrique: 11,
    imageUrl: '/images/rubriques/getel/stars/burna-boy.webp',
    title: 'burna boy',
  },
  {
    id: 61,
    name: 'Mango Foe',
    specialty: 'GTEL',
    rubrique: 10,
    imageUrl: '/images/rubriques/getel/SERIES/prison-break.jpg',
    title: 'Prison Break',
  },
  {
    id: 62,
    name: 'Nsomo Cedric',
    specialty: 'GTEL',
    rubrique: 9,
    imageUrl: '/images/rubriques/getel/musiques/last-last.jfif',
    title: 'Last Last Burna boy',
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
