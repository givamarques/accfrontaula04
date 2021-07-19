import styled from 'styled-components'

const DivBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 950px;
  background: #fff;
  padding: 40px;
  border: transparent;
  `

const Square = styled.div` //aqui o quadro principal foi chamado de Square, ao ser importado no "Board.js" atraves de S(ponto) todos os atributos serao aplicados
background: #dfdfdf;
height: 350px;
width: 900px;
border-radius: 25px;
display: flex;
justify-content: center;
align-items: stretch;
font-size: 1.2rem;
position: static;
`

const Input = styled.input`
background: white;
height: 35px;
width: 450px;
border-color: lightgray;
border-radius: 10px;
display: inline-block;
margin-bottom: 15px;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: static;
::placeholder{ //aqui é possivel passar um atributo dentro de outro atributo. No caso, o placeholder dentro do input
    padding-left: 15px;
    color:#c7bdbd;
}
`

const InputAdress = styled.input`
background: white;
padding-left: 15px;
height: 35px;
width: 450px;
border-color: transparent;
border-radius: 10px;
display: inline-block;
margin-left: 15px;
margin-right: 15px;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: static;
::placeholder{
    padding-left: 10px;
    color:black;
}
`

const Neighborhood = styled.input`
background: white;
padding-left: 15px;
height: 35px;
width: 300px;
border-color: transparent;
border-radius: 10px;
display: inline-block;
margin-left: 15px;
margin-right: 15px;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: static;
::placeholder{
    padding-left: 10px;
    color:black;
}
`

const UF = styled.input`
background: white;
padding-left: 15px;
height: 35px;
width: 55px;
border-color: transparent;
border-radius: 10px;
display: inline-block;
margin-left: 15px;
margin-right: 15px;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: static;
::placeholder{
    padding-left: 10px;
    color:black;
}
`

const Button = styled.button`
background: #18ac00;
color: white;
border: transparent;
height: 35px;
width: 120px;
border-radius: 10px;
display: inline-block;
margin-left: 20px;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: static;
&:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
`

const Title = styled.p`
font-size: 22;
font-family: Arial, Helvetica, sans-serif;
color: gray;
margin-left: 15px;
margin-right: 15px;
`

export const S ={ //ao inves de exportar separadamente pode-se reunir os diferentes atributos em um único (neste caso o "S"), facilitando a exportacao e posterior importacao
    DivBox,
    Square,
    Input,
    InputAdress,
    Neighborhood,
    UF,
    Button,
    Title,
} 