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
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
   
  };

  return (
    <div className="h-20 w-full flex justify-center items-center">
      <form onSubmit={onSubmitHandler} action=" w-1/2 h-1/2 flex ">
        <input
          type="text"
          aria-label="location"
          className="placeholder:p-2 p-2 rounded-lg focus:ring-0 mx-2"
          placeholder="Search for a Location"
          required
          value={location}
          onChange={changeHandler}
        />
        <button
          className=" rounded-lg bg-orange-100 p-2 items-center text-center"
          onClick={onSubmitHandler}
        >
          <BsSearch className=" text-center my-auto"/>
        </button>
      </form>
    </div>
  );
}

export default Form;
