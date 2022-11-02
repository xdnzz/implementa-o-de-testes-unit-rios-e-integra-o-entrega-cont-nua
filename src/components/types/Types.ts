
export interface INameCountriesProps {
  common: string;
  nativeName: [];
  official: string;
}

export interface IImagesCountriesProps {
  png: string;
  svg: string;
}
export interface iCountriesProps {
  name: INameCountriesProps; 
  population: string;
  region:string;
  capital:string;
  flags?:IImagesCountriesProps
  queryKey?: any;

}

interface ISingleCountryFlagsImage {
  png: string;
  svg: string;
}

interface ISingleCountryNames {
  common: string;
  official: string;
}

interface ISingleCountryCurrencies {
  name: string;
  symbol: string;
}

interface ISingleCountryLanguages {
  por: {}
}

export interface ISingleCountryProps {
  flags: ISingleCountryFlagsImage;
  common: string;
  nativeName: ISingleCountryNames;
  population: number;
  region: string;
  subregion: string;
  capital: [];
  currencies: ISingleCountryCurrencies;
  languages: ISingleCountryLanguages;
  borders: [];
}