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
        let sFlush = false;
        let straight = false;
        let RoyalFlush = false;

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


        if (getFlush) {
            const rankNames:string[] = this.cards.map(card => card.rank);
            const rankOrder:ICardHand = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
            const rankNumbers:number[] = rankNames.map((rank:string) => {
                return rankOrder[rank];
            });
            const sortRankValues:number[] = rankNumbers.sort((a:number, b:number) => a - b);
            sFlush = sortRankValues.every((result:number, index:number, resultArray:number[]) => index === 0 || result === resultArray[index - 1] + 1);
        }


        if (getFlush) {
            const rankRoyalFlushNames: string[] = this.cards.map(card => card.rank);
            const rankRoyalFlushOrder: { [key: string]: number } = { '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
            const rankRoyalFlushNumbers: number[] = rankRoyalFlushNames.map((rank:string) => rankRoyalFlushOrder[rank]);
            const requiredRoyalFlushRanks: number[] = [10, 11, 12, 13, 14];
            const sortRankRoyalFlushValues: number[] = rankRoyalFlushNumbers.sort((a:number, b:number) => a - b);
            RoyalFlush = requiredRoyalFlushRanks.every((rank:number) => sortRankRoyalFlushValues.includes(rank));
        }


        if (getRankValue) {
            const rankNamesValue:string[]= this.cards.map(card => card.rank);
            const rankOrders:ICardHand = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
            const ranksNumbers:number[] = rankNamesValue.map((rank:string) => {
                return rankOrders[rank];
            });
            const sortRanksValues:number[] = ranksNumbers.sort((a:number, b:number) => a - b);
            straight = sortRanksValues.every((result:number, index:number, resultArray:number[]) => index === 0 || result === resultArray[index - 1] + 1);
        }


        if (this.cards.length === 5) {

             if (RoyalFlush) {
                return 'Royal flush';
            } else if (threes > 0 && pairs > 0) {
                return 'Full house';
            } else if (sFlush) {
                return 'Straight flush';
            } else if (getFlush) {
                return 'Flush';
            } else if (straight) {
                return 'Straight';
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