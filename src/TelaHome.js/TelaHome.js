import { useContext } from "react"
import UserContext from "../context"
import usuario from '../assets/usuario.png'
import { Beneficio, Beneficios, Botao, BotaoC, CaixaBotao, ContainerHome, Imagem, Logo, User, Usuario } from "./styled"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../constants/urls"

export default function TelaHome() {
    const {user} = useContext(UserContext)
    const {token} = useContext(UserContext)
    const navigate = useNavigate()
    console.log(user)

    function cancelarPlano() {
        const req = axios.delete(`${BASE_URL}/subscriptions`, {headers: {Authorization:`Bearer ${token}`}})

        req.then((resp => {
            alert('Plano Cancelado!')
            navigate('/subscriptions')
        }))
        req.catch((err) => console.log(err.response.data))
    }

    return (
        <ContainerHome>
            <Logo src={user.membership.image} />
            <User>Olá, {user.name}</User>
            <Imagem src={usuario} />
            <Beneficios>
                {
                    user.membership.perks.map((b) => {
                        return(
                            <Beneficio href={b.link}>
                                <Botao>{b.title}</Botao>
                            </Beneficio>
                        )
                    })
                }
            </Beneficios>
            <CaixaBotao>
                <Link to='/subscriptions'>
                    <Botao>Mudar plano</Botao>
                </Link>
                <BotaoC onClick={cancelarPlano}>Cancelar plano</BotaoC>
            </CaixaBotao>
        </ContainerHome>
    )
}

