import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MultiLangContent, LocaleContentWrapper } from "./microcms";
import {
  Code,
  Database,
  Cloud,
  Server,
  Globe,
  Smartphone,
  Cpu,
  Zap,
  type LucideIcon
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTechIcon = (iconName?: string): LucideIcon => {
  if (!iconName) return Globe;
  
  const iconMap: Record<string, LucideIcon> = {
    'frontend': Code,
    'backend': Server,
    'database': Database,
    'cloud': Cloud,
    'mobile': Smartphone,
    'ai': Cpu,
    'performance': Zap,
    'web': Globe,
  };

  return iconMap[iconName.toLowerCase()] || Globe;
};

export const extractTextFromObject = (obj: Partial<MultiLangContent> | LocaleContentWrapper | Record<string, string>, currentLang: keyof MultiLangContent): string => {
  if (!obj || typeof obj !== 'object') return '';
  
  const objRecord = obj as Record<string, string | undefined>;
  return objRecord[currentLang] || objRecord.en || objRecord.ja || objRecord.vi || '';
};

export const getTranslatedText = (
  content: MultiLangContent | LocaleContentWrapper[] | string | MultiLangContent[], 
  currentLang: keyof MultiLangContent
): string => {
  if (!content) return '';
  if (typeof content === 'string') return content;
  
  if (Array.isArray(content)) {
    // Handle LocaleContentWrapper[] or MultiLangContent[]
    if (content.length > 0) {
      const first = content[0];
      // Check if it has fieldId (LocaleContentWrapper)
      if (first && typeof first === 'object' && 'fieldId' in first) {
        return extractTextFromObject(first, currentLang);
      }
      // Otherwise treat as MultiLangContent[]
      return extractTextFromObject(first, currentLang);
    }
    return '';
  }
  
  if (typeof content === 'object' && content !== null) {
    return extractTextFromObject(content, currentLang);
  }
  
  return '';
};
