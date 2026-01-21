import '../index.css'
import { useEffect, useState } from 'react'
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'
import api from '../utils/api.js'
import CurrentUserContext from '../contexts/CurrentUserContext.js'

function App() {
  
  const [count, setCount] = useState(0)
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
   const [cards, setCards] = useState([]);


   async function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya les has dado like
    const isLiked = card.isLiked;
    
    // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
    await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    }).catch((error) => console.error(error));
}

    async function handleCardDelete(card) {
    // Envía una solicitud a la API para eliminar la tarjeta
    await api.deleteCard(card._id).then(() => {
        // Actualiza el estado para excluir la tarjeta eliminada
        setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
    }).catch((error) => console.error(error));
}

// useEffect para hacer solicitud para obtener las tarjetas
    useEffect(() => {
      api.getCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((error) => console.error(error));
    }, []);

   //funciones para manejar los popups
    function handleOpenPopup(popup) {
    setPopup(popup);
}

    function handleClosePopup() {
    setPopup(null);
    
} 

  //llamada para obtener info del usuario
  useEffect(() => {
    api.getUserInfo()
    .then((userData) => {
      setCurrentUser(userData);
    })
    .catch((error) => console.error(error));
  }, []);

  const handleUpdateUser = (userData) => {
    (async () => {
      await api.updateUserInfo(userData).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
    });
    })();
  };

  const handleUpdateAvatar = (avatar) => {
    (async () => {
      await api.updateUserAvatar(avatar).then((newData) => {
        setCurrentUser(newData); //Aqui se actualiza el estado
        handleClosePopup();
    }).catch((error) => console.error(error));
    })();
  };

  //funcion para agregar nuevas tarjetas
  const handleAddPlaceSubmit = (cardData) => {
    api.addCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
    
  };

  return (
    <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar }}>
    <div className='page__content'>
      <Header />
      <Main 
      onOpenPopup={handleOpenPopup}
      onClosePopup={handleClosePopup}
      popup={popup}
      cards={cards}
      onCardLike={handleCardLike}
      onCardDelete={handleCardDelete}
      onAddPlaceSubmit={handleAddPlaceSubmit}
      />
      <Footer />
      
    </div> 
    </CurrentUserContext.Provider>
  );
}

export default App
