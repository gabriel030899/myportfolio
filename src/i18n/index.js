import pt from './pt.json';
import en from './en.json';

const resources = {
  pt: { translation: pt },
  en: { translation: en },
};

// Função para obter traduções
export const getTranslation = (language, key) => {
  const lang = resources[language] || resources.pt;
  return lang.translation[key] || key;
};

// Função para obter todas as traduções de um idioma
export const getTranslations = (language) => {
  return resources[language]?.translation || resources.pt.translation;
};

// Idiomas disponíveis
export const availableLanguages = ['pt', 'en'];

export default resources;
