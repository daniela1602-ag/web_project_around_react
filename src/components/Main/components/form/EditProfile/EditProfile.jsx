export default function EditProfile() {
    return (
        <form id="editProfileForm" className="modal__profile-form" noValidate>
            <div className="modal__fields">
              <label htmlFor="name"
                >Nombre
                <input
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
            <button id="acc" type="submit" className="modal__profile-submit">
              Guardar
            </button>
          </form>
    );
}