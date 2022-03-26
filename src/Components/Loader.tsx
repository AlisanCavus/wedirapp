import React from 'react';

function Loader() {
  return (
    
      <div className="w-[35vw] h-[70vh] flex flex-col justify-start items-center text-center m-auto bg-orange-50 rounded-xl xs:rounded-none lg:w-1/2 xl:w-1/2 xs:w-full xs:h-full sm:w-11/12 sm:h-full md:w-5/6 ">
      <div className="flex w-full h-1/12 justify-around mx-auto items-center my-4">
        <div className=" min-w-1/2 flex justify-center">
          <div className="w-72 h-6 bg-slate-300 animate-pulse rounded-full sm:w-52"></div>
        </div>
      </div>
      <div className="flex w-full h-1/4 justify-around mx-auto items-center ">
        <div className="w-1/2">
          <div className="w-36 h-32 bg-slate-300 animate-pulse rounded-3xl mx-auto sm:w-24 sm:h-24"></div>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <div className="w-32 h-32 bg-slate-300 animate-pulse rounded-full mx-auto sm:w-24 sm:h-24"></div>
        </div>
      </div>

      <div className="flex w-full h-1/6 justify-around mx-auto items-center ">
        <div className=" flex w-1/2 ml-10 justify-center sm:ml-1 ">
          <div className="w-40 h-6 bg-slate-300 animate-pulse rounded-full mx-auto sm:w-24 sm:my-2"></div>
        </div>
        <div className=" flex w-1/2 mr-10 justify-center sm:mr-1 ">  
          <div className="w-40 h-6 bg-slate-300 animate-pulse rounded-3xl mx-auto sm:w-24 sm:my-2"></div>
        </div>
      </div>

      <div className="flex w-full h-1/6 justify-around mx-auto items-center sm:my-4">
        <div className=" flex w-1/3 justify-center">
          <div className="w-32 h-6 bg-slate-300 animate-pulse rounded-3xl mx-auto sm:w-20"></div>
        </div>
        <div className=" flex w-1/3 justify-center">
          <div className="w-32 h-6 bg-slate-300 animate-pulse rounded-3xl mx-auto sm:w-20"></div>
        </div>
        <div className=" flex w-1/3 justify-center">
          <div className="w-32 h-6 bg-slate-300 animate-pulse rounded-3xl mx-auto sm:w-20"></div>
        </div>

      </div>

      <div className="flex w-full h-1/3 flex-col lg:h-1/4 items-center">
        
        <div className="w-60 h-28 bg-slate-300 animate-pulse rounded-3xl mx-auto sm:w-56 sm:h-24"></div>

          <div className="w-full flex h-1/4 justify-evenly items-center">
            <div className=" flex flex-col justify-center items-center sm:w-1/3 ">
              <div className="w-32 h-6 bg-slate-300 animate-pulse rounded-3xl mx-auto sm:my-4"></div>
            </div>
            <div className=" flex flex-col justify-center items-center sm:w-1/3 ">
              <div className="w-32 h-6 bg-slate-300 animate-pulse rounded-3xl mx-auto sm:my-4"></div>
            </div>
          </div>
         
      </div>

      <div className="w-full h-1/10 my-5 flex justify-center items-center">
        <div className="w-60 h-6 bg-slate-300 animate-pulse rounded-3xl mx-auto sm:my-auto"></div>
      </div>

      <div className="w-full h-1/10 mb-5 flex justify-center items-center">
        <div className="w-32 h-6 bg-slate-300 animate-pulse rounded-3xl mx-auto"></div>
      </div>
    </div>
    
  );
}

export default Loader;
