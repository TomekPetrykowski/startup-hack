"use client";
import { useState, useEffect, useMemo } from "react";

export function useFetch(
  url,
  optionsInput = {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }
) {
  const [rawData, setRawData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rawError, setRawError] = useState(null);
  const optionsStr = JSON.stringify(optionsInput);
  const options = useMemo(() => optionsStr, [optionsStr]);
  const data = useMemo(() => (rawData ? rawData : null), [rawData]);
  const error = useMemo(() => rawError, [rawError]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, JSON.parse(options));
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error.message);
        }

        setRawData(result);
      } catch (err) {
        setRawError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { data, loading, error };
}
