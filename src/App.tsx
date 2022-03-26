import  Form  from './Components/Form'
import useForecast from './Hooks/useForecast';
import Error from './Components/Error';
import Loader from './Components/Loader';
import Forecast from './Components/Forecast';
import Main from './Components/Main'



const App: React.FC = () => {

 const {error, isLoading, forecast, submitRequest ,setError } = useForecast()

 const submitSearch = (value:string) => {
    
    submitRequest(value)
 }


 const errorHandler = () => {
   setError(false)
 }


  
      
      
        return (
        
        
        <div className="min-w-screen min-h-screen bg-wedir bg-no-repeat flex justify-center flex-col"> 
        <Form submitSearch={submitSearch}/>
        {error && <Error errorHandler={errorHandler}/>}
        {isLoading && <Loader />}
        {forecast ? <Forecast forecast={forecast} /> : <Main />}
       </div>
       
       
       ) 
      
      
  
  
}

export default App;
