import React from 'react'
interface Props {
  errorHandler (arg:boolean) : void
}

function Error( {errorHandler}: Props) {
  return (
    <div onClick={(e) => errorHandler(!e)} className="w-[35vw] h-[70vh] flex justify-start items-center text-center m-auto bg-orange-50 rounded-xl xs:rounded-none lg:w-1/2 xl:w-1/2 xs:w-full sm:w-11/12  md:w-5/6 ">
    <div className="flex justify-center items-center text-center mx-auto xs:w-full sm:w-11/12  ">
        Something went wrong! Click here to close!
    </div>
</div>
  )
}

export default Error