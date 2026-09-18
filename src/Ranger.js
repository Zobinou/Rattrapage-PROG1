
import { Echanger } from './Echanger.js';

export function Ranger(T) {

  let frontiere = 0;
  for (let i = 0; i < T.length; i++) {
    if (T[i] === 0) {
      Echanger(T, frontiere, i);
      frontiere = frontiere + 1;
    }
  }
  
  return T;
}