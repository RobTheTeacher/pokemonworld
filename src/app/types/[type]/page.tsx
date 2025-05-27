interface PokemonType {
    pokemon: {
        name: string,
        url: string
    }
}
let data: PokemonType[];

const TypePage = async ({ params }: { params: { type: Promise<string> } }) => {
    const { type } = await params
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
        const jsonData = await response.json();
        data = await jsonData.pokemon;
        console.log(data)
    } catch (error) {
        console.log(error)
    }

    return (
        <div>
            <h1>{type} type Pokemon</h1>
            {data && data.map((item: PokemonType, index: number) => <p key={index}>{item.pokemon.name}</p>)}
        </div>
    )

}

export default TypePage