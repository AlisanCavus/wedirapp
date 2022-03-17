import React, {Suspense, useState } from 'react';
import Loading from './Components/Loading';
const Background = React.lazy(() => import('./Components/Background'))



function App() {

  const [ search, setSearch ] = useState<string>("")

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const enteredCity:string = event.target.value
    setSearch(enteredCity)
  }

 console.log(search)
  return (
      
      <div className=" w-screen h-screen bg-slate-200">
        <div className=" z-50 top-0 left-0 w-screen h-20 flex justify-center relative opacity-70">
        <form className=" flex w-1/2 justify-center">
        <input onSubmit={inputHandler} className=" w-1/3 h-1/2 my-auto rounded-lg px-2 placeholder:text-center placeholder:px-2 " type="text" placeholder="type a city" />
        <button className=" bg-slate-500 h-1/2 my-auto rounded-lg mx-2 px-2">search</button>
        </form>
        </div>
        <Suspense fallback={<Loading/>}>
        <Background search={search}/>
        </Suspense>
      
          
        
      </div>
   
  );
}

export default App;
