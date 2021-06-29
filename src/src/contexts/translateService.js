import React, { useContext, createContext, useState} from "react";

const TranslateServiceContext = createContext({});

export const TranslateProvider = ({ children }) => {
  const [linguageForTranslate, setLinguageForTranslate] = useState('english');


  const toTranslate = (forTranslate) => {

    if(linguageForTranslate == 'portuguese'){
      const portuguese = {
        editProfile: 'Editar Perfil',
        overview: 'Visão Geral',
        news: 'Notícias',
        playlists: 'Lista de reprodução',
        discover: 'Descubra',
        notifications: 'Notificações',
        account: 'Conta',
        featuredPlaylists: 'Biblioteca',
        profileViews: 'Suas Visualizações',
        tracks: 'Músicas',
        songs: 'Músicas',
        day: 'Dia',
        days: 'Dias',
        ago: 'Atrás',
        week: 'Semana',
        weeks: 'Semanas'
      };
      return portuguese[forTranslate];
    }

     if(linguageForTranslate == 'english'){
      const english = {
        editProfile: 'Edit Profile',
        overview: 'Overview',
        news: 'News',
        playlists: 'Playlists',
        discover: 'Discover',
        notifications: 'Notifications',
        account: 'Account',
        featuredPlaylists: 'Featured Playlists',
        profileViews: 'Profile Views',
        tracks: 'Tracks',
        songs: 'Songs',
        day: 'Day',
        days: 'Days',
        ago: 'Ago',
        week: 'Week',
        weeks: 'Weeks'
      };
      return english[forTranslate];
    }
    


  }

  return (
    <TranslateServiceContext.Provider
      value={{
        linguageForTranslate,
        setLinguageForTranslate,
        toTranslate
      }}
    >
      {children}
    </TranslateServiceContext.Provider>
  );
};

export const UseTranslateService = () => {
  const context = useContext(TranslateServiceContext);
  return context;
};
