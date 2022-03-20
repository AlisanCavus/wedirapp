import React from 'react'
import {FiSearch} from 'react-icons/fi'

interface Props {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}



const InputField: React.FC<Props> = ( {search, setSearch, handleAdd} : Props) => {
  return (
    
    <form className="my-auto w-1/4 flex" onSubmit={handleAdd}>
        <input value={search} onChange={ (e) => setSearch(e.target.value)} type="input" placeholder="choose a city" className="placeholder:text-center rounded-lg w-full outline-none place-content-center placeholder:p-4" />
        <button className=" bg-amber-300 rounded-lg w-20 flex justify-center items-center p-2 mx-2 hover:animate-pulse" type="submit"> <FiSearch /> </button>
    </form>
  )
}

export default InputField