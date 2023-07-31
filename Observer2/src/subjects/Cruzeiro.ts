import ITorcedor from "../observers/ITorcedor";
import ITimeSubject from "./ITimeSubject";

export default class Cruzeiro implements ITimeSubject {

    // O estado do time (gols) é armazenado nesta variável.
    public pontuacao: number=0;

    private torcedores: ITorcedor[] = [];
    
    public nome: String = 'Cruzeiro';

    public adicionarTorcedor(torcedor: ITorcedor): void {
      const jaExiste = this.torcedores.includes(torcedor);
      if (jaExiste) {
        return console.log('Cruzeiro: Torcedor já está inscrito.');
      }
  
      console.log('Cruzeiro: Novo torcedor inscrito!!');
      this.torcedores.push(torcedor);
    }
  
    public removerTorcedor(torcedor: ITorcedor): void {
      const indiceTorcedor = this.torcedores.indexOf(torcedor);
      if (indiceTorcedor === -1) {
        return console.log('Cruzeiro: Torcedor inexistente.');
      }
  
      this.torcedores.splice(indiceTorcedor, 1);
      console.log('Cruzeiro: Torcedor removido.');
    }
  
    //Dispara uma atualização para cada torcedor.
    public notificarTorcedores(): void {
      console.log('Cruzeiro: Notificando os torcedores...');
      for (const torcedor of this.torcedores) {
        torcedor.atualizar(this);
      }
    }
  
    public marcarGol(): void {
      console.log('Cruzeiro: É gooooooooooollllll! do Cabulosoooooo!!!!!');
      this.pontuacao++;
      console.log(`Cruzeiro: Nossa pontuação agora é: ${this.pontuacao}`);
      this.notificarTorcedores();
    }
  }
  