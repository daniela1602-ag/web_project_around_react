function Profile({ onEditProfile, onEditAvatar, onAddCard}) {
  return (
    <section className="profile">
      <div className="profile__avatar-container" onClick={onEditAvatar}>
        <img
          className="profile__avatar"
          src="./images/image.jpg"
          alt="Imagen de perfil"
        />
        <img
          className="profile__avatar-edit-icon"
          src="./images/Vectoravatar.svg"
          alt="foto de perfil"
        />
      </div>
      <div className="profile__info">
        <h2 className="profile__info-name">Jacques Cousteau</h2>
        <p className="profile__info-job">Explorador</p>

        <div  className="profile__info-edit-button" onClick={onEditProfile}>
          <img
            className="profile__info-edit-button-pen"
            src="./images/vectorlapiz.svg"
            alt="ícono de editar"
          />
        </div>
      </div>
      <div className="profile__add-button" onClick={onAddCard}>
        <img
          className="profile__add-button-plus"
          src="./images/vectorplus.svg"
          alt="signo de más"
        />
      </div>

    </section>
  );
}

export default Profile;