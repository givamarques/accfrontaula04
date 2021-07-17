import React from 'react';
import {S} from './Board.elements'; //todos os estilos estão declarados dentro de "S" desta forma basta digitar S(ponto) onde sria uma div, sectio, paragrafo, etc...

const Board = () => {
    return (
        <div>
            <S.Input placeholder="Insira o CEP"></S.Input>
            <S.Button>Pesquisar</S.Button>{/* todos os atributos do botao que estao em "elements" foram aplicados aqui usando-se a tag determinada com seu nome */}
            <S.Square>
                <div>
                    <S.Title>Cidade</S.Title>
                    <S.InputAdress ></S.InputAdress>
                    <S.Title>Endereço</S.Title>
                    <S.InputAdress ></S.InputAdress>
                    <S.Title>Complemento</S.Title>
                    <S.InputAdress ></S.InputAdress>
                </div>
                <div>
                    <S.Title>Bairro</S.Title>
                    <S.Neighborhood ></S.Neighborhood>
                    <S.Title>UF</S.Title>
                    <S.UF ></S.UF>
                </div>
            </S.Square>
        </div>
    );
};

export default Board