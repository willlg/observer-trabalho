import ITorcedor from "../observers/ITorcedor";
import ITimeSubject from "./ITimeSubject";

export default class Barcelona implements ITimeSubject {

    // O estado do time (gols) é armazenado nesta variável.
    public pontuacao: number=0;

    private torcedores: ITorcedor[] = [];
    
    public nome: String = 'Barcelona';

    public adicionarTorcedor(torcedor: ITorcedor): void {
      const jaExiste = this.torcedores.includes(torcedor);
      if (jaExiste) {
        return console.log('Barcelona: Torcedor já está inscrito.');
      }
  
      console.log('Barcelona: Novo torcedor inscrito!!');
      this.torcedores.push(torcedor);
    }
  
    public removerTorcedor(torcedor: ITorcedor): void {
      const indiceTorcedor = this.torcedores.indexOf(torcedor);
      if (indiceTorcedor === -1) {
        return console.log('Barcelona: Torcedor inexistente.');
      }
  
      this.torcedores.splice(indiceTorcedor, 1);
      console.log('Barcelona: Torcedor removido.');
    }
  
    //Dispara uma atualização para cada torcedor.
    public notificarTorcedores(): void {
      console.log('Barcelona: Notificando os torcedores...');
      for (const torcedor of this.torcedores) {
        torcedor.atualizar(this);
      }
    }
  
    public marcarGol(): void {
      console.log('Barcelona: É gooooooooooollllll! do Barçaaaaaaaaa!!!!!');
      this.pontuacao++;
      console.log(`Barcelona: Nossa pontuação agora é: ${this.pontuacao}`);
      this.notificarTorcedores();
    }
  }
  