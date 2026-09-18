import { expect } from 'chai';
import { NegatifPositif } from '../src/NegatifPositif.js';

function estBienSepare(tab) {
  let vuPositif = false;
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] > 0) {
      vuPositif = true;
    } else if (vuPositif) {
      return false;
    }
  }
  return true;
}

function comptePositifs(tab) {
  let total = 0;
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] > 0) {
      total = total + 1;
    }
  }
  return total;
}

function compteNonPositifs(tab) {
  let total = 0;
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] <= 0) {
      total = total + 1;
    }
  }
  return total;
}

describe('NegatifPositif', () => {
  it('sépare les négatifs/nuls des positifs ', () => {
    const entre = [3, -1, 0, 4, -2, 5, -3];
    const resultat = NegatifPositif(entre);

    expect(estBienSepare(resultat)).to.equal(true);
    expect(comptePositifs(resultat)).to.equal(3);
    expect(compteNonPositifs(resultat)).to.equal(4);
  });

  it('sépare les négatifs/nuls des positifs ', () => {
    const entre = [-5, -3, 2, 4, 0];
    const resultat = NegatifPositif(entre);

    expect(estBienSepare(resultat)).to.equal(true);
    expect(comptePositifs(resultat)).to.equal(2);
    expect(compteNonPositifs(resultat)).to.equal(3);
  });

  it('ne change rien quand il n\'y a que des négatifs', () => {
    const entre = [-1, -2, -3];
    const resultat = NegatifPositif(entre);

    expect(resultat).to.deep.equal([-1, -2, -3]);
  });

  it('ne change rien quand il n\'y a que des positifs', () => {
    const entre = [4, 5];
    const resultat = NegatifPositif(entre);

    expect(resultat).to.deep.equal([4, 5]);
  });

  it('gère un tableau vide', () => {
    const entre = [];
    const resultat = NegatifPositif(entre);

    expect(resultat).to.deep.equal([]);
  });

  it('gère un tableau ne contenant que des zéros', () => {
    const entre = [0, 0, 0];
    const resultat = NegatifPositif(entre);

    expect(resultat).to.deep.equal([0, 0, 0]);
  });
});