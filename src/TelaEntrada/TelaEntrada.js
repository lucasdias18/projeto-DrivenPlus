import { useState } from "react"
import { Form, Icone, ContainerEntrada } from "./styled"
import logo from '../assets/logo.png'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../constants/urls"


export default function TelaEntrada(setImagem) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    function entrada(e) {
        e.preventDefault()
        const dados = {email: email, password: senha}
        const req = axios.post(`${BASE_URL}/auth/login`, dados)
        req.then(resposta)
        // req.then(resp => { alert('Deu certo!')
        //     //               setImagem({imagem: resp.data.image})  
        //     // navigate("/habitos")
        //     })
        req.catch((err) => console.log(err.response.data))
        
        function resposta(resp) {
            alert('Deu certo!')
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