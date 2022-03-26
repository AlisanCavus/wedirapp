import React from 'react'
interface Props {
  errorHandler (arg:boolean) : void
}

function Error( {errorHandler}: Props) {
  return (
    <div onClick={() => errorHandler(true)} className="w-screen h-screen bg-slate-400 flex justify-center flex-col items-center z-50 absolute">
        <div className="w-1/3 h-1/3 rounded-lg bg-amber-300 flex justify-center items-center ">
            <span className="text-center text-slate-600 font-medium">  Opps... Something went wrong!</span>
        </div>
        
    </div>
  )
}

export default Error