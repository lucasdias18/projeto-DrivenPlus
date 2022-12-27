import { useState } from "react"
import { Form, ContainerCadastro } from "./styled"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../constants/urls"


export default function TelaEntrada() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const navigate = useNavigate()

    function cadastro(e) {
        e.preventDefault()
        const dados = {
                        email: email,
                        name: nome,
                        cpf: cpf,
                        password: senha
        }
        const req = axios.post(`${BASE_URL}/auth/sign-up`, dados)
        req.then(resp => {
                    navigate("/")
            })
        req.catch((err) => alert('Deu errado!'))
    }

    return (
        <ContainerCadastro>
            <Form onSubmit={cadastro}>
                <input type='text' id="nome" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
                <input type='text' id="foto" placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} required />
                <input type='email' id='email' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} required />
                <input type='password' id='senha' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} required />
                <button type="submit">Cadastrar</button>
            </Form>
            <Link to={`/`}>
                <a>Já possui uma conta? Entre</a>
            </Link>
        </ContainerCadastro>
    )
}