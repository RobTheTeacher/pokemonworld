import { PokemonType } from '@/utils/types'
import Image from 'next/image'

const DisplayPokemon = ({id, name, image, types}:PokemonType) => {
    return (
        <div className="pokemon__content">
            <div className="pokemon__content--name">#{id} {name}</div>
            <div className={`pokemon__content--image-${types[0]}`}>
                <Image alt={name} src={image} height={300} width={300} />
            </div>
            <div className="pokemon__content--types">
                {types.map((item:string, index:number) => 
                <span className={`pokemon__content--${item}`} key={index}>{item}</span>)}
            </div>
        </div>
    )
}

export default DisplayPokemon