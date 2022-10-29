
import { ApiResponseQuery } from "../Hooks/useApiData";
import { ErrorHandler } from "../components/ErrorHandler/ErrorHandler";
import { FlagCard } from "../components/FlagCard/FlagCard";
import { iCountriesProps } from "../components/types/Types";
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

export function Index() {

  
  

  const [inputdata, setInputData] = useState('');
  const onError = () => {console.log('Perform sideeffect after finding error')};
  const { isLoading, data: APiResData, isError } = ApiResponseQuery(onError);


  function singleCountryDataFetched(){return axios.get(`https://restcountries.com/v3.1/name/${inputdata}`)}
  const { data:ApiDataRes } = useQuery('SingleCountryDataAPi', singleCountryDataFetched)

  if (isError) {
    return <ErrorHandler />
  }


  return (
    <>
      <div className=" flex flex-wrap justify-center">
        <div className="flex w-full pl-[73px] pt-[30px]">
        <input
        className="outline-none rounded-md w-56 bg-[#2B3743]"
        type="text"
        onChange={(e)=>setInputData(e.target.value)}
        value={inputdata}
      /><button onClick={()=> console.log('Aqui, Dio!',ApiDataRes)}>Call Api Data</button>
        </div>
        {isLoading ? <h1 className="text-7xl">Fething data</h1> : APiResData?.data.map((item: iCountriesProps) => {
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
    </>
  )
}