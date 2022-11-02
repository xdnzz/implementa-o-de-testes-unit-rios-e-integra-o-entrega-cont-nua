
export interface INameCountriesProps {
  common: string;
  nativeName: ISingleCountryNames;
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


interface test {
name: string
}
interface ISingleCountryCurrenciesFlags {
  EUR: test
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
  name: INameCountriesProps;
  nativeName: ISingleCountryNames;
  official:string;
  population: number;
  region: string;
  subregion: string;
  capital: [];
  currencies: ISingleCountryCurrenciesFlags;
  languages: ISingleCountryLanguages;
  borders: [];
}