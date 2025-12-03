export default function NewCard() {
    return (
        <form id="popupEditImg" className="modal__profile-form" noValidate>
            <div>
              <label htmlFor="title"
                >Titulo
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Titulo"
                  className="modal__profile-input"
                  minLength="2"
                  maxLength="30"
                  required
                />
                <span id="title-error" className="modal__input-error"></span>
              </label>
            </div>
            <div>
              <label htmlFor="imgLink">Enlace a la imagen</label>
              <input
                type="url"
                id="imgLink"
                name="imgLink"
                placeholder="Enlace a la imagen"
                className="modal__profile-input"
                required
              />
              <span id="imgLink-error" className="modal__input-error"></span>
            </div>
            <button
              id="submitButton"
              type="submit"
              className="modal__profile-submit"
            >
              Crear
            </button>
          </form>
    );
}