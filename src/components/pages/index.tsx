import axios from "axios";
import { useQuery } from "react-query";
import { FlagCard } from "../FlagCard/FlagCard";
import { iCountriesProps } from "../types/Types";

export function Index() {

    const fetchDataFromApi = () => {return axios.get('https://restcountries.com/v3.1/all')}
    const { isLoading, data:APiResData, isError, error } = useQuery('CountriesDataFetched', fetchDataFromApi)

    if(isError){
      return <h1>Falha ao carregar dados, tente novamente mais tarde.</h1>
    }
    return (
        <div className=" flex flex-wrap justify-center">
          {isLoading? <h1 className="text-7xl">Fething data</h1> : APiResData?.data.map((item:iCountriesProps) => {
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