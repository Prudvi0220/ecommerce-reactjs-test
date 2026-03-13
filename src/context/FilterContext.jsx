import { createContext, useEffect, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

  const getInitialValue = (key, defaultValue) => {
    if (typeof window === "undefined") return defaultValue;
    const stored = window.localStorage.getItem(key);
    return stored !== null ? stored : defaultValue;
  };

  const [search, setSearch] = useState(() => getInitialValue("filter_search", ""));
  const [category, setCategory] = useState(() =>
    getInitialValue("filter_category", "")
  );
  const [size, setSize] = useState(() => getInitialValue("filter_size", ""));

  useEffect(() => {
    window.localStorage.setItem("filter_search", search);
  }, [search]);

  useEffect(() => {
    window.localStorage.setItem("filter_category", category);
  }, [category]);

  useEffect(() => {
    window.localStorage.setItem("filter_size", size);
  }, [size]);

  return (
    <FilterContext.Provider
      value={{
        search,
        setSearch,
        category,
        setCategory,
        size,
        setSize
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};