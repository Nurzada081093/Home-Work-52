import * as React from 'react';
import suitObject from './suit.ts';


interface ICard {
    rank:string;
    suit: string;
}

const Card: React.FC<ICard>= ({rank, suit}) => {

    const getSuit = (suit: string ) => {
        switch (suit) {
            case suitObject.diams:
                return '♦';
            case suitObject.hearts:
                return '♥';
            case suitObject.clubs:
                return '♣';
            case suitObject.spades:
                return '♠';
            default:
                alert(`There is no such suit - "${suit}"`);
        }
    };

    const suitSymbol = getSuit(suit);

    const classNameCard:string = `card rank-${rank.toLowerCase()} ${suit}`;

    return (
        <span className={classNameCard}>
            <span className="rank">{rank}</span>
            <span className="suit">{suitSymbol}</span>
        </span>
    );
};
export default Card;