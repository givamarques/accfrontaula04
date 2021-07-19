import React, {useState} from 'react';
import {S} from './Board.elements'; //todos os estilos estão declarados dentro de "S" desta forma basta digitar S(ponto) onde sria uma div, sectio, paragrafo, etc...

const Board = () => {
    //state = {disabled:true}

    const [cep, setCep] = useState({}); //cep vai puxar os dados mas pra mostrar na tela precisa do "useState" que "usa o estado atual e apresenta na tela"
    const [inputCep, setInputCep] = useState(0) //"input" para receber a inf "set" para registrar a inf e "useState" para mostrar na tela

    function handleTextChange(e) { {/* "handle/lidar com" lidar com a mudanca de estado do texto. no caso mudar a pag com a insercao do cep */}
        document.getElementById("searchCep").disabled = true; //getElementById vai buscar um elemento com a "id declarada", no caso "searchCap"
        e.preventDefault(); //aqui o "Default" é o reload da aplicação sempre que um caractere for inserido. com o "preventDefault" impede-se esta ação
        setInputCep(pState => e.target.value); {/* a variavel "value" vai ser usada no fetch que recebe os valores da API ViaCEP */}
        if (inputCep.length === 7) {
            document.getElementById("searchCep").disabled = false; // se o comprimento for igual a 7 (0-7 = 8) caracteres o botão "searchCep" terá seu estado "disable" revertido
        }
    }
    
    function buttonSubmit() {
        fetch(`https://viacep.com.br/ws/${inputCep}/json/`) //o enderço original teve o cep informado substituido pelo "${inputCep}", e irá inserir a inf neste exato local
        .then(res => res.json()) //"then/então" converte essas inf em json
        .then(res => setCep(res)) //"then/então" vai definir o cep informado
        
        console.log(cep)
    }


    return (
        <S.DivBox>
            <S.Input placeholder="Insira o CEP" maxLength="8" id="inputCep" onChange={handleTextChange} ></S.Input>
            <S.Button onClick={buttonSubmit} id="searchCep">Pesquisar</S.Button>{/* todos os atributos do botao que estao em "elements" foram aplicados aqui usando-se a tag determinada com seu nome */}
            <S.Square>
                <div>
                    <S.Title>Cidade</S.Title>
                    <S.InputAdress  value={cep.localidade} label={"Cidade"}></S.InputAdress>
                    <S.Title>Endereço</S.Title>
                    <S.InputAdress  value={cep.logradouro} label={"Endereço"}></S.InputAdress>
                    <S.Title>Complemento</S.Title>
                    <S.InputAdress value={cep.complemento} label={"Complemento"}></S.InputAdress>
                </div>
                <div>
                    <S.Title>Bairro</S.Title>
                    <S.Neighborhood value={cep.bairro} label={"Bairro"}></S.Neighborhood>
                    <S.Title>UF</S.Title>
                    <S.UF value={cep.uf} label={"UF"}></S.UF>
                </div>
            </S.Square>
        </S.DivBox>
    );
};

export default Board;