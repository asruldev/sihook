import { useState, useEffect, useCallback, useMemo } from "react";

type QueryParams = Record<string, string>;

export const useFilterParams = (initQuery: QueryParams = {}) => {
  const [query, setQuery] = useState<QueryParams>({});

  const defaultQuery = useMemo(() => ({ ...initQuery }), [initQuery]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    let newQuery: QueryParams = {};

    searchParams.forEach((value, key) => {
      if (value && value !== "-" && value !== "") {
        newQuery[key] = value;
      }
    });

    newQuery = { ...defaultQuery, ...newQuery };

    setQuery(newQuery);
    updateURL(newQuery);
  }, [defaultQuery]);

  const updateURL = useCallback((params: QueryParams) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value && value !== "-" && value !== "") {
        searchParams.set(key, value);
      }
    });
    window.history.replaceState(null, "", `?${searchParams.toString()}`);
  }, []);

  const setQueryData = useCallback(
    (val: string | QueryParams, key?: string, isObject = false) => {
      let newQuery: QueryParams = { ...defaultQuery };

      if (key && typeof val === "string") {
        if (val && val !== "-" && val !== "") {
          newQuery[key] = val;
        }
      }

      if (isObject && typeof val === "object") {
        Object.entries(val).forEach(([property, value]) => {
          if (value && value !== "-" && value !== "") {
            newQuery[property] = value;
          }
        });
      }

      setQuery(newQuery);
      updateURL(newQuery);
    },
    [defaultQuery, updateURL]
  );

  const clearParams = useCallback(
    (key: string) => {
      let newQuery: QueryParams = { ...defaultQuery };

      if (key) {
        delete newQuery[key];
      }

      setQuery(newQuery);
      updateURL(newQuery);
    },
    [defaultQuery, updateURL]
  );

  const clearAllFilters = useCallback(() => {
    setQuery(defaultQuery);
    updateURL(defaultQuery);
  }, [defaultQuery, updateURL]);

  return { query, setQuery, setQueryData, clearParams, clearAllFilters };
};