import Card from '../Card/Card.js';

const CardsContainer = (cards) => {
    const cardsMarkups = cards.map(el => {
        return Card(el);
    });

    return (
        `
            <div class="app__cards-container">
                <div class="app__cards">
                    ${cardsMarkups.reduce((accumulator, currentValue) => accumulator + currentValue)}
                </div>
            </div>
        `
    );
}

export default CardsContainer;