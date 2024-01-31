import React from "react";
import { useRef } from "react";

function SearchForm({ setSearchTerm }) {
  const searchValue = useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="mb-10 h-fit max-w-2xl bg-gray-800 py-8 px-10 capitalize rounded shadow-[2px_5px_3px_0px_rgba(0,0,0,0.5)]"
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor="name"
          className="block mb-5 font-bold tracking-wide text-white"
        >
          search your favorite show
        </label>
        <input
          type="text"
          id="name"
          ref={searchValue}
          className="w-full border-none border-transparent rounded p-2 text-xl text-black"
          onChange={searchCocktail}
        />
      </div>
    </form>
  );
}

export default SearchForm;
