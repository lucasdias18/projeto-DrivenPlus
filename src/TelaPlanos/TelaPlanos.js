import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { BASE_URL } from "../constants/urls"
import UserContext from "../context"
import { CaixaPlano, ContainerPlanos, Imagem, Planos, Preco, Titulo } from "./styled"

export default function TelaPlanos() {
    const [plans, setPlans] = useState(undefined)
    const {token} = useContext(UserContext)

    useEffect(() => {
        const req = axios.get(`${BASE_URL}/subscriptions/memberships`, {headers: {Authorization:`Bearer ${token}`}})

        req.then((resp) => {
            setPlans(resp.data)
        })
        req.catch((resp) => console.log(resp.response.data))
    }, []);

    return (
        <ContainerPlanos>
            <Titulo>Escolha um plano</Titulo>
            <Planos>
                {
                    plans===undefined? <div></div> : plans.map((p) => {
                        return (
                            <Plano image={p.image} price={p.price} id={p.id} />
                        )
                    })
                }
            </Planos>
        </ContainerPlanos>
    )
}

function Plano(props) {
    return (
        <Link key={props.id} to={`/subscriptions/${props.id}`}>
            <CaixaPlano>
                <Imagem src={props.image} />
                <Preco>R$ {props.price}</Preco>
            </CaixaPlano>
        </Link>
    )
}
