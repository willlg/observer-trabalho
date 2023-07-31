import ITimeSubject from "../subjects/ITimeSubject";

export default interface ITorcedor {
    atualizar(time: ITimeSubject): void;
  }