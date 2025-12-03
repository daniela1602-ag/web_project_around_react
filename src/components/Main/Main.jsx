import Profile from '../Profile/Profile';
import Elements from '../Elements/Elements';
import Popup from './components/Popup/Popup';
import NewCard from './components/form/NewCard/NewCard';
import EditProfile from './components/form/EditProfile/EditProfile';
import EditAvatar from './components/form/EditAvatar/EditAvatar';
import ImagePopup from './components/ImagePopup/ImagePopup';
import { useState } from "react";

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];
console.log(cards);

function Main() {
    const [popup, setPopup] = useState(null);
    //objetos para cada
    const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
    const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
    const editAvatarPopup = { title: "Cambiar foto de perfil", children: <EditAvatar /> };
    
     
    //funciones para manejar los popups
    function handleOpenPopup(popup) {
    setPopup(popup);
}

    function handleClosePopup() {
    setPopup(null);
    
} 

  return (
    <main className="content">
      <Profile onEditProfile={() => handleOpenPopup(editProfilePopup)} 
        onEditAvatar={() => handleOpenPopup(editAvatarPopup)} 
        onAddCard={() => handleOpenPopup(newCardPopup)} />
      <Elements cards={cards} onImageClick={handleOpenPopup} />

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
      
    </main>
  );
}

export default Main;