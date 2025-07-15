 
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  { id: 4, description: "Sunglasses", quantity: 1, packed: false },
  { id: 5, description: "Laptop", quantity: 1, packed: false },
  { id: 6, description: "Underwear", quantity: 3, packed: false },
  { id: 7, description: "Phone", quantity: 1, packed: false },
  { id: 8, description: "Headphones", quantity: 1, packed: false },
  { id: 9, description: "Keyboard", quantity: 1, packed: false },
  { id: 10, description: "Book", quantity: 1, packed: true },
];


export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  return <div className="add-form">
    <h3>What do you need for your 😍 trip?</h3>
  </div>
}

function PackingList() {
  return <div className="list">
    <ul>
      {initialItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  </div>
}

function Item({ item }) {
  return <li>
    <span style={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.quantity} {item.description}
    </span>
    <button>❌</button> 
  </li>
}

function Stats() {
  return <footer className="stats">
    <em>💼 You are ready to go ✈️</em>
  </footer>
}