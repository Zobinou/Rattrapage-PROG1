import { expect } from 'chai';
import { NombreUn } from '../src/NombreUn.js';

describe('NombreUn', () => {
  it('compte les 1 de l\'exemple du sujet', () => {
    expect(NombreUn([0, 0, 0, 0, 1, 1])).to.equal(2);
  });

  it('retourne 0 quand il n\'y a aucun 1', () => {
    expect(NombreUn([0, 0, 0])).to.equal(0);
  });

  it('retourne la longueur du tableau quand il n\'y a que des 1', () => {
    expect(NombreUn([1, 1, 1, 1])).to.equal(4);
  });

  it('gère un tableau vide', () => {
    expect(NombreUn([])).to.equal(0);
  });

  it('compte correctement sur un petit tableau', () => {
    expect(NombreUn([0, 1])).to.equal(1);
    expect(NombreUn([1])).to.equal(1);
    expect(NombreUn([0])).to.equal(0);
  });
});