// import React from 'react'
import { useEffect } from "react";
import { toast } from "react-toastify";
function Home() {
  useEffect(() => {
    toast.success("Hello world");
  }, []);
  return (
    <div className="text-3xl font-bold">Home {import.meta.env.VITE_ENV}</div>
  );
}

export default Home;
