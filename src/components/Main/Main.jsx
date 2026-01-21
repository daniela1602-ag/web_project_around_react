import Profile from '../Profile/Profile';
import Elements from '../Elements/Elements';
import Popup from './components/Popup/Popup';
import NewCard from './components/form/NewCard/NewCard';
import EditProfile from './components/form/EditProfile/EditProfile';
import EditAvatar from './components/form/EditAvatar/EditAvatar';
import ImagePopup from './components/ImagePopup/ImagePopup';
import api from '../../utils/api';
import { useState, useEffect, useContext,  } from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext';





function Main({ onOpenPopup, onClosePopup, popup, cards, onCardLike, onCardDelete, onAddPlaceSubmit}) {

    const { currentUser } = useContext(CurrentUserContext);
    
    //objetos para cada
    const newCardPopup = { title: "Nuevo lugar", children: <NewCard onAddPlaceSubmit={onAddPlaceSubmit}/> };
    const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
    const editAvatarPopup = { title: "Cambiar foto de perfil", children: <EditAvatar /> };

    

  return (
    <main className="content">
      <Profile 
        onEditProfile={() => onOpenPopup(editProfilePopup)} 
        onEditAvatar={() => onOpenPopup(editAvatarPopup)} 
        onAddCard={() => onOpenPopup(newCardPopup)} />
      <Elements 
       cards={cards}
       onImageClick={onOpenPopup}
       onCardLike={onCardLike} 
       onCardDelete={onCardDelete}
       
       />

      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
      
    </main>
  );
}

export default Main;