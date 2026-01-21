import { useRef, useContext, useState } from 'react';
import CurrentUserContext from '../../../../../contexts/CurrentUserContext';

export default function EditAvatar() {
  
  const userContext = useContext(CurrentUserContext);
  const { handleUpdateAvatar } = userContext;
  const avatarRef = useRef();
  const [isValid, setIsValid] = useState(false);
  
  
  const handleInputChange = () => {
    const value = avatarRef.current.value;

    //verificar que no este vacío
    if(value.trim() === '') {
      setIsValid(false);
      return;
    }
    //verificar validacion básica de URL
    if(value.includes('http://') || value.includes('https://')) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
 };
     function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      handleUpdateAvatar(
      avatarRef.current.value
      );
    }
  }

   

    return (
        <form 
          id="popupEditAvatar" 
          className="modal__profile-form" 
          onSubmit={handleSubmit}
          noValidate>
            <div>
              <label htmlFor="AvatarLink">Enlace a la imagen</label>
              <input
               ref={avatarRef}
               onChange={handleInputChange}
                type="url"
                id="AvatarLink"
                name="AvatarLink"
                placeholder="Enlace a la imagen"
                className="modal__profile-input"
                required
              />
              <span id="AvatarLink-error" className={ `modal__profile-submit ${isValid ? 'modal__submit--active' : ' modal__profile-submit'} `}
            disabled={!isValid}
            ></span>
            </div>
            <button
              id="submitButtonAvatar"
              type="submit"
              className="modal__profile-submit"
            >
              Guardar
            </button>
          </form>
    );
}