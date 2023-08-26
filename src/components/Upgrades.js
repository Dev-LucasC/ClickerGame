import React, { useState, useEffect } from 'react';

const Upgrades = ({
  money,
  setMoney,
  upgrades,
  buyUpgrade,
  setUpgrades,
  setMoneyPerClick,
  moneyPerClick,
}) => {
  const [passiveIncome, setPassiveIncome] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoney(prevMoney => prevMoney + passiveIncome);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [passiveIncome, setMoney]);

  const canAfford = (upgrade) => money >= upgrade.cost;

  const handleBuyUpgrade = (index) => {
    const upgrade = upgrades[index];
    if (canAfford(upgrade)) {
      setMoney(prevMoney => prevMoney - upgrade.cost);

      const updatedUpgrades = [...upgrades];
      updatedUpgrades[index].cost *= 2;
      setUpgrades(updatedUpgrades);

      if (index === 0) {
        setMoneyPerClick(moneyPerClick + 1);
      } else if (index === 1) {
        setPassiveIncome(passiveIncome + 1);
      }

      buyUpgrade(index);
    }
  };

  return (
    <div>
      <h2>Upgrades</h2>
      {upgrades.map((upgrade, index) => (
        <div key={index}>
          <p>{upgrade.name}</p>
          <p>Custo: {upgrade.cost}</p>
          {canAfford(upgrade) ? (
            <button onClick={() => handleBuyUpgrade(index)}>Comprar</button>
          ) : (
            <button disabled>Não pode comprar</button>
          )}
        </div>
      ))}
      <p>Renda Passiva: {passiveIncome} /s</p>
    </div>
  );
};

export default Upgrades;
