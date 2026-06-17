import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
 let resultado="";
 let contador= 0;


let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));

 while(contador < cantidad){
  resultado=resultado + letra;
  contador= contador + 1;
 }
 return resultado;

 let fila: string = repetirLetra(caracter, tamaño)

 let filaActual: number=0;
 while(filaActual < tamaño){
  console.log(fila); 
  filaActual= filaActual + 1;
 }

}