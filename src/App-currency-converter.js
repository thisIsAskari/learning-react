import { useEffect, useState } from "react";


export default function App() {


    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);

    useEffect(() => {
        const fetchConversionRate = async () => {
            try {
               
                const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const rate = data.rates[toCurrency];
                setConvertedAmount(rate * amount);
            } catch (error) {
                console.error('Error fetching conversion rate:', error);
                setConvertedAmount(null);
            }
        };

        if (fromCurrency === toCurrency) {
            setConvertedAmount(amount);
            return;
        }
        fetchConversionRate();
    }, [fromCurrency, toCurrency, amount]);

  return (
    <div>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT: {convertedAmount}</p>
    </div>
  );
}
