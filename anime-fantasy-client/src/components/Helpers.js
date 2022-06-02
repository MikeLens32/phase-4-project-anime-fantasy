export const wait = ms => new Promise(resolve => {
    setTimeout(() => {
        resolve()
    }, ms)
});

export const attack = ({ attacker }) => {
  const receivedDamage =
    attacker.attack * 1.25;

  const finalDamage =  receivedDamage / 2;
  
  return finalDamage;
  };

export const ultimate = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.ult_move * 1.25;

  const finalDamage = receivedDamage  / 2;

  return finalDamage;
};