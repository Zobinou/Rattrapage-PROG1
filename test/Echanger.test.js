import { expect } from 'chai';
import { Echanger } from '../src/Echanger.js';

describe('Echanger', () => {
  it('échange les valeurs de deux éléments ', () => {
    const tab = [0, 1, 0];
    Echanger(tab, 1, 2);
    expect(tab).to.deep.equal([0, 0, 1]);
  });

  it('échange les éléments au début du tableau', () => {
    const tab = [1, 2, 3];
    Echanger(tab, 0, 2);
    expect(tab).to.deep.equal([3, 2, 1]);
  });

  it('échanger un élément avec lui-même ne change rien', () => {
    const tab = [5, 4, 3];
    Echanger(tab, 1, 1);
    expect(tab).to.deep.equal([5, 4, 3]);
  });

  it('fonctionne sur un tableau de longueur 2', () => {
    const tab = [1, 0];
    Echanger(tab, 0, 1);
    expect(tab).to.deep.equal([0, 1]);
  });
});