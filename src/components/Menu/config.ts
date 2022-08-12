import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://cripto-fan-token.vercel.app/#/swap',
      },
      {
        label: 'Liquidity',
        href:
          'https://cripto-fan-token.vercel.app/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/trucks',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/CriptoFan',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/CriptoFan',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/', // CriptoFan-busd
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Website',
        href: 'https://criptofan.com.br/',
      },
      {
        label: 'Github',
        href: 'https://github.com/CriptoFan/',
      },
      {
        label: 'Docs',
        href: 'https://criptofan.com.br/wp-content/uploads/2022/07/LitePaper-1.0.pdf',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/',
      },
    ],
  },
  {
    label: 'Website',
    icon: 'AuditIcon',
    href: 'https://criptofan.com.br/',
  },
]

export default config
