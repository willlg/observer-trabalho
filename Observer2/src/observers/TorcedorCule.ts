import Barcelona from "../subjects/Barcelona";
import ITorcedor from "./ITorcedor";

export default class TorcedorCule implements ITorcedor {
    nome: string;
    timeFavorito: Barcelona;
  
    constructor(nome: string, timeFavorito: Barcelona) {
      this.nome = nome;
      this.timeFavorito = timeFavorito;
    }
  
    atualizar(time: Barcelona): void {
      if (time === this.timeFavorito) {
        console.log(`${this.nome}: Estamos vencendo! Vamos Vamos ${this.timeFavorito.nome}!`);
      } else {
        console.log(`${this.nome}: Vamos virar, ${this.timeFavorito.nome}!`);
      }
    }
  }