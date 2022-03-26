import React, { useState } from 'react';
import {BsSearch} from 'react-icons/bs'



interface Props {
  submitSearch(arg: string): void;
}

function Form(props: Props) {
  const { submitSearch } = props;

  const [location, setLocation] = useState<string>('');

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (!location || location === '') return;
    submitSearch(location);
    setLocation('')
  };

  

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
   
  };

  return (
    <div className="h-20 w-full flex justify-center items-center">
      <form onSubmit={onSubmitHandler} className="w-1/4 h-1/2 flex xs:w-full sm:w-11/12 md:w-2/3 lg:w-1/3 xl:w-1/3">
        <input
          type="text"
          aria-label="location"
          className="placeholder:p-2 p-2 xs:p-0 xs:mx-1 sm:mx-1 rounded-xl focus:ring-0 mx-2 w-full placeholder:text-center"
          placeholder="Search for a Location"
          required
          value={location}
          onChange={changeHandler}
        />
        <button
          className="h-full w-20 xs:w-10 xs:mx-1 sm:w-10 sm:mx-1 rounded-xl bg-gray-200 flex justify-center items-center text-center"
          onClick={onSubmitHandler}
        >
          <BsSearch className=" text-center my-auto"/>
        </button>
      </form>
    </div>
  );
}

export default Form;
