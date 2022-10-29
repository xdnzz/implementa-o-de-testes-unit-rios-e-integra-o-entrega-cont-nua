import axios from "axios";
import { useQuery } from "react-query";


export function ApiResponseQuery({ onSuccess }: any) {

  const fetchDataFromApi = () => { return axios.get('https://restcountries.com/v3.1/all') }
  return useQuery('CountriesDataFetched', fetchDataFromApi,
    {
      onSuccess: onSuccess,
    }

  );
}