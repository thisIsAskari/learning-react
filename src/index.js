import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header(props) {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

// To create a list, foreach will not create a new array and here we need new array so we use map.

function Menu(props) {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        // React fragment--shorter syntax for fragment
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza, index) => {
              return <Pizza key={index} {...pizza} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza(props) {
  // if (props.soldOut) return null; // if pizza is sold out, return null and do not render the pizza.
  // console.log(props);
  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>

        {/* {props.soldout ? <span>SOLD OUT</span> : <span>{props.price}</span>} */}
        <span>{props.soldOut ? "SOLD OUT" : '$'+props.price}</span>
      </div>
    </li>
  );
}

function Footer(props) {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open from {props.openHour} until {props.closeHour}:00. Come visit
        us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
// React strict mode
// Strict mode render components twice in development in order to find certain bugs and also react will check if we are using out dated parts of the react API.
// React.StrictMode is a wrapper component that helps you write better React components.
// It activates additional checks and warnings for your components.
// It does not impact the rendering performance.
// It is recommended to use React.StrictMode in your application's entry point.
// It is not recommended to use React.StrictMode in your components.
// It is not recommended to use React.StrictMode in your tests.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// ReactDOM.render(<App />, document.getElementById("root"));
