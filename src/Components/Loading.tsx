import React from 'react'
import {BsFillUmbrellaFill} from 'react-icons/bs'

function Loading() {
  return (
    <div className=" min-w-screen min-h-screen bg-slate-700 flex flex-col justify-center mt-auto">
        <BsFillUmbrellaFill className=" fill-black"/>
    </div>
  )
}

export default Loading