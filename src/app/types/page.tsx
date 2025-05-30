
import './types.scss'
let allTypes: string[];

const Types = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/type/')
        const data = await response.json();
        allTypes = data.results.map((item: { name: any; }) => item.name);
    } catch (error) {
        console.log(error)
    }

    return (
        <div className="pokemon__types">
            {allTypes && allTypes.filter((item, index) => index < 18)
                .map((item: string, index: number) => <a key={index} href={`/types/${item}`} className={`pokemon__content--${item}`}>{item}</a>)}
        </div>
    )
}

export default Types