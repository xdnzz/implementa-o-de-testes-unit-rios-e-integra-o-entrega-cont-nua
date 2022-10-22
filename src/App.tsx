import { FlagCard } from "./components/FlagCard/FlagCard"
import { Header } from "./components/Header/Header"
import axios from 'axios';
import { useEffect, useState } from "react";
import { iCountriesProps } from "./components/types/Types";



function App() {

  const [dataStates, setDataStates] = useState<iCountriesProps[]>([])


  useEffect(()=>{
    async function getCountriesData(){
      const res = await axios.get('https://restcountries.com/v3.1/all')
      const {data} = res;
      setDataStates(data)
    }
    getCountriesData()
  }, [])

  return (
    <main className="w-full h-full flex justify-center flex-col">
      <Header />
      <div className=" flex flex-wrap justify-center">
       {dataStates.map(item => (
        <FlagCard
        key={item.name.common}
        capital={item.capital}
        flag={item.flags.svg}
        name={item.name.common}
        population={item.population}
        region={item.region}
      />
       ))}
       
      </div>
    </main>
  )
}

export default App
