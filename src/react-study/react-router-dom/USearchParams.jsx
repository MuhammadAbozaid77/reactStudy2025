import { useState } from "react";
import { useSearchParams } from "react-router";

export default function USearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams", searchParams?.get("filter"));

  const [urlData, setUrlData] = useState({ filter: "muhammad", okkk: "ojjjj" });

  const handelData = () => {
    setSearchParams(urlData);
  };
  const handelDeleteData = () => {
    setSearchParams({});
  };

  return (
    <div>
      <button className="border p-2 mx-5" onClick={handelData}>
        SeT Data
      </button>
      <button className="border p-2 mx-5" onClick={handelDeleteData}>
        handelDeleteData
      </button>
    </div>
  );
}
