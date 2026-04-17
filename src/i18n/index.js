import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Golden Egypt Tours",
        welcome: "Explore Egypt in Luxury",
        login: "Login",
        logout: "Logout",
        email: "Email",
        password: "Password",
        cairo: "Cairo",
        luxor: "Luxor",
        aswan: "Aswan",
        redsea: "Red Sea",
        sinai: "Sinai"
      }
    },

    es: {
      translation: {
        title: "Tours de Egipto Dorado",
        welcome: "Explora Egipto con lujo",
        login: "Iniciar sesión",
        logout: "Cerrar sesión",
        email: "Correo",
        password: "Contraseña",
        cairo: "El Cairo",
        luxor: "Luxor",
        aswan: "Asuán",
        redsea: "Mar Rojo",
        sinai: "Sinaí"
      }
    },

    fr: {
      translation: {
        title: "Tours d'Égypte Dorée",
        welcome: "Explorez l'Égypte avec luxe",
        login: "Connexion",
        logout: "Déconnexion",
        email: "Email",
        password: "Mot de passe",
        cairo: "Le Caire",
        luxor: "Louxor",
        aswan: "Assouan",
        redsea: "Mer Rouge",
        sinai: "Sinaï"
      }
    },

    de: {
      translation: {
        title: "Goldene Ägypten Touren",
        welcome: "Ägypten luxuriös entdecken",
        login: "Anmelden",
        logout: "Abmelden",
        email: "E-Mail",
        password: "Passwort",
        cairo: "Kairo",
        luxor: "Luxor",
        aswan: "Assuan",
        redsea: "Rotes Meer",
        sinai: "Sinai"
      }
    },

    it: {
      translation: {
        title: "Tour dell'Egitto d'Oro",
        welcome: "Esplora l'Egitto con lusso",
        login: "Accedi",
        logout: "Esci",
        email: "Email",
        password: "Password",
        cairo: "Il Cairo",
        luxor: "Luxor",
        aswan: "Assuan",
        redsea: "Mar Rosso",
        sinai: "Sinai"
      }
    }
  },

  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;