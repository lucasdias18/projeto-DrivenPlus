import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { BASE_URL } from "../constants/urls"
import UserContext from "../context"
import { CaixaPlano, ContainerPlanos, Imagem, Planos, Preco, Titulo } from "./styled"

export default function TelaPlanos() {
    const [plans, setPlans] = useState(undefined)
    const {token} = useContext(UserContext)
    console.log(token)

    useEffect(() => {
        const req = axios.get(`${BASE_URL}/subscriptions/memberships`, {headers: {Authorization:`Bearer ${token}`}})
        // { headers: { Authorization: `Bearer ${token}` } };

        req.then((resp) => {setPlans(resp.data)
                            console.log(resp.data)})
        req.catch((resp) => console.log(resp.response.data))
    }, []);

    // useEffect(() => {
    //     const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)

    //     requisicao.then((resposta) => setAssento(resposta.data))
    //     requisicao.catch((erro) => console.log(erro.data))
    // }, []);


    return (
        <ContainerPlanos>
            <Titulo>Escolha um plano</Titulo>
            <Planos>
                {
                    plans.map((p) => {
                        return (
                            <Plano image={p.image} price={p.price} />
                        )
                    })
                }
            </Planos>
        </ContainerPlanos>
    )
}

function Plano(props) {
    return (
        <CaixaPlano>
            <Imagem src={props.image} />
            <Preco>R$ {props.price}</Preco>
        </CaixaPlano>
    )
}
