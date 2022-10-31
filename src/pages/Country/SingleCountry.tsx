import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"

export function SingleCountry() {

    const [localData, setLocalData] = useState<string | null>('')

    useEffect(() => {
        const getCountrySingleName = localStorage.getItem('country')
        setLocalData(getCountrySingleName)
    })

    function singleCountryDataFetched() { return axios.get(`https://restcountries.com/v3.1/name/${localData}`) }
    const { data: ApiDataRes } = useQuery('SingleCountryDataAPi', singleCountryDataFetched, {
    })

    return (
        <div className=" flex flex-wrap justify-center">
            <div className="flex w-full pl-[73px] pt-[30px]">
              
                <Link to="/">Voltar para página inicial</Link>
            </div>
        </div>
    )
}