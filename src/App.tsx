import { FlagCard } from "./components/FlagCard/FlagCard";
import { Header } from "./components/Header/Header";
import axios from 'axios';
import { useEffect, useState } from "react";
import { iCountriesProps } from "./components/types/Types";
import { QueryClientProvider, QueryClient } from 'react-query';
import {useQuery} from 'react-query';
import { Index } from "./components/pages";


const queryClient = new QueryClient();

function App() {

  


  

  return (
    <QueryClientProvider client={queryClient}>
      <main className="w-full h-full flex justify-center flex-col">
        <Header />
        <Index/>
      </main>
    </QueryClientProvider>
  )
}

export default App
