
import { NombreUn } from './NombreUn.js';
import { Echanger } from './Echanger.js';

export function triLignes(M) {
  const nbLignes = M.length;

  for (let i = 0; i < nbLignes - 1; i++) {
    for (let j = 0; j < nbLignes - 1 - i; j++) {
      const nbJ = NombreUn(M[j]);
      const nbJPlusUn = NombreUn(M[j + 1]);
      if (nbJ > nbJPlusUn) {
        Echanger(M, j, j + 1);
      }
    }
  }
  return M;
}