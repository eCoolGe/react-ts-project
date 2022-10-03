import { useState, useRef, useEffect } from "react"
import СurrenciesService from "../../API/СurrenciesService"
import { useFetching } from "../../hooks/useFetching"
import IRates from "../../interfaces/rates.interface"
import { CurrencyConverterBlock } from "./CurrencyConverterBlock/CurrencyConverterBlock"
import Loader from "../UI/Loader/Loader"

const CurrencyConverter = () => {
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('RUB')
    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(0)
    const ratesRef = useRef<IRates>({})

    const { fetching: fetchRates, isLoading, error } = useFetching(async () => {
        const response = await СurrenciesService.getAll()
        ratesRef.current = {
            ...response.data.rates,
            "RUB": 1
        }

        onChangeFromPrice(1)
    })

    useEffect(() => {
        fetchRates()
    }, [])

    const onChangeFromPrice = (value: number) => {
        const result = (ratesRef.current[toCurrency] / ratesRef.current[fromCurrency]) * value
        setToPrice(result)
        setFromPrice(value)
    }

    const onChangeToPrice = (value: number) => {
        const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value
        setFromPrice(result)
        setToPrice(value)
    }

    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromCurrency, toCurrency])

    return (
        <>
            {error
                ?
                <p className="error-message"><b>Ошибка:</b> {error}</p>
                :
                <>
                    {isLoading
                        ?
                        <Loader />
                        :
                        <div className="grid">
                            <CurrencyConverterBlock
                                value={fromPrice}
                                onChangeValue={onChangeFromPrice}
                                currency={fromCurrency}
                                onChangeCurrency={setFromCurrency}
                            />
                            <CurrencyConverterBlock
                                value={toPrice}
                                onChangeValue={onChangeToPrice}
                                currency={toCurrency}
                                onChangeCurrency={setToCurrency}
                            />
                        </div>
                    }
                </>
            }
        </>
    )
}

export default CurrencyConverter