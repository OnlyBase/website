export interface ProjectProps {
    name: string;
    description: string;
    image: string;
    tags: string[];
    twitter: string;
    website: string;
    discord: string;
    telegram: string;
    github?: string;
    medium?: string;
    facebook?: string;
    reddit?: string;
    youtube?: string;
    instagram?: string;
    dextools: string;
    dexscreener: string;
    linkedin?: string;
    tiktok?: string;
    Warpcast: string;
    smartContractAddress: string;
    smartContractAudits: Audit[];
  }
  
  interface Audit {
    name: string;
    link: string;
  }