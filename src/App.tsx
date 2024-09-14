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

    const cards = someCards.map((card, index) => {
        return (
            <Card key={index} rank={card.rank} suit={card.suit}/>
        );
    });

    const getFifthCards = () => {
        const cardDeck = new CardDeck();
        const lastCards = cardDeck.getCards(5);
        setSomeCards(lastCards);
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
