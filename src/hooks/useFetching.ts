import { useState } from "react";
import { AxiosError } from "axios";

export const useFetching = (callback: Function) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async (...args: object[]) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return { fetching, isLoading, error }
}