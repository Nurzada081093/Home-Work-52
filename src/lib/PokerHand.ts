import CardToPlay from './CardToPlay.ts';

interface ICardHand {
    [key:string] : number;
}

class PokerHand {
    constructor(private cards:CardToPlay[]) {}

    getOutcome(){

        const getRankValue = this.cards.reduce<ICardHand>((rankValue, card) => {
            if (rankValue[card.rank]) {
                rankValue[card.rank]++;
            } else {
                rankValue[card.rank] = 1;
            }

            return rankValue;

        }, {});

        const amountRankRepeats:number[] = Object.values(getRankValue);

        let pairs:number = 0;
        let threes:number = 0;
        let fours:number = 0;

        for (const amountRankRepeat of amountRankRepeats) {
            if (amountRankRepeat === 2) {
                pairs++;
            }

            if (amountRankRepeat === 3) {
                threes++;
            }

            if (amountRankRepeat === 4) {
                fours++;
            }
        }

        const getOneSuit = this.cards[0].suit;
        const getFlush = this.cards.every((card) => card.suit === getOneSuit);

        if (this.cards.length === 5) {
            if (threes > 0 && pairs > 0) {
                return 'Full house';
            } else if (getFlush) {
                return 'Flush';
            } else if (fours > 0) {
                return 'Four of a kind';
            } else if (threes > 0) {
                return 'Three of a kind';
            } else if (pairs === 2) {
                return 'Two pairs';
            } else if (pairs === 1) {
                return 'One pair';
            } else {
                return 'High card';
            }
        }

        return 'Sorry, we can\'t determine the combination because you have only 2 cards in your hand!';
    };
}

export default PokerHand;