import './App.css';
import Revenue from './components/Dashboard/Revenue';
import Stocks from './components/Dashboard/Stocks';

function App() {
  return (
    <div className='w-full border-2 flex justify-center items-center'>
      <div className='flex w-full'>
        <Revenue />
        <Stocks />
      </div>
    </div>
  );
}

export default App;
