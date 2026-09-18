
export function Echanger(tab, i1, i2) {
  const temporaire = tab[i1];
  tab[i1] = tab[i2];
  tab[i2] = temporaire;
}