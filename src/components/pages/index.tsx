import axios from "axios";
import { useQuery } from "react-query";
import { FlagCard } from "../FlagCard/FlagCard";
import { iCountriesProps } from "../types/Types";

export function Index() {

    const { isLoading, data } = useQuery('CountriesDataFetched', () => {
        return axios.get('https://restcountries.com/v3.1/all')
    })

    return (
        <div className=" flex flex-wrap justify-center">
          {isLoading? <h1 className="text-7xl">Fething data</h1> : data?.data.map((item:iCountriesProps) => {
            return (
                <FlagCard
                capital={item.capital}
                flag={item.flags?.png}
                name={item.name.common}
                population={item.population}
                region={item.region}
                />
            )
          })}
        </div>
    )
}