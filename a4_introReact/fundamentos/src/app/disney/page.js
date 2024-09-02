'use client'



import axios from "axios";
import { useEffect, useState } from "react";
import Pagina from "../components/Pagina";
import apiDisney from "@/services/apiDisney";

export default function Page() {
    
    const [personagens, setPersonagens] = useState([])

    useEffect(()=>{
        apiDisney.get('character').then(resultado=>{
            setPersonagens(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo="Disney">

            {personagens.map(item =>(
                <p>{item.name}</p>
            ))}

        </Pagina>
    )

}