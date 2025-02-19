export type TokenCategories = 'defi' | 'wallets' | 'games' | 'all' | 'dex'

export interface Category {
  id: TokenCategories
  title: string
}

export const categories: Category[] = [
  {
    id: 'all',
    title: 'Все',
  },
  {
    id: 'defi',
    title: 'DeFi',
  },
  {
    id: 'wallets',
    title: 'Wallets',
  },
  {
    id: 'games',
    title: 'Games',
  },
  {
    id: 'dex',
    title: 'DEX',
  },
]

export interface PriceChange {
  hours24: number
  days7: number
  days365: number
}

export interface Token {
  id: number
  name: string
  symbol: string
  address: string
  logoURI: string
  categories: TokenCategories[]
  description: string

  price: number
  priceChange: PriceChange
  volume: number
  volumeChangePercentage: number
  tvl: number
  tvlChangePercentage: number
  users: number
}

export const tokens: Token[] = [
  {
    id: 1,
    name: 'Wrapped EVER',
    symbol: 'WEVER',
    address: '0:a49cd4e158a9a15555e624759e2e4e766d22600b7800d891e46f9291f044a93d',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/WEVER/logo.svg',
    categories: ['defi', 'wallets'],
    description: 'This is a token of the Everscale',
    price: 0.1958,
    priceChange: {
      hours24: 2.5,
      days7: 3.5,
      days365: -10.5,
    },
    volume: 263406,
    volumeChangePercentage: 25,
    tvl: 10291268,
    tvlChangePercentage: 24,
    users: 123561,
  },
  {
    id: 2,
    name: 'Dai Stablecoin',
    symbol: 'DAI',
    address: '0:eb2ccad2020d9af9cec137d3146dde067039965c13a27d97293c931dae22b2b9',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/DAIv3/logo.svg',
    categories: ['defi'],
    description: 'This is a token of the Everscale',
    price: 1,
    priceChange: {
      hours24: 0,
      days7: 0,
      days365: 0,
    },
    volume: 170123,
    volumeChangePercentage: 13,
    tvl: 321345,
    tvlChangePercentage: 12,
    users: 19334,
  },
  {
    id: 3,
    name: 'Tether',
    symbol: 'USDT',
    address: '0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/USDTv3/logo.svg',
    categories: ['defi'],
    description: 'This is a token of the Everscale',
    price: 1,
    priceChange: {
      hours24: 0,
      days7: 0.001,
      days365: 0,
    },
    volume: 31323,
    volumeChangePercentage: 16,
    tvl: 21321,
    tvlChangePercentage: 11,
    users: 12314,
  },
  {
    id: 4,
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0:c37b3fafca5bf7d3704b081fde7df54f298736ee059bf6d32fac25f5e6085bf6',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/USDCv3/logo.svg',
    categories: ['defi'],
    description: 'This is a token of the Everscale',
    price: 1,
    priceChange: {
      hours24: 0,
      days7: 0,
      days365: 0,
    },
    volume: 12312321,
    volumeChangePercentage: 32,
    tvl: 1321132,
    tvlChangePercentage: 11,
    users: 3213,
  },
  {
    id: 5,
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    address: '0:2ba32b75870d572e255809b7b423f30f36dd5dea075bd5f026863fceb81f2bcf',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/WBTCv3/logo.svg',
    categories: ['defi'],
    description: 'This is a token of the Everscale',
    price: 36133,
    priceChange: {
      hours24: 1.5,
      days7: 13.5,
      days365: -50.5,
    },
    volume: 1111222,
    volumeChangePercentage: -11,
    tvl: 2342314,
    tvlChangePercentage: -11,
    users: 4444,
  },
  {
    id: 6,
    name: 'Wrapped Ether',
    symbol: 'WETH',
    address: '0:59b6b64ac6798aacf385ae9910008a525a84fc6dcf9f942ae81f8e8485fe160d',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/WETHv3/logo.svg',
    categories: ['defi'],
    description: 'This is a token of the Everscale',
    price: 3212,
    priceChange: {
      hours24: 3.5,
      days7: 77.1,
      days365: 88.3,
    },
    volume: 44343,
    volumeChangePercentage: 3,
    tvl: 12321,
    tvlChangePercentage: 14,
    users: 1234,
  },
  {
    id: 7,
    name: 'Bridge',
    symbol: 'BRIDGE',
    address: '0:f2679d80b682974e065e03bf42bbee285ce7c587eb153b41d761ebfd954c45e1',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/BRIDGE/logo.svg',
    categories: ['defi', 'dex'],
    description:
      'The Octus Bridge(ex. TON B.) powered by Broxus is a сross-chain asset transfer consisting of a link between 5 blockchains: BSC, ETH, Everscale, Fantom, Polygon.',
    price: 12,
    priceChange: {
      hours24: 1.1,
      days7: -10.5,
      days365: -50.5,
    },
    volume: 4445,
    volumeChangePercentage: -11,
    tvl: 12312,
    tvlChangePercentage: -24,
    users: 123561,
  },
  {
    id: 8,
    name: 'Qube',
    symbol: 'QUBE',
    address: '0:9f20666ce123602fd7a995508aeaa0ece4f92133503c0dfbd609b3239f3901e2',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/QUBE/logo.svg',
    categories: ['defi', 'dex'],
    description: 'This is a token of the Everscale',
    price: 0,
    priceChange: {
      hours24: 0,
      days7: 0,
      days365: 0,
    },
    volume: 0,
    volumeChangePercentage: 0,
    tvl: 0,
    tvlChangePercentage: 0,
    users: 0,
  },
  {
    id: 9,
    name: 'Frax',
    symbol: 'FRAX',
    address: '0:efed9f9a7e6c455ee60829fd003b2f42edda513c6f19a484f916b055e9aa58d2',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/FRAX/logo.svg',
    categories: ['defi', 'games'],
    description: 'This is a token of the Everscale',
    price: 1.3445,
    priceChange: {
      hours24: -1.5,
      days7: -33.5,
      days365: -10.5,
    },
    volume: 12345,
    volumeChangePercentage: 12,
    tvl: 12112,
    tvlChangePercentage: 1,
    users: 14,
  },
  {
    id: 10,
    name: 'Frax Share',
    symbol: 'FXS',
    address: '0:c14e2f026feaae0f99b92c04ee421051a782fff60156ac8a586a12f63d7facef',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/FXS/logo.svg',
    categories: ['defi', 'games'],
    description: 'This is a token of the Everscale',
    price: 122.4,
    priceChange: {
      hours24: -2.5,
      days7: -43.5,
      days365: -30.25,
    },
    volume: 263406,
    volumeChangePercentage: 25,
    tvl: 10291268,
    tvlChangePercentage: 24,
    users: 123561,
  },
  {
    id: 11,
    name: 'Everspace',
    symbol: 'EVS',
    address: '0:e5d964bf76b90a29ca11ff03a0402eeca6a1c79a0fb4d8a2f06a67be0537a6bf',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/EVS/logo.svg',
    categories: ['defi', 'wallets'],
    description: 'This is a token of the Everscale',
    price: 123.3,
    priceChange: {
      hours24: -2.5,
      days7: -3.5,
      days365: 10.5,
    },
    volume: 1234,
    volumeChangePercentage: 88,
    tvl: 123,
    tvlChangePercentage: 123,
    users: 321,
  },
  {
    id: 12,
    name: 'SOON Token',
    symbol: 'SOON',
    address: '0:a15e6a7a91c331ddcd85675ca64d5a7db8c7e94b35806b2e05bf4bce29d21023',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/SOON/logo.svg',
    categories: ['defi'],
    description: 'This is a token of the Everscale',
    price: 3.4,
    priceChange: {
      hours24: -1.5,
      days7: 4.5,
      days365: 1.11,
    },
    volume: 123,
    volumeChangePercentage: 12,
    tvl: 1231,
    tvlChangePercentage: -80,
    users: 1111,
  },
  {
    id: 13,
    name: 'Grechcoin',
    symbol: 'GRE',
    address: '0:fde4c629d6447fecd86d2cffe363d5f334030351022bad019e0f472212e9dc99',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/GRE/logo.svg',
    categories: ['defi'],
    description: 'This is a token of the Everscale',
    price: 0.99,
    priceChange: {
      hours24: 1.35,
      days7: 13.5,
      days365: 310.5,
    },
    volume: 263406,
    volumeChangePercentage: -25,
    tvl: 10291268,
    tvlChangePercentage: -24,
    users: 123561,
  },
  {
    id: 14,
    name: 'BAPBAPA',
    symbol: 'BAPBAPA',
    address: '0:9e0350c13cafe2bb55d906553fde5f357612e6dcb46c0c3440c7bfdda273ffdd',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/BAPBAPA/logo.svg',
    categories: ['defi', 'games'],
    description: 'This is a token of the Everscale',
    price: 1.213,
    priceChange: {
      hours24: 12.5,
      days7: 13.5,
      days365: 10.5,
    },
    volume: 1231,
    volumeChangePercentage: 11,
    tvl: 1231231,
    tvlChangePercentage: 11,
    users: 123121,
  },
  {
    id: 15,
    name: 'Rum',
    symbol: 'RUM',
    address: '0:38a4c196c7fe22cbf0cda034ddda284aa208e2dba7707b96f65914420ba3f580',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/RUM/logo.svg',
    categories: ['defi', 'dex'],
    description: 'This is a token of the Everscale',
    price: 99991,
    priceChange: {
      hours24: 9.5,
      days7: -43.5,
      days365: -99.5,
    },
    volume: 12312,
    volumeChangePercentage: -10,
    tvl: 123,
    tvlChangePercentage: -25,
    users: 19903,
  },
  {
    id: 16,
    name: 'Tokenized US National Debt',
    symbol: 'DUSA',
    address: '0:b3ed4b9402881c7638566b410dda055344679b065dce19807497c62202ba9ce3',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/DUSA/logo.svg',
    categories: ['defi', 'dex'],
    description: 'This is a token of the Everscale',
    price: 0,
    priceChange: {
      hours24: 0,
      days7: 0,
      days365: 0,
    },
    volume: 0,
    volumeChangePercentage: 0,
    tvl: 0,
    tvlChangePercentage: 0,
    users: 15,
  },
  {
    id: 17,
    name: 'COLA COIN',
    symbol: 'COLA',
    address: '0:9dd2cd82cbfd74a963be1ef1fd1a1f3e25f60e0b8c742f8b862df378b9a5e265',
    logoURI:
      'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/COLA/logo.svg',
    categories: ['defi', 'dex', 'games', 'wallets'],
    description: 'This is a token of the Everscale',
    price: 123.83,
    priceChange: {
      hours24: 0.1,
      days7: -3.5,
      days365: 10.5,
    },
    volume: 123,
    volumeChangePercentage: 1,
    tvl: 123,
    tvlChangePercentage: 2,
    users: 123,
  },
]
