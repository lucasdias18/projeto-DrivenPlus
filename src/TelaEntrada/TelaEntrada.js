import { useContext, useState } from "react"
import { Form, Icone, ContainerEntrada } from "./styled"
import logo from '../assets/logo.png'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import UserContext from "../context"


export default function TelaEntrada() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const {guardarToken} = useContext(UserContext)
    const {guardarUser} = useContext(UserContext)
    const navigate = useNavigate()

    function entrada(e) {
        e.preventDefault()
        const dados = {email: email, password: senha}
        const req = axios.post(`${BASE_URL}/auth/login`, dados)
        req.then(resposta)
        req.catch((err) => alert('Deu errado!'))
        
        function resposta(resp) {
            guardarToken(resp.data.token)
            guardarUser(resp.data)
            if (resp.data.membership === null) {
                navigate('/subscriptions')
            }
            else {
                navigate('/home')
            }
        }
    }

    return (
        <ContainerEntrada>

            <Icone src={logo} />
            <Form onSubmit={entrada}>
                <input type='email' id="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type='password' id="senha" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required />
                <button type="submit">Entrar</button>
            </Form>
            <Link to={`/cadastro`}>
                <a>Não tem uma conta? Cadastre-se</a>
            </Link>
        
        </ContainerEntrada>
    )
}