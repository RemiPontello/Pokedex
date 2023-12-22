/*  import { useEffect, useState } from "react";

export default function Dat(){
    
    const [pokemon, setPokemon] = useState([])
    const [pokemonFilter, setPokemonFilter] = useState([])

    async function fetchAPI(){
        const url_types = "https://pokedex-api.3rgo.tech/api/types"
        const url_pokemon= "https://pokedex-api.3rgo.tech/api/pokemon"

        var pokemon_res = []

        
        const types_fetch = await fetch(url_types)
        const data_types = await types_fetch.json()
        const types = data_types.data

        const pokemon_fetch = await fetch(url_pokemon)
        const data_pokemon = await pokemon_fetch.json()
        const pokemons = data_pokemon.data

        pokemons.map(element => {
            
            let types_list = []
            element["types"].map(type => {
                types_list.push(types[parseInt(type)-1])
            })

            pokemon_res.push(
                {
                    "id" : element["id"],
                    "generation" : element["generation"],
                    "image" : element["image"],
                    "shiny" : element["image_shiny"],
                    "stats" : element["stats"],
                    "types" : types_list,
                    "name" : element["name"],
                    "evolutionBefore": element["evolvedFrom"],
                    "evolutionAfter": element["evolvesTo"],
                    "poid" : element["weight"],
                    "taille" : element["height"]
                }
            )
        })
        console.log(pokemon_res)
        setPokemon(pokemon_res)
        setPokemonFilter(pokemon_res)
    }
    useEffect(() => {
        fetchAPI();
    },[])

    }


 */