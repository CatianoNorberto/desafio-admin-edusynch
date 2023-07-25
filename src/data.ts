import Group from './assets/images/group.svg'
import Bitcoin from './assets/images/bitcoin.svg'
import Currency from './assets/images/currency.svg'
import Chart from './assets/images/chartethereum.svg'
import Laptop from './assets/images/laptop.svg'

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        // title: "Homepage",
        url: "/",
        icon: Group,
      },
      {
        id: 2,
        // title: "Profile",
        url: "/",
        icon: Currency,
      },
      {
        id: 3,
        // title: "bitcoin",
        url: "/",
        icon: Bitcoin,
      },
      {
        id: 3,
        // title: "bitcoin",
        url: "/",
        icon: Chart,
      },
    ],
  },
];

export const cardCurrency = [
  {
    id: 1,
    image: Bitcoin,
    title:'For your company',
    subtitle:'Crypto Solutions',
    about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, ',
  },
  {
    id: 2,
    image: Currency,
    title:'For your company',
    subtitle:'Crypto Solutions',
    about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, ',
  },
]

export const cardBisnessComputer = [
  {
    id: 1,
    image: Chart,
    title:'For your company',
    subtitle:'Crypto Solutions',
    about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, ',
  },
  {
    id: 2,
    image: Laptop,
    title:'For your company',
    subtitle:'Crypto Solutions',
    about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, ',
  },
]