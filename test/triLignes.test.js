import { expect } from 'chai';
import { triLignes } from '../src/triLignes.js';

describe('triLignes', () => {
  it('trie les lignes par nombre de 1 (exemple du sujet)', () => {
    const entre = [
      [0, 0, 1, 1],
      [0, 0, 0, 1],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ];
    const attendu = [
      [0, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 1],
      [1, 1, 1, 1],
    ];

    expect(triLignes(entre)).to.deep.equal(attendu);
  });

  it('gère une matrice déjà triée', () => {
    const entre = [
      [0, 0],
      [1, 0],
      [1, 1],
    ];

    const copie = [
      [0, 0],
      [1, 0],
      [1, 1],
    ];

    expect(triLignes(entre)).to.deep.equal(copie);
  });

  it('gère une matrice avec une seule ligne', () => {
    const entre = [[0, 1, 1]];
    expect(triLignes(entre)).to.deep.equal([[0, 1, 1]]);
  });

  it('gère une matrice sans aucune ligne', () => {
    expect(triLignes([])).to.deep.equal([]);
  });

  it('préserve les lignes lors du tri', () => {
    const entre = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 1],
    ];
    const resultat = triLignes(entre);

    expect(resultat).to.deep.equal([
      [0, 0, 0],
      [0, 0, 1],
      [1, 1, 1],
    ]);
  });
});