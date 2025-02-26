import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function FilterDataBySearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dataObject, setDataObject] = useState({});
  console.log("dataObject", dataObject);

  const handleSetChange = (value, key) => {
    setSearchParams((prev) => {
      const updatedParams = new URLSearchParams(prev);
      updatedParams.set(key, value); // Update only one param while keeping others
      return updatedParams;
    });
  };

  useEffect(() => {
    setDataObject({
      textInput: searchParams.get("textInput") || "",
      anotherInput: searchParams.get("anotherInput") || "", // Add more inputs here
      anotherInput3: searchParams.get("anotherInput3") || "", // Add more inputs here
    });
  }, [searchParams]);

  return (
    <div>
      <h1>FilterDataBySearchParams</h1>

      {/* First Input */}
      <input
        name="textInput"
        type="text"
        value={dataObject.textInput} // Controlled
        className="border p-1 rounded bg-gray-100 w-[500px] border-gray-300"
        onChange={(e) => handleSetChange(e.target.value, "textInput")}
      />

      {/* Second Input */}
      <input
        name="anotherInput"
        type="text"
        value={dataObject.anotherInput} // Controlled
        className="border p-1 rounded bg-gray-100 w-[500px] border-gray-300 mt-2"
        onChange={(e) => handleSetChange(e.target.value, "anotherInput")}
      />
    </div>
  );
}
