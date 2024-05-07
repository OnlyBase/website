export interface ProjectProps {
    id: number;
    name: string;
    description: string | null;
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
  
  }
  
  interface Audit {
    name: string;
    link: string;
  }