import React, { useState } from 'react';


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

  const changeHandler = (e: any) => {
    setLocation(e.target.value);
   
  };

  return (
    <div className="h-20 w-full flex justify-center items-center">
      <form onSubmit={onSubmitHandler} action=" w-1/2 h-1/2 flex">
        <input
          type="text"
          aria-label="location"
          className="placeholder:p-2 p-2 rounded-lg focus:ring-0 mx-2"
          placeholder="Search for Loaction"
          required
          value={location}
          onChange={changeHandler}
        />
        <button
          className=" rounded-lg bg-orange-300 p-2"
          onClick={onSubmitHandler}
        >
          {' '}
          Search{' '}
        </button>
      </form>
    </div>
  );
}

export default Form;