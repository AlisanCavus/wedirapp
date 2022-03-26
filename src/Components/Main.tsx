import React from 'react'
import Loader from './Loader';
import Error from './Error'
 
interface bo {
  isLoading:boolean
  error:boolean
  errorHandler (arg:boolean) : void
}

const Main: any = ( {isLoading, error, errorHandler}: bo) => {

  


  if (!isLoading && !error) {
    return (<div className="w-[35vw] h-[70vh] flex justify-start items-center text-center m-auto bg-orange-50 rounded-xl xs:rounded-none lg:w-1/2 xl:w-1/2 xs:w-full sm:w-11/12  md:w-5/6 ">
    <div className="flex justify-center items-center text-center mx-auto xs:w-full sm:w-11/12  ">
        Welcome to the WedirApp!
    </div>
</div>)
  } else if (isLoading) {
    return (<Loader/>)
  } else if (error) {
    return (<Error errorHandler={errorHandler}/>)
  }
 
  
}

export default Main