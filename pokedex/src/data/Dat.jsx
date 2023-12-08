import { useEffect, useState } from "react";


    async function Dat() {
        
        const reponse = await fetch("https://pokedex-api.3rgo.tech/api/pokemon");
        const data = await reponse.json();
        console.log(data);
    }

      Dat();
            return(
                data.map((item) => {
                    return fetch(
                        
                    );

                }
                )
            )            
    
export default Dat