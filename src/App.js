import './App.css';
import Revenue from './components/Dashboard/Revenue';
import Sales from './components/Dashboard/Sales';
import ShoppingRate from './components/Dashboard/ShoppingRate';
import Stocks from './components/Dashboard/Stocks';
import Traffic from './components/Dashboard/Traffic';

function App() {
  return (
    <div className='w-full flex-col h-full gap-5 flex  p-4'>
      <div className='flex w-full'>
        <Revenue />
        <Stocks />
      </div>
      <div className='flex w-full'>
        <Sales />
        <ShoppingRate />
      </div>
      <Traffic />
    </div>
  );
}

export default App;
