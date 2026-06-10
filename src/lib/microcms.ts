import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

// Multi-language content types
export interface MultiLangContent {
  vi: string;
  en: string;
  jp: string;
}

// Locale content wrapper from microCMS
export interface LocaleContentWrapper {
  fieldId: string;
  vi: string;
  en: string;
  jp: string;
}

// Helper function to extract locale content from array
export const extractLocaleContent = (localeArray: LocaleContentWrapper[] | MultiLangContent): MultiLangContent => {
  if (Array.isArray(localeArray) && localeArray.length > 0) {
    const first = localeArray[0];
    return {
      vi: first.vi || '',
      en: first.en || '',
      jp: first.jp || '',
    };
  }
  return localeArray as MultiLangContent;
};

// Image type
export interface ImageAsset {
  url: string;
  alt: string;
  aspect_ratio?: string;
  width?: number;
  height?: number;
}

// Challenge section
export interface Challenge {
  fieldId?: string;
  description: LocaleContentWrapper[] | MultiLangContent;
  image_url?: ImageAsset | { url: string; alt?: string };
  alt?: string;
}

// Feature item
export interface Feature {
  fieldId?: string;
  icon: string;
  title: LocaleContentWrapper[] | MultiLangContent;
  description: LocaleContentWrapper[] | MultiLangContent;
}

// Solution section
export interface Solution {
  fieldId?: string;
  type?: 'features' | 'description';
  description: LocaleContentWrapper[] | MultiLangContent;
  features?: Feature[];
  images?: ImageAsset[];
  solution_images?: ImageAsset[];
}

// Impact metric
export interface Impact {
  fieldId?: string;
  value: string;
  description: LocaleContentWrapper[] | MultiLangContent | MultiLangContent[];
  metric?: MultiLangContent;
}

// Tech stack item
export interface TechStack {
  fieldId?: string;
  label?: 'WEB' | 'AI' | 'DATA' | MultiLangContent;
  name: string | MultiLangContent;
  icon: ImageAsset | { url: string; height?: number; width?: number };
}

// Domain tag
export interface Domain {
  fieldId?: string;
  id?: string;
  name: LocaleContentWrapper[] | MultiLangContent;
  slug: string;
  description: LocaleContentWrapper[] | MultiLangContent;
  icon?: ImageAsset;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
}

// Certificate item
export interface Certificate {
  fieldId?: string;
  id?: string;
  title: LocaleContentWrapper[] | MultiLangContent;
  image?: ImageAsset;
  issuer?: string;
  isssuer?: string; // typo in microCMS schema
  date?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
}

// Partner item
export interface Partner {
  fieldId?: string;
  id?: string;
  name: string;
  logo?: ImageAsset;
  website?: string;
  description?: LocaleContentWrapper[] | MultiLangContent;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
}

// Featured in item
export interface FeaturedIn {
  fieldId?: string;
  id?: string;
  title: LocaleContentWrapper[] | MultiLangContent | MultiLangContent[];
  description: LocaleContentWrapper[] | MultiLangContent | MultiLangContent[];
  image?: ImageAsset;
  image_url?: ImageAsset | { url: string; height?: number; width?: number };
  url?: string;
}

// Services provided item
export interface ServiceProvided {
  fieldId?: string;
  title: LocaleContentWrapper[] | MultiLangContent;
  description: LocaleContentWrapper[] | MultiLangContent;
  image_url?: ImageAsset | { url: string; alt?: string };
  icon?: ImageAsset | { url: string; alt?: string };
}

// Project asset
export interface ProjectAsset {
  type: 'image' | 'video';
  url: string;
  display_size: 'full' | 'half' | 'third';
}

// Main Project type
export interface Project {
  fieldId?: string;
  id?: string;
  category: 'WEB' | 'AI' | 'DATA' | string[] | ('WEB' | 'AI' | 'DATA')[];
  domains?: string; // Comma-separated domain slugs
  slug: string;
  status: string | string[];
  timeline: string;
  
  title: LocaleContentWrapper[] | MultiLangContent;
  summary: LocaleContentWrapper[] | MultiLangContent;
  
  challenge?: Challenge | Challenge[];
  solution?: Solution | Solution[];
  
  impact?: Impact[];
  
  tech_stack?: TechStack[];
  featured_in?: FeaturedIn[];
  features_in?: FeaturedIn[];
  service_provided?: ServiceProvided[];
  features?: Feature[];
  
  thumbnail?: ImageAsset;
  thumbnail2?: ImageAsset; // Second thumbnail for scroll effect
  project_assets?: ProjectAsset[];
  
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
}

// MicroCMS data structure
export interface GeneralContent {
  fieldId: 'general_content';
  domains: Domain[];
  certificates: Certificate[];
  partners: Partner[];
}

export interface ProjectsWrapper {
  fieldId: 'projects';
  projects: Project[];
}

export interface KitServicesResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  data: (GeneralContent | ProjectsWrapper)[];
}

export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

// Helper to extract general content from response
export const extractGeneralContent = (response: KitServicesResponse): GeneralContent | undefined => {
  console.log('Extracting general content from response:', response);
  return response.data.find(item => item.fieldId === 'general_content') as GeneralContent | undefined;
};

// Helper to extract projects from response
export const extractProjects = (response: KitServicesResponse): Project[] => {
  console.log('Extracting projects from response:', response);

  const projectsWrapper = response.data.find(item => item.fieldId === 'projects') as ProjectsWrapper | undefined;
  return projectsWrapper?.projects || [];
};

export const fetchProjects = async (): Promise<KitServicesResponse> => {
  try {
    const endpoint = 'kit_services';
    
    const response = await client.get<{ contents: KitServicesResponse[] }>({
      endpoint,
    });
    
    // Return first item from contents array
    if (response.contents && response.contents.length > 0) {
      return response.contents[0];
    }
    
    throw new Error('No data found');
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};
