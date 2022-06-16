import { Pet } from './Pet';

export interface Relatorio{
   id: number;
   email: string;
   valor: number;
   pet: Pet;
}