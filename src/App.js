import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [mySatisfaction, setMySatisfaction] = useState(0);
  const [friendSatisfaction, setMyFriendSatisfaction] = useState(0);

  // const totalBill = 0;
  // const totalPerenctage = mySatisfaction + friendSatisfaction;
  // if (totalPerenctage > 0) {
  //   totalPercentage = totalPercentage / 100;
  //   totalBill = bill + bill * totalPerenctage;
  // }

  let totalBill = 0;
  let tip = 0;

  if (bill > 0) {
    const totalPercentage = (mySatisfaction + friendSatisfaction) / 100;

    console.log(totalPercentage);
    tip = bill * totalPercentage;
    totalBill = bill + tip;
    console.log(totalBill);
  }

  function handleReset() {
    setBill(0);
    setMySatisfaction(0);
    setMyFriendSatisfaction(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill}>
        How much was the bill?
      </Bill>
      <Satisfaction
        satisfaction={mySatisfaction}
        onSetSatisfaction={setMySatisfaction}
      >
        How did you like the service?
      </Satisfaction>
      <Satisfaction
        satisfaction={friendSatisfaction}
        onSetSatisfaction={setMyFriendSatisfaction}
      >
        How did your friend like the service?
      </Satisfaction>
      {bill > 0 && (
        <h2>
          You pay {totalBill} ({bill + " + " + tip})
        </h2>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function Bill({ bill, onSetBill, children }) {
  function handleBillInput(e) {
    // console.log(bill);
    if (e.target.value > 0) {
      onSetBill(Number(e.target.value));
    } else {
      alert("Please input the valid number.");
    }
  }
  return (
    <div>
      {children}
      <input type="number" value={bill} onInput={handleBillInput} />
    </div>
  );
}

function Satisfaction({ satisfaction, onSetSatisfaction, children }) {
  function handleSatisfaction(e) {
    onSetSatisfaction(Number(e.target.value));
  }
  return (
    <div>
      {children}
      <select value={satisfaction} onChange={handleSatisfaction}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was Okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing(20%)</option>
      </select>
    </div>
  );
}
