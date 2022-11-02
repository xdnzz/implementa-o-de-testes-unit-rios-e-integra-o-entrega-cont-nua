import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"

export function SingleCountry() {
    
    const [localData, setLocalData] = useState<string | null>('')

    const dataURL = `https://restcountries.com/v3.1/name/Brazil`

    useEffect(() => {
        const getCountrySingleName = localStorage.getItem('country')
        setLocalData(getCountrySingleName)
        console.log(ApiDataRes)
    })

    function singleCountryDataFetched() { return axios.get(dataURL) }
    const { data: ApiDataRes, isLoading } = useQuery('SingleCountryDataAPi', singleCountryDataFetched)
    

   
    return (
        <div className=" flex flex-wrap justify-center">
            <div className="flex w-full pl-[73px] pt-[30px]">
              
                <Link to="/">Voltar para página inicial</Link>
                <button onClick={()=>console.log(ApiDataRes)} className="pl-10">Console</button>
                {ApiDataRes?.data.map((item:any)=> {
                    return (
                        <div>{item.name.common}</div>
                    )
                })}
            </div>
        </div>
    )
}