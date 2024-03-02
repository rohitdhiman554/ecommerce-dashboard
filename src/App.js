import "./App.css";
import Revenue from "./components/Dashboard/Revenue";
import Sales from "./components/Dashboard/Sales";
import ShoppingRate from "./components/Dashboard/ShoppingRate";
import Stocks from "./components/Dashboard/Stocks";
import Traffic from "./components/Dashboard/Traffic";

function App() {
  return (
    <div className="flex-col gap-8 h-full flex p-4 m-5 ">
      <div className="flex w-full gap-6 lg:flex-row flex-col">
        <Revenue />
        <Stocks />
      </div>
      <div className="flex w-full gap-6 lg:flex-row flex-col">
        <Sales />
        <ShoppingRate />
      </div>
      <Traffic />
    </div>
  );
}

export default App;
