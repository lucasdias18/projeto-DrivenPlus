import styled from "styled-components";


export const ContainerInformacoes = styled.div`
// min-height: 100vh;
display: flex;
flex-direction: column;
// align-items: center;
// justify-content: center;
// gap: 30px;
`

export const CaixaLogo = styled.div`
display: flex;
flex-direction: column;
// align-items: center;
margin: auto;
gap: 12px;
margin-bottom: 22px;
`

export const Logo = styled.img`
height: 95px;
width: 139px;
margin-top: 35px;
`

export const Titulo = styled.h1`
font-family: Roboto;
font-size: 32px;
font-weight: 700;
line-height: 38px;
color: #FFFFFF;
`

export const Beneficios = styled.div`
display: flex;
flex-direction: column;
// align-items: center;
padding-left: 44px;
margin-bottom: 14px;
`

export const CaixaB = styled.div`
display: flex;
margin-bottom: 8px;
gap: 5px;
`

export const CaixaP = styled.div`
display: flex;
margin-bottom: 5px;
gap: 5px;
`

export const Imagem = styled.img`

`

export const Texto = styled.h1`
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 18px;
color: #FFFFFF;
`

export const Beneficio = styled.p`
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 18px;
color: #FFFFFF;
`

export const Preco = styled.div`
padding-left: 44px;
margin-bottom: 34px;
`

export const Price = styled.p`
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 16px;
color: #FFFFFF;
`

export const Form = styled.form`
margin: auto;
display: flex;
flex-direction: column;
gap: 8px;
margin-bottom: 20px;
div {
    display: flex;
    gap: 9px;
    margin-bottom: 4px;
    input {
        width: 145px;
    }
}
`

export const BotaoVoltar = styled.img`
margin-top: 24px;
margin-left: 22px;
`

export const AbrirModal = styled.div`
min-height: 100vh;
width: 100%;
display: ${props => props.habilitado? 'flex' : 'none'};
flex-direction: column;
position: fixed;
position: relative;
position: fixed;
top: 0px;
z-index: 1;
background-color: rgba(14, 14, 19, 0.5);
`

export const FecharModal = styled.button`
height: 24.5px;
width: 28px;
border-radius: 0px;
background-color: #0E0E13;
position: absolute;
top: 20px;
right: 20px;
`

export const Modal = styled.div`
height: 210px;
width: 248px;
border-radius: 12px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background-color: #FFFFFF;
position: absolute;
top: 220px;
left: 17%;
`

export const CaixaBotao = styled.div`
display: flex;
gap: 14px;
font-family: Roboto;
font-size: 14px;
font-weight: 700;
line-height: 16px;
color: #FFFFFF;
`

export const Sim = styled.button `
height: 52px;
width: 95px;
border-radius: 8px;
`

export const Nao = styled.button`
height: 52px;
width: 95px;
border-radius: 8px;
background-color: #CECECE;
`

export const Text = styled.h1`
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 21px;
text-align: center;
color: #000000;
`