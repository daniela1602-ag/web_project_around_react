export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const { onClose, title, children} = props;
  return (
    <div id="modal" className="modal">
        <div className={`modal__image-container ${
          !title ? "modal__image" : "modal__content"
        }`}
        >
          <img
            id="closeModal"
            className="modal__close-icon"
            src="./images/closeicon.svg"
            alt="Close"
            onClick={onClose}
          />
          {title && <h2 className="modal__title">{title}</h2>}
          {children}
        </div>
      </div> 

  );
}