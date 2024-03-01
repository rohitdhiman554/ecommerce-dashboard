import './App.css';
import Revenue from './components/Dashboard/Revenue';
import Sales from './components/Dashboard/Sales';
import Stocks from './components/Dashboard/Stocks';

function App() {
  return (
    <div className='w-full flex-col h-screen gap-5 flex  p-4'>
      <div className='flex w-full'>
        <Revenue />
        <Stocks />
      </div>
      <Sales />
    </div>
  );
}

export default App;
