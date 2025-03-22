"use client";
import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";

const FilterContext = createContext();

const initialState = {
  products: [],
  statuses: [],
  payment: [],
  name: "",
  last_name: "",
  limit: 30,
  offset: 0,
  dateFrom: "",
  dateTo: "",
  sort: "redcart_id:asc",
};

function filterReducer(state, action) {
  switch (action.type) {
    case "SET_FILTERS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function parseSearchParams(searchParams) {
  const params = new URLSearchParams(searchParams);
  const filters = {};
  params.forEach((value, key) => {
    filters[key] = value.includes(",") ? value.split(",") : value;
  });
  return filters;
}

function updateSearchParams(filters, searchParams) {
  const currentParams = new URLSearchParams(searchParams);
  Object.keys(filters).forEach((key) => {
    const val = filters[key];
    if (Array.isArray(val) && val.length) {
      currentParams.set(key, val.join(","));
    } else if (!Array.isArray(val) && val) {
      currentParams.set(key, val);
    } else {
      currentParams.delete(key);
    }
  });
  return decodeURIComponent(currentParams.toString());
}

export function FilterSlot() {
  const { filterSlot, open } = useFilters();
  return open ? filterSlot : null;
}

export function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const [open, setOpen] = React.useState(false);
  const [filterSlot, setFilterSlot] = React.useState(null);
  const searchParamsString = useSearchParams().toString();
  const router = useRouter();

  useEffect(() => {
    const filtersFromParams = parseSearchParams(searchParamsString);
    dispatch({ type: "SET_FILTERS", payload: filtersFromParams });
  }, [searchParamsString]);

  const setFilters = useCallback(
    (filters) => {
      dispatch({ type: "SET_FILTERS", payload: filters });
      const queryString = updateSearchParams(filters, searchParamsString);
      router.replace(`/orders?${queryString}`);
    },
    [router, searchParamsString]
  );

  const toggleFilters = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const contextValue = useMemo(
    () => ({
      state,
      setFilters,
      open,
      toggleFilters,
      filterSlot,
      setFilterSlot,
    }),
    [state, open, filterSlot, setFilters, toggleFilters]
  );

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  return useContext(FilterContext);
}
