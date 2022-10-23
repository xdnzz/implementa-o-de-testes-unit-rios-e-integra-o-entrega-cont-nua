
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