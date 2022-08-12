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
        href: 'https://www.in-dex-swap.ml/#/swap',
      },
      {
        label: 'Liquidity',
        href:
          'https://www.in-dex-swap.ml/#/pool',
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
        href: 'https://www.coingecko.com/en/coins/',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/', // InDex-busd
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Hacken Audit',
        href: 'https://index.finance/files/in-dex-finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/InDexfinance/',
      },
      {
        label: 'Docs',
        href: 'https://idsdefi.gitbook.io/in-dex-sale/the-company/about-this',
      },
      {
        label: 'Blog',
        href: 'https://index-finance.medium.com/',
      },
    ],
  },
  {
    label: 'Hacken Audit',
    icon: 'AuditIcon',
    href: 'https://index.finance/files/in-dex-finance',
  },
]

export default config
