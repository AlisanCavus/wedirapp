import  Form  from './Components/Form'
import useForecast from './Hooks/useForecast';

import Forecast from './Components/Forecast';
import Main from './Components/Main'



const App: React.FC = () => {

 const {error, isLoading, forecast, submitRequest ,setError } = useForecast()

 const submitSearch = (value:string) => {
    
    submitRequest(value)
 }

 const errorHandler = (e:boolean) => {
  setError(!e)
}



      
        return (
        
        
        <div className="min-w-screen min-h-screen bg-wedir bg-no-repeat bg-cover flex justify-center flex-col"> 
        <Form submitSearch={submitSearch}/>
        {forecast ? <Forecast forecast={forecast} isLoading={isLoading}/> : <Main isLoading={isLoading} error={error} errorHandler={errorHandler}/>}
       </div>
       
       
       ) 
      
      
  
  
}

export default App;
