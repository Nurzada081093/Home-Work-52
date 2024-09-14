import * as React from 'react';

interface ICard {
    rank:string;
    suit:string
}

const Card: React.FC<ICard>= ({rank, suit}) => {

    let cartSuit:string = '';

    if (suit === 'diams') {
        cartSuit = '♦';
    } else if (suit === 'hearts') {
        cartSuit = '♥';
    } else if (suit === 'clubs') {
        cartSuit = '♣';
    } else if (suit === 'spades') {
        cartSuit = '♠';
    } else {
        alert(`There is no such suit - "${suit}"`);
    }

    let cardRank:string = '';

    if (rank === '2') {
        cardRank = '2';
    } else if (rank === '3') {
        cardRank = '3';
    } else if (rank === '4') {
        cardRank = '4';
    } else if (rank === '5') {
        cardRank = '5';
    } else if (rank === '6') {
        cardRank = '6';
    } else if (rank === '7') {
        cardRank = '7';
    } else if (rank === '8') {
        cardRank = '8';
    } else if (rank === '9') {
        cardRank = '9';
    } else if (rank === '10') {
        cardRank = '10';
    } else if (rank === 'J') {
        cardRank = 'J';
    } else if (rank === 'Q') {
        cardRank = 'Q';
    } else if (rank === 'K') {
        cardRank = 'K';
    } else if (rank === 'A') {
        cardRank = 'A';
    } else {
        alert(`There is no such rank - "${rank}"`);
    }

    const classNameCard:string = `card rank-${rank.toLowerCase()} ${suit}`;

    return (
        <span className={classNameCard}>
            <span className="rank">{cardRank}</span>
            <span className="suit">{cartSuit}</span>
        </span>
    );
};
export default Card;