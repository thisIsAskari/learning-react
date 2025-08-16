import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState("");
  const [mySatisfaction, setMySatisfaction] = useState(0);
  const [friendSatisfaction, setMyFriendSatisfaction] = useState(0);

  // const totalBill = 0;
  // const totalPerenctage = mySatisfaction + friendSatisfaction;
  // if (totalPerenctage > 0) {
  //   totalPercentage = totalPercentage / 100;
  //   totalBill = bill + bill * totalPerenctage;
  // }

  const tip = (bill * (mySatisfaction + friendSatisfaction)) / 2 / 100;

  function handleReset() {
    setBill("");
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
          You pay {bill + tip} ({bill + " + " + tip})
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
