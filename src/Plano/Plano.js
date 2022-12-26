import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../constants/urls"
import UserContext from "../context"
import { Beneficio, Beneficios, Caixa, CaixaLogo, ContainerInformacoes, Imagem, Preco, Texto, Titulo } from "./styled"
import ben from '../assets/ben.png'
import preco from '../assets/price.png'
import styled from "styled-components"

export default function Plano() {
    const [plan, setPlan] = useState(undefined)
    const [beneficios, setBeneficios] = useState(undefined)
    
    const {token} = useContext(UserContext)
    const {idPlano} = useParams()
    console.log(token)

    useEffect(() => {
        const req = axios.get(`${BASE_URL}/subscriptions/memberships/${idPlano}`, {headers: {Authorization:`Bearer ${token}`}})

        req.then((resp) => {
            setPlan(resp.data)
            setBeneficios(plan.perks)
            console.log(plan)
            console.log(beneficios)
            
        })
        req.catch((err) => console.log(err.response.data))
    }, [])

    function assinatura() {
        alert('Deu certo!')
    }

    return (
        <>
        <ContainerInformacoes>
            <CaixaLogo>
                <Imagem src={plan.image} />
                <Titulo>{plan.name}</Titulo>
            </CaixaLogo>
            <Beneficios>
                <Caixa>
                    <Imagem src={ben} />
                    <Texto>Benefícios:</Texto>
                </Caixa>
                {
                    beneficios.map((b) => {
                        return (
                            <Beneficio>{b.id}. {b.title}</Beneficio>
                        )
                    })
                }
            </Beneficios>
            <Preco>
                <Caixa>
                    <Imagem src={preco} />
                    <Texto>{plan.price} cobrados mensalmente</Texto>
                </Caixa>
            </Preco>
        </ContainerInformacoes>
        <Form onSubmit={assinatura}>
            {/* <input type='text' id="nome" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
            <input type='text' id="foto" placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} required />
            <input type='email' id='email' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} required />
            <input type='password' id='senha' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} required /> */}
            <button type="submit">Cadastrar</button>
        </Form>
        </>
    )
}

const Form = styled.form``

