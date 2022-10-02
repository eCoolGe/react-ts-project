import React, { useEffect, useState } from 'react';
import { ConverterBlock } from './ConverterBlock'
import СurrenciesService from './API/СurrenciesService'
import {useFetching} from "./hooks/useFetching";

function App() {

  const [rates, setRates] = useState({})
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState('')


  // const fetchRates = async () => {
  //   try {
  //     setIsLoading(true)
  //     const response = await СurrenciesService.getAll()
  //     console.log(response.data)
  //   } catch (e: unknown) {
  //     const error = e as AxiosError
  //     setError(error.message)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  const {fetching : fetchRates, isLoading, error} = useFetching(async () => {
    const response = await СurrenciesService.getAll()
    setRates(response.data.rates)
  })

  useEffect(() => {
    fetchRates()
    console.log(rates)
  }, [])


  return (
    <div className="App">
      <ConverterBlock value={0} currency="RUB" onChangeCurrency={(cur: any) => console.log(cur)} />
      <ConverterBlock value={0} currency="USD" />
    </div>
  );
}

export default App;
