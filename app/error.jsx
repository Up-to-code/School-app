"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <div className=" text-black cleick h-3/4">
        <h2>Something went wrong!</h2>
      </div>
    </div>
  );
}
