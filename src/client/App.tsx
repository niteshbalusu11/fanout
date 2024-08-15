import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function App() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["info"],
    queryFn: async () => {
      return await window.electronAPI.getInfo("testnet");
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="App">
      <h1 className="text-3xl">Fanout</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
