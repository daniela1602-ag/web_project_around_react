import Card from "../Main/components/Card/Card";

function Elements({ cards, onImageClick }) {
  return (
    <section className="elements">
      
      
        <ul className="elements__container">
            {cards.map((card) => (
              <Card key={card._id} card={card} onImageClick={onImageClick} />
            ))}
        </ul>
      
    </section>
  );
}

export default Elements;