import { useState } from "react";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Shop />
    </div>
  );
}

export default App;
