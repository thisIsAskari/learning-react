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
      <li>
        <span>🧳</span>
        <span>Sunglasses</span>
        <button>❌</button>
      </li>
    </ul>
  </div>
}

function Stats() {
  return <footer className="stats">
    <em>💼 You are ready to go ✈️</em>
  </footer>
}