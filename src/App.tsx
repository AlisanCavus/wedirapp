import React, {Suspense, useState } from 'react';
import InputField from './Components/InputField';
import Loading from './Components/Loading';
const Background = React.lazy(() => import('./Components/Background'))



const App: React.FC = () => {

  const [ search, setSearch ] = useState<string>("")

  console.log(search)

  const hanldeAdd = (e: React.FormEvent) => {
    e.preventDefault()
    setSearch("")
  }

 
  return (
      
      <div className=" w-screen h-screen bg-slate-200">
        <div className=" z-50 top-0 left-0 w-screen h-20 flex justify-center relative opacity-70">
        <InputField search={search} setSearch={setSearch} handleAdd={hanldeAdd}/>
        </div>
        <Suspense fallback={<Loading/>}>
        <Background search={search} setSearch={setSearch}/>
        </Suspense>
      
          
        
      </div>
   
  );
}

export default App;
