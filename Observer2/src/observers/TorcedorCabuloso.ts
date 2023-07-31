import Cruzeiro from "../subjects/Cruzeiro";
import ITorcedor from "./ITorcedor";

//A classe "TorcedorCabuloso" representa um torcedor do meu Cruzeiro que reage às atualizações do time.
export default class TorcedorCabuloso implements ITorcedor {
    nome: string;
    timeFavorito: Cruzeiro;
  
    constructor(nome: string, timeFavorito: Cruzeiro) {
      this.nome = nome;
      this.timeFavorito = timeFavorito;
    }
  
    atualizar(time: Cruzeiro): void {
      if (time === this.timeFavorito) {
        console.log(`${this.nome}: Estamos vencendo! Vamos Vamos ${this.timeFavorito.nome}!`);
      } else {
        console.log(`${this.nome}: Vamos virar, ${this.timeFavorito.nome}!`);
      }
    }
  }