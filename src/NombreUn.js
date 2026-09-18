
export function NombreUn(T) {

  let premierUn = -1;

  for (let i = 0; i < T.length; i++) {
    if (T[i] === 1) {
      premierUn = i;
      break;
    }
  }
  if (premierUn === -1) {
    return 0;
  }

  return T.length - premierUn;
}