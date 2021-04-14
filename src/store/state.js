export default function() {
    return {
        funds: 10000,
        portfolios: [],
        stocks: [
            {
                name: "BMW",
                sharesAmount: 0,
            },
            {
                name: "Google",
                sharesAmount: 0,
            },
            {
                name: "Apple",
                sharesAmount: 0,
            },
            {
                name: "Twitter",
                sharesAmount: 0,
            },
        ],
        currentPrices: {
            BMW: 110,
            Google: 200,
            Apple: 250,
            Twitter: 8,
        },
    };
}
