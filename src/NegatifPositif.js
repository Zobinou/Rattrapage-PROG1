
import { Echanger } from './Echanger.js';
export function NegatifPositif(tab) {
  let frontiere = 0;

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] <= 0) {
      Echanger(tab, frontiere, i);
      frontiere = frontiere + 1;
    }
  }
  
  return tab;
}