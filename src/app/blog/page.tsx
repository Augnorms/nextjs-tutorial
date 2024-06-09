"use client"
import React, { useState, useEffect } from 'react';
import LoadingState from "../loading";

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(counter + 1);
      if (counter >= 5) {
        setLoading(false);
      }
    }, 1000); // 1 second

    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <div>
      {loading ? (
        <LoadingState />
      ) : (
        <h1 className='text-lg'>Welcome to blog page</h1>
      )}
    </div>
  );
}