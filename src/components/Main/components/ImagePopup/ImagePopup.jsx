
function ImagePopup(props){
    const{ name, link }= props.card;

    return (
     
          <img className="elements__image" src={link} alt={name} />
          
     
    );
}
export default ImagePopup;