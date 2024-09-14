import CardToPlay from './CardToPlay.ts';

class CardDeck {
    private allCards: CardToPlay[] = [];

    constructor() {
        const ranksArray:string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suitsArray:string[] = ['diams', 'hearts', 'clubs', 'spades'];

        ranksArray.forEach((cardRank:string) => {
            suitsArray.forEach((cardSuit:string) => {
                const cardDeck: CardToPlay = new CardToPlay(cardRank, cardSuit);
                this.allCards.push(cardDeck);
            });
        });
    }

    getCard(){
        const getRandomIndex: number = Math.floor(Math.random() * this.allCards.length);
        const [getOneCard] = this.allCards.splice(getRandomIndex, 1);
        return getOneCard;
    }

    getCards(howMany: number) {
        const lastRandomCards: CardToPlay[] = [];

        for (let i:number = 0; i < howMany; i++) {
            const resultOfGetCard = this.getCard();
            lastRandomCards.push(resultOfGetCard);
        }

        return lastRandomCards;
    }
}

export default CardDeck;