import React, { useState, useEffect } from "react";
import './myStyle.css';
import axios from 'axios';
import api from "./services/api";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Produto({ nome }) {

    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        api.get("/produtos")
            .then((response) => setProdutos(response.data))
            .catch((err) => {
                console.log("Ocorreu erro busca produto - " + err);
            });
    }, []);

    return (
        <div>
            {produtos.map((produto)=> (
                <div>
                    <p>{produto.nome}</p>
                    <p>{produto.preco}</p>
                </div>
            ))}
        </div>
    )
}

export default Produto
