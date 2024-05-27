import React, { useEffect, useState } from "react";
import { DropdownIcon, SearchIcon } from "../../assets/svg";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState();

  const onValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    console.log({
      searchValue,
    });
  }, [searchValue]);

  return (
    <div className="bg-gmail-grey1 flex flex-row items-center justify-start w-full h-full rounded-[8px] px-[17px] py-[11px]">
      <SearchIcon />
      <input
        type="text"
        value={searchValue}
        placeholder="Search mail"
        className="placeholder-text bg-transparent w-[95%] mx-[20px]"
        onChange={onValueChange}
      />
      <DropdownIcon />
    </div>
  );
};

export default SearchBar;
