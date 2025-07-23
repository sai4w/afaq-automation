'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

export function AppInitializer() {
  const { language, direction } = useLanguage();
  
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  return null;
}
