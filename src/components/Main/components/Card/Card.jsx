import { Children, useContext } from "react";
import ImagePopup from "../ImagePopup/ImagePopup";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

function Card(props ) {
  const { currentUser } = useContext(CurrentUserContext);
  const { name, link } = props.card;
  const { onCardLike, onCardDelete } = props;
  const imageComponent = { children: <ImagePopup card={props.card} />};
  //Controlador de click
  const handleLikeClick = () => {
    onCardLike(props.card);
  };
  //controlador de eliminar
  const isOwn = props.card.owner === currentUser._id;
  const handleDeleteClick = () => {
    onCardDelete(props.card);
  }
  

  //Calcular isLiked basándose en si el usuario actual esta en la lista de likes
  const isLiked = props.card.isLiked;
  const cardLikeButtonClassName = `elements__card-image-button ${
    isLiked ? 'elements__card-image-button--active' : ''
  }`;


  return (
     <li className="elements__card-image">
          <img className="elements__image" src={link} alt={name} onClick={() => props.onImageClick(imageComponent)}/>
         { isOwn && (
          <img
            className="elements__card-delete-button"
            src="./images/trash.svg"
            alt="Eliminar"
            onClick= {handleDeleteClick}
          />
         )}
           <div className="elements__card-image-rectangle">
               <h3 className="elements__card-image-text">{name}</h3>
              <button 
              className={cardLikeButtonClassName}
              type="button" 
              onClick={handleLikeClick}>    
              </button>
          </div>
     </li>
  );
}

export default Card;