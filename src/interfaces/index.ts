export interface ProjectProps {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  twitter?: string | null;
  website: string;
  discord?: string | null;
  telegram?: string | null;
  github?: string | null;
  medium?: string | null;
  facebook?: string | null;
  reddit?: string | null;
  youtube?: string | null;
  instagram?: string | null;
  dextools?: string | null;
  dexscreener?: string | null;
  linkedin?: string | null;
  tiktok?: string | null;
  Warpcast?: string | null;
  smartContractAddress: string | null;
  smartContractAudits?: Audit[];
  bountyLink?: string | null;
  jobsLink?: string | null;
  faq?: {
    title: string;
    content: string;
  }[];
}

interface Audit {
  name: string;
  link: string;
}

interface MarketDataAth {
  ath: {
    [key: string]: number;
  };
  ath_change_percentage: {
    [key: string]: number;
  };
  ath_date: {
    [key: string]: string;
  };
  atl: {
    [key: string]: number;
  };
  atl_change_percentage: {
    [key: string]: number;
  };
  atl_date: {
    [key: string]: string;
  };
  circulating_supply: number;
  current_price: {
    [key: string]: number;
  };
  fully_diluted_valuation: {
    [key: string]: number;
  };
  high_24h: {
    [key: string]: number;
  };
  last_updated: string;
  low_24h: {
    [key: string]: number;
  };
  market_cap: {
    [key: string]: number;
  };
  market_cap_change_24h: number;
  market_cap_change_24h_in_currency: {
    [key: string]: number;
  };
  market_cap_change_percentage_24h: number;
  market_cap_change_percentage_24h_in_currency: {
    [key: string]: number;
  };
  market_cap_fdv_ratio: number;
  market_cap_rank: number;
  max_supply: number;
  mcap_to_tvl_ratio: number | null;
  price_change_24h: number;
  price_change_24h_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_1h_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_1y: number;
  price_change_percentage_1y_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_7d: number;
  price_change_percentage_7d_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_14d: number;
  price_change_percentage_14d_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_24h: number;
  price_change_percentage_24h_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_30d: number;
  price_change_percentage_30d_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_60d: number;
  price_change_percentage_60d_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_200d: number;
  price_change_percentage_200d_in_currency: {
    [key: string]: number;
  };
  roi: {
    times: number;
    currency: string;
    percentage: number;
  };
  total_supply: number;
  total_value_locked: number | null;
  total_volume: {
    [key: string]: number;
  };
}

export interface TokenDataCoinGecko {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: string;
  additional_notices: any[];
  block_time_in_minutes: number;
  categories: string[];
  community_data: {
    facebook_likes: number | null;
    twitter_followers: number;
    reddit_average_posts_48h: number;
    reddit_average_comments_48h: number;
    reddit_subscribers: number;
  };
  contract_address: string;
  country_origin: string;
  description: {
    en: string;
    de: string;
    es: string;
    fr: string;
    it: string;
  };
  detail_platforms: {
    [key: string]: any;
  };
  developer_data: {
    forks: number;
    stars: number;
    subscribers: number;
    total_issues: number;
    closed_issues: number;
  };
  genesis_date: string;
  hashing_algorithm: string | null;
  ico_data: {
    ico_start_date: string;
    ico_end_date: string;
    short_desc: string;
    description: string;
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  last_updated: string;
  links: {
    homepage: string[];
    whitepaper: string;
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
  };
  localization: {
    [key: string]: string;
  };
  market_cap_rank: number;
  market_data: MarketDataAth;
  platforms: {
    [key: string]: string;
  };
  preview_listing: boolean;
  public_notice: any;
  sentiment_votes_down_percentage: number;
  sentiment_votes_up_percentage: number;
  status_updates: any[];

  tickers: any[];
  watchlist_portfolio_users: number;
}

export interface TokenPriceCoinGecko {
  market_caps: [number, number][];
  prices: [number, number][];
  total_volumes: [number, number][];
}
