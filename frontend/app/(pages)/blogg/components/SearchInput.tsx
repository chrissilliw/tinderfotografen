"use client";

import { form } from "framer-motion/client";
import React from "react";
import SearchButton from "./SearchButton";

const SearchInput = () => {
  return (
    <form>
      <div className="flex p-1 justify-between bg-white rounded-full">
        <input
          className="px-4 w-full rounded-full"
          id="search"
          name="search"
          placeholder="Sök artiklar"
        />
        <SearchButton />
      </div>
    </form>
  );
};

export default SearchInput;
