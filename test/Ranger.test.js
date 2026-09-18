import { expect } from 'chai';
import { Ranger } from '../src/Ranger.js';

describe('Ranger', () => {
  it('trie le tableau de l\'exemple du sujet', () => {
    const entre = [0, 1, 0, 0, 1, 0];
    const resultat = Ranger(entre);

    expect(resultat).to.deep.equal([0, 0, 0, 0, 1, 1]);
  });

  it('trie un tableau commençant par des 1', () => {
    const entre = [1, 1, 0, 1, 0];
    const resultat = Ranger(entre);

    expect(resultat).to.deep.equal([0, 0, 1, 1, 1]);
  });

  it('ne change rien quand il n\'y a que des 0', () => {
    const entre = [0, 0, 0];
    const resultat = Ranger(entre);

    expect(resultat).to.deep.equal([0, 0, 0]);
  });

  it('ne change rien quand il n\'y a que des 1', () => {
    const entre = [1, 1, 1];
    const resultat = Ranger(entre);

    expect(resultat).to.deep.equal([1, 1, 1]);
  });

  it('gère un tableau vide', () => {
    const entre = [];
    const resultat = Ranger(entre);

    expect(resultat).to.deep.equal([]);
  });

  it('gère un tableau de taille 1', () => {
    expect(Ranger([0])).to.deep.equal([0]);
    expect(Ranger([1])).to.deep.equal([1]);
  });
});