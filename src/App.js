import React, { useState } from 'react';
import './App.css';
import Cookie from './components/Cookie/Cookie';
import MoneyCounter from './components/MoneyCounter';
import Upgrades from './components/Upgrades';

const App = () => {
  const [money, setMoney] = useState(0);
  const [moneyPerClick, setMoneyPerClick] = useState(1);
  const [upgrades, setUpgrades] = useState([
    { name: 'Melhorar pedição de esmola', cost: 10, multiplier: 2 },
    { name: 'Aprender a Roubar emprestado', cost: 50, multiplier: 5 },
  ]);

  const handleClickCookie = () => {
    setMoney(money + moneyPerClick);
  };

  const buyUpgrade = (index) => {
    if (money >= upgrades[index].cost) {
      const updatedUpgrades = [...upgrades];
      updatedUpgrades[index].cost *= 2;
      setMoney(money - upgrades[index].cost);
      setUpgrades(updatedUpgrades);
      if (index === 0) {
        setMoneyPerClick(moneyPerClick + 1);
      }
    }
  };

  return (
    <div className="App">
      <h1>Ganhador de Dinheiro do Luskinha</h1>
      <h3>Clique no Luskinha para pedir esmola</h3>
      <Cookie onClick={handleClickCookie} />
      <MoneyCounter money={money} />
      <Upgrades
        money={money}
        setMoney={setMoney}
        upgrades={upgrades}
        buyUpgrade={buyUpgrade}
        setUpgrades={setUpgrades}
        setMoneyPerClick={setMoneyPerClick}
        moneyPerClick={moneyPerClick}
      />
    </div>
  );
};

export default App;
