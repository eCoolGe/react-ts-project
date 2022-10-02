import axios from "axios";
import ICurrencies from '../interfaces/currencies.interface'

export default class СurrenciesService {
    static async getAll() {
        const response = await axios.get<ICurrencies>('https://www.cbr-xml-daily.ru/latest.js')
        return response;
    }
}

