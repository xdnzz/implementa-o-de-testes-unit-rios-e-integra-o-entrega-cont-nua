
 interface IRequestApiCountryProps {
    name: string;
    flag:string | undefined;
    population: string;
    region:string;
    capital: string
 }

export function FlagCard({name, flag,population,region,capital}:IRequestApiCountryProps){
    return (
        <div className="w-60 h-80 bg-slate-500 rounded-sm m-4 flex flex-col text-white">
            <img src={flag} className="rounded-t-sm pb-3"/>
            <span className="font-bold">Name: {name}</span>
            <span>Population:{population}</span>
            <span>Region:{region}</span>
            <span>Capital:{capital}</span>
        </div>

    )
}