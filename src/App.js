import './App.css';
import desktopdivider from './Image/pattern-divider-desktop.svg';
import diceicon from './Image/icon-dice.svg';
import { useEffect, useState } from 'react';
import Loading from './Image/loading';

function App() {
const [advice, setaAdvice] = useState();
const[isloading, SetIsloading] = useState(true);

const randomadvice = async()=>{
  SetIsloading(true);
  const response = await fetch('https://api.adviceslip.com/advice');
  const advicedata = await response.json();

  setaAdvice(advicedata);
  SetIsloading(false);
};
useEffect(() => {
randomadvice();
}, [])


  return (
    <>
    <div className='h-screen bg-DarkBlue flex items-center justify-center flex-col'>
      {isloading ? (
        <Loading />

      ): (
<>
        <div className='w-[500px] rounded-lg h-fit bg-DarkGrayishBlue p-12'>
        <h2 className='text-NeonGreen  text-sm text-center mb-5 font-semibold'>Advice #{advice?.slip.id}</h2>
        <p className='text-LightCyan mb-10 font-extrabold'>
          “{advice?.slip.advice}”
        </p>
        <img src={desktopdivider} alt='desktop divider' />
      </div>
      <button className='h-12 w-12  bg-NeonGreen -mt-5 rounded-full flex items-center justify-center' onClick={randomadvice}>
        <img src= {diceicon} alt='dice' className='h-5 w-5'/>
      </button>
</>
        )}
    </div>
    </>
  );
}

export default App;
