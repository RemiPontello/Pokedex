import { useEffect } from "react";


    async function Dat() {
        const reponse = await fetch("https://pokedex-api.3rgo.tech/api/pokemon");
        const data = await reponse.json();
        console.log(data);
      }

      Dat();


export default Dat