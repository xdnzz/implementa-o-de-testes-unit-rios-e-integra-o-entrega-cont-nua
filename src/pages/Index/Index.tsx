
import { ApiResponseQuery } from "../../Hooks/useApiData";
import { ErrorHandler } from "../../components/ErrorHandler/ErrorHandler";
import { FlagCard } from "../../components/FlagCard/FlagCard";
import { iCountriesProps } from "../../components/types/Types";
import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";

export function Index() {

  const navigate = useNavigate();

  const [inputdata, setInputData] = useState('');
  const onError = () => { console.log('Perform sideeffect after finding error') };
  const { isLoading, data: APiResData, isError } = ApiResponseQuery(onError);

  if (isError) {
    return <ErrorHandler />
  }

  function handleSingleCountry(){
    localStorage.setItem('country',inputdata)
    navigate('/test')
  }

  return (
    <>
      <div className=" flex flex-wrap justify-center">
        <div className="flex w-full pl-[73px] pt-[30px]">
          <input
            className="outline-none rounded-md w-56 bg-[#2B3743]"
            type="text"
            onChange={(e) => setInputData(e.target.value)}
            value={inputdata}
          />
          {/* <button onClick={() => { }}>Call Api Data</button> */}
          <button onClick={handleSingleCountry}>Buscar</button>
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