export default interface ICurrencies {
    base: string,
    date: string,
    disclaimer: string,
    rates: {
        [index: string]: number;
    },
    timestamp: number
}