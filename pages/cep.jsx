import { useState } from "react"
import api from "../functions/api"


export default function cep() {
    const [input, setInput] = useState('')
    const [cep, setCep] = useState({})

    async function handleEvent() {
        if (input === "") {
            alert("Você precisa digitar um cep")
            return
        }
        try{
            const response = await api.get(`${input}/json`)
            setCep(response.data)
            setInput('')
        }catch{
            alert("erro ao buscar cep")
            setInput('')
        }
    }

    return (
        <div>
            <div>
                <input type="text" value={input} placeholder="Informe o cep" onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleEvent}>Pesquisar</button>
            </div>
            <div>
                <h2>CEP: {cep.cep}</h2>
                <p>logradouro: {cep.logradouro}</p>
                <p>bairro: {cep.bairro}</p>
                <p>localidade: {cep.localidade}</p>
                <p>uf: {cep.uf}</p>
            </div>

        </div>
    )

}