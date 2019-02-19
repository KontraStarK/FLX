function userCard(index) {
    let infoCard = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: index
    };
    this.index = {
        type: Number,
        unique: true
    };
    let errorMessage = 'Not enough money on your balance or transfer limit is small!';
    let dateTime = new Date().toLocaleString('en-GB');
    const getCardOptions = function () {
        return infoCard;
    };
    const historyLogsAdd = function (operationType, credits, date) {
        let historyLogsInf = {
            operationType,
            credits,
            operationTime: date
        };
        infoCard.historyLogs.push(historyLogsInf)
    };
    const putCredits = function (limit) {
        infoCard.balance += limit;
        historyLogsAdd('Received credits', limit, dateTime);
    };
    const takeCredits = function (limit) {
        if (infoCard.balance >= limit && limit <= infoCard.transactionLimit) {
            infoCard.balance -= limit;
            historyLogsAdd('Withdrawal of credits', limit, dateTime);
        } else {
            console.error(errorMessage);
        }
    };
    const setTransactionLimit = function (limit) {
        infoCard.transactionLimit = limit;
        historyLogsAdd('Transaction limit change', limit, dateTime);
    };
    const transferCredits = function (limit) {
        let taxed = 0.005;
        let limitTaxed = limit + limit * taxed;
        if (limitTaxed > infoCard.balance && limitTaxed > infoCard.transactionLimit) {
            console.error(errorMessage);
        } else {
            this.takeCredits(limitTaxed);
            historyLogsAdd('Withdrawal of credits', limit, dateTime);
            this.putCredits(limit);
            historyLogsAdd('Received credits', limit, dateTime);
        }
    };
    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    };
}
class UserAccount {
    constructor(name) {
        this.name = name;
        this.card = [];
        this.cardLimit = 3;
    }
    addCard() {
        if (this.card.length < this.cardLimit) {
            this.card.push(userCard(this.card.length + 1));
        } else {
            console.log('Error! It is a max number of cards!');
        }
    }
    getCardByKey(key) {
        return this.card[key - 1];
    }
}
let user = new UserAccount('Bob');
user.addCard()
user.addCard()
let card1 = user.getCardByKey(1);
let card2Key = 2;
let card2 = user.getCardByKey(card2Key);
let putCred = 500;
let setTransLimit = 800;
let transCred = 300;
let takeCred = 50;
card1.putCredits(putCred);
card1.setTransactionLimit(setTransLimit);
card1.transferCredits(transCred, card2);
card2.takeCredits(takeCred);
console.log(card1.getCardOptions()); // see Figure 2
console.log(card2.getCardOptions()); // see Figure 3