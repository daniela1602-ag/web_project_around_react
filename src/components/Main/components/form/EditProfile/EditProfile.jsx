import { useContext, useState } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function EditProfile() {

  const userContext = useContext(CurrentUserContext); // Obtiene el objeto currentUser
  const { currentUser, handleUpdateUser} = userContext;
  //Verificacion con ?.name ||
  const [name, setName] = useState(currentUser?.name || '');
  const [about, setAbout] = useState(currentUser?.about || '');

  const isFormValid = name.trim().length > 0 && about.trim().length > 0;
 
  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza name cuando cambie la entrada
  };
  const handleAboutChange = (event) => {
    setAbout(event.target.value); // Actualiza description cuando cambie la entrada
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //Evita el comportamiento predeterminado del envío de formularios
    
    handleUpdateUser({ name, about}); //Actualia la info del usuario 
  }
    return (
        <form 
        id="editProfileForm" 
        className="modal__profile-form" 
        noValidate
        onSubmit={handleSubmit}
        >
            <div className="modal__fields">
              <label htmlFor="name"
                >Nombre
                <input
                  value={name}
                  onChange={handleNameChange}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  className="modal__profile-input"
                  minLength="2"
                  maxLength="40"
                  required
                />
                <span id="name-error" className="modal__input-error"></span>
              </label>
            </div>
            <div>
              <label htmlFor="about">
                <input
                  value={about}
                  onChange={handleAboutChange}
                  type="text"
                  id="about"
                  name="about"
                  placeholder="Acerca de mi"
                  className="modal__profile-input"
                  minLength="2"
                  maxLength="200"
                  required
                />
                <span id="about-error" className="modal__input-error"></span>
              </label>
            </div>
            <button id="acc" type="submit" className={ `modal__profile-submit ${isFormValid ? 'modal__submit--active' : ' modal__profile-submit'} `}
            disabled={!isFormValid}
            >
              Guardar
            </button>
          </form>
    );
}