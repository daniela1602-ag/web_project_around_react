export default function EditAvatar() {
    return (
        <form id="popupEditAvatar" className="modal__profile-form" noValidate>
            <div>
              <label htmlFor="AvatarLink">Enlace a la imagen</label>
              <input
                type="url"
                id="AvatarLink"
                name="AvatarLink"
                placeholder="Enlace a la imagen"
                className="modal__profile-input"
                required
              />
              <span id="AvatarLink-error" className="modal__input-error"></span>
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