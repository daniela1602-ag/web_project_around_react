import Card from "../Main/components/Card/Card";

function Elements({ cards, onImageClick, onCardLike, onCardDelete }) {
  return (
    <section className="elements">
      
      
        <ul className="elements__container">
            {cards.map((card) => (
              <Card 
              key={card._id}
              card={card}
               onImageClick={onImageClick}
               onCardLike={onCardLike} 
               onCardDelete={onCardDelete}
               />
            ))}
        </ul>
      
    </section>
  );
}

export default Elements;