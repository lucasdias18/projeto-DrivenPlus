import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../constants/urls"
import UserContext from "../context"
import { AbrirModal, Beneficio, Beneficios, BotaoVoltar, CaixaB, CaixaBotao, CaixaLogo, CaixaP, ContainerInformacoes, FecharModal, Form, Imagem, Logo, Modal, Nao, Preco, Price, Sim, Text, Texto, Titulo } from "./styled"
import ben from '../assets/ben.png'
import preco from '../assets/price.png'
import voltar from '../assets/voltar.png'
import fechar from '../assets/fechar.png'

export default function Plano() {
    const [plan, setPlan] = useState(undefined)
    const [beneficios, setBeneficios] = useState(undefined)
    const [nomecartao, setNomecartao] = useState('')
    const [numcartao, setNumcartao] = useState('')
    const [segcartao, setSegcartao] = useState('')
    const [valcartao, setValcartao] = useState('')
    const [habilitado, setHabilitado] = useState(false)
    const [memberId, setMemberId] = useState('')
    const navigate = useNavigate()
    const {user, guardarUser, token} = useContext(UserContext)
    const {idPlano} = useParams()

    useEffect(() => {
        const req = axios.get(`${BASE_URL}/subscriptions/memberships/${idPlano}`, {headers: {Authorization:`Bearer ${token}`}})

        req.then((resp) => {
            setPlan(resp.data)
            setBeneficios(resp.data.perks)
            setMemberId(resp.data.id) 
        })
        req.catch((err) => console.log(err.response.data))
    }, [])

    function abrirModal(e) {
        e.preventDefault()
       setHabilitado(true)
    }

    function assinatura() {
        const dados = {
            membershipId: memberId,
            cardName: nomecartao,
            cardNumber: numcartao,
            securityNumber: Number(segcartao),
            expirationDate: valcartao
        }
        const req = axios.post(`${BASE_URL}/subscriptions`, dados, {headers: {Authorization:`Bearer ${token}`}})
        req.then((resp) => {
            guardarUser({...user, membership:resp.data.membership})
            navigate('/home')
        })
        req.catch((err) => alert('Deu errado!'))

    }

    if(plan !== undefined) {
    return (
        <>
        <ContainerInformacoes>
            <Link to='/subscriptions'>
                <BotaoVoltar src={voltar} />
            </Link>
            <CaixaLogo>
                <Logo src={plan.image} />
                <Titulo>{plan.name}</Titulo>
            </CaixaLogo>
            <Beneficios>
                <CaixaB>
                    <Imagem src={ben} />
                    <Texto>Benefícios:</Texto>
                </CaixaB>
                {
                    beneficios.map((b) => {
                        return (
                            <Beneficio>{b.id}. {b.title}</Beneficio>
                        )
                    })
                }
            </Beneficios>
            <Preco>
                <CaixaP>
                    <Imagem src={preco} />
                    <Texto>Preço:</Texto>
                </CaixaP>
                <Price>R$ {plan.price} cobrados mensalmente</Price>
            </Preco>
            <Form onSubmit={abrirModal}>
                <input type='text' id="nomecartao" placeholder="Nome impresso no cartão" value={nomecartao} onChange={e => setNomecartao(e.target.value)} required />
                <input type='text' id="numcartao" placeholder="Dígitos do cartão" value={numcartao} onChange={e => setNumcartao(e.target.value)} required />
                <div>
                    <input
                     type='text'
                     id='segcartao'
                     placeholder='Código de segurança do cartão'
                     value={segcartao}
                     onChange={e => setSegcartao(e.target.value)}
                     required
                     />
                    <input
                     type='text'
                     id='valcartao'
                     placeholder='Validade'
                     value={valcartao}
                     onChange={e => setValcartao(e.target.value)}
                     required 
                     />
                </div>
                <button type="submit">Cadastrar</button>
            </Form>
        </ContainerInformacoes>

        <AbrirModal habilitado={habilitado}>
            <FecharModal onClick={() => setHabilitado(false)}>
                <img src={fechar} />
            </FecharModal>
            <Modal>
                <Text>Tem certeza que deseja assinar o plano {plan.name} (R$ {plan.price})?</Text>
                <CaixaBotao>
                    <Nao onClick={() => setHabilitado(false)}>Não</Nao>
                    <Sim onClick={assinatura}>Sim</Sim>
                </CaixaBotao>
            </Modal>
        </AbrirModal>
        </>
    )
}
}

