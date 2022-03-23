import  Form  from './Components/Form'
import useForecast from './Hooks/useForecast';
import Error from './Components/Error';
import Loader from './Components/Loader';
import Forecast from './Components/Forecast';


const App: React.FC = () => {

 const {error, isLoading, forecast, submitRequest} = useForecast()

 const submitSearch = (value:string) => {
  
   submitRequest(value)
 }
  return (
      
      <div className=" min-w-screen min-h-screen bg-slate-700 flex justify-between flex-col">
       {!isLoading && <Form submitSearch={submitSearch} />}
       {error && <Error/>}
       {isLoading && <Loader />}
       {forecast && <Forecast />}
      </div>
   
  );
}

export default App;
