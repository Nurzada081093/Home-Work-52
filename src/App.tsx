import './App.css';
import Card from './Components/Card/Card.tsx';
import CardDeck from './lib/CardDeck.ts';
import {useState} from 'react';

interface ICardToPlay {
    rank: string;
    suit: string;
}

const App = () => {
    const [someCards, setSomeCards] = useState<ICardToPlay[]>([]);
    const [amountCardDeck, setAmountCardDeck] = useState<number>(52);


    const cards = someCards.map((card, index) => {
        return (
            <Card key={index} rank={card.rank} suit={card.suit}/>
        );
    });

    const resetGame = () => {
        setSomeCards([]);
        setAmountCardDeck(52);
    };


    const getFifthCards = () => {
        if (amountCardDeck === 0) {
            resetGame();
            return alert('Игра закончена! Если хотите продолжить игру нажмите на кнопку раздать карты!!!');
        }

        const cardDeck = new CardDeck();

        let lastCards:ICardToPlay[];

        if (amountCardDeck > someCards.length) {
            lastCards = cardDeck.getCards(5);
            setSomeCards(lastCards);
            setAmountCardDeck(amountCardDeck - 5);
        } else {
            lastCards = cardDeck.getCards(amountCardDeck);
            setSomeCards(lastCards);
            setAmountCardDeck(0);
        }
    };


    return (
        <>
            {someCards.length === 0 ? (
                <div>
                    <button type="button" onClick={getFifthCards}>Раздать карты</button>
                </div>
            ) : (
                <div>
                    <div className="playingCards faceImages">{cards}</div>
                    <div>
                        <button type="button" onClick={getFifthCards}>Раздать карты</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default App;
