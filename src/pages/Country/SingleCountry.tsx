import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { ISingleCountryProps } from "../../components/types/Types";

export function SingleCountry() {

    const [localData, setLocalData] = useState<string | null>('');



    function singleCountryDataFetched() { return axios.get(`https://restcountries.com/v3.1/name/${localStorage.getItem('country')}`) }
    const { data: ApiDataRes, isLoading } = useQuery('SingleCountryDataAPi', singleCountryDataFetched)



    return (
        <div className=" flex flex-wrap justify-center">
            <div className="flex w-full">

                {/* <Link to="/">Voltar para página inicial</Link> */}
                {/* <button onClick={()=>console.log(ApiDataRes)} className="pl-10">Console</button> */}
                {isLoading ? <h1 className="text-7xl">Fething data</h1> : ApiDataRes?.data.map((item: ISingleCountryProps) => {
                    return (
                        <div className="flex w-full justify-center items-center">
                            <div className="flex pt-[100px] space-x-7">
                                <img src={item.flags.png} className="h-[18.75rem] w-[23.75rem]" />
                                <div className="text-white">
                                    <h1 className="text-4xl pb-8 ">{item.name.common}</h1>
                                    <p>Native name: {item.name.official}</p>
                                    <p>Population: {item.population}</p>
                                    <p>Region: {item.region}</p>
                                    <p>Sub-region: {item.subregion}</p>
                                    <p>Capital: {item.capital}</p>
                                    <p>Currencies: {item.currencies.EUR?.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}