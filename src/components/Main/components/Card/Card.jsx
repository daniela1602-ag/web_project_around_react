import { Children } from "react";
import ImagePopup from "../ImagePopup/ImagePopup";

function Card(props ) {
  const { name, link, isLiked } = props.card;
  const { onImageClick } = props;
  const imageComponent = { children: <ImagePopup card={props.card} />};
  return (
     <li className="elements__card-image">
          <img className="elements__image" src={link} alt={name} onClick={() => props.onImageClick(imageComponent)}/>
          <img
            className="elements__card-delete-button"
            src="./images/trash.svg"
            alt="Eliminar"
          />
           <div className="elements__card-image-rectangle">
               <h3 className="elements__card-image-text">{name}</h3>
              <div className="elements__card-image-button">
                  <img
                  className="elements__card-like-icon"
                  src="./images/vectorcorazon.svg"
                  alt="like"
                  />
              </div>
          </div>
     </li>
  );
}

export default Card;