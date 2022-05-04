import "./styles.css";

export default function App() {
  // todo: create card array
  const cards = [1, 2, 3, 4];
  return (
    <div>
      {cards.map(function (card) {
        return <Card />;
      })}
    </div>
  );
}

// todo: make a card component
function Card() {
  return <div>Card1</div>;
}

// myArray.map(function(itemInArray) {
//  return (
//   <div>jsx</div>
//  )
//})
