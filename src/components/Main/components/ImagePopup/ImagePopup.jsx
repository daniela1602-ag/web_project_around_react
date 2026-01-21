
function ImagePopup(props){
    const{ name, link }= props.card;

    return (
     
          <img className="modal__image" src={link} alt={name} />
          
     
    );
}
export default ImagePopup;