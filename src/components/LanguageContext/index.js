"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { getTranslations, availableLanguages } from '@/i18n';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Estado inicial consistente entre servidor e cliente
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  const [translations, setTranslations] = useState(getTranslations('pt'));

  useEffect(() => {
    // Verificar se estamos no navegador antes de acessar localStorage
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage && availableLanguages.includes(savedLanguage)) {
        setCurrentLanguage(savedLanguage);
        setTranslations(getTranslations(savedLanguage));
      }
    }
  }, []);

  const changeLanguage = (language) => {
    if (availableLanguages.includes(language)) {
      setCurrentLanguage(language);
      setTranslations(getTranslations(language));
      // Verificar se estamos no navegador antes de salvar no localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', language);
      }
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Retorna a chave se não encontrar a tradução
      }
    }
    
    return value || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    translations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 