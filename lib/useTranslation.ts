import { useLanguage } from "./LanguageContext";
import { translations, type Translations } from "./translations";

export function useTranslation(): Translations {
  const { language } = useLanguage();
  return translations[language];
}
