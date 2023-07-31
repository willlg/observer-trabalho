import ITorcedor from "../observers/ITorcedor";

export default interface ITimeSubject {
    adicionarTorcedor(torcedor: ITorcedor): void;
  
    removerTorcedor(torcedor: ITorcedor): void;
  
    notificarTorcedores(): void;
  }