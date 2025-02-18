import { useState } from "react";
import useGetProducts from "../../hooks/useGetProducts";
import { category } from "../../utils/data/db";

export default function FilterData() {
  const [categoryId, setCategoryId] = useState(null);
  const { isLoading, error, data } = useGetProducts(categoryId);

  const handelChange = (e) => {
    setCategoryId(e);
  };
  return (
    <div>
      <h1 className="my-[50px]">FilterData</h1>
      <div className="flex justify-between  border min-h-[400px]">
        <div className="bg-gray-300 w-[100%] h-[100%] p-5 ">
          <select
            className="w-[100%] rounded px-2 text-[18px] capitalize"
            onChange={(e) => handelChange(e.target?.value)}
          >
            {category?.map((el, index) => (
              <option value={el?.categoryId} key={index}>
                {el?.category}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-gray-500 w-[100%] h-[100%] p-5 ">dd</div>
      </div>
    </div>
  );
}
