import express from 'express';

const host='0.0.0.0'; //O ip 0.0.0.0 representa todas as interfaces (placas de rede) do computador onde essa aplicação for executada
const porta = 3000;  //Porta identifica um programa em execução no host hospedeiro

const app = express();



app.listen(porta, host, ()=>{
    console.log(`Servidor escutando em http://${host}:${porta}`);
})