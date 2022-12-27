import { useContext } from "react"
import UserContext from "../context"
import usuario from '../assets/usuario.png'
import { Beneficio, Beneficios, Botao, BotaoC, CaixaBotao, ContainerHome, Imagem, Logo, User } from "./styled"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../constants/urls"

export default function TelaHome() {
    const {user, guardarUser, token} = useContext(UserContext)
    const navigate = useNavigate()

    function cancelarPlano() {
        const req = axios.delete(`${BASE_URL}/subscriptions`, {headers: {Authorization:`Bearer ${token}`}})

        req.then((resp => {
            alert('Plano Cancelado!')
            guardarUser({...user, membership:null})
            navigate('/subscriptions')
        }))
        req.catch((err) => console.log(err.response.data))
    }
    if (user.membership !== null) {
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
    else {
        return <ContainerHome>
                    <Link to='/subscriptions'>
                        VOCÊ NÃO ASSINOU NENHUM PLANO AINDA
                    </Link>
                </ContainerHome>
    }
}

