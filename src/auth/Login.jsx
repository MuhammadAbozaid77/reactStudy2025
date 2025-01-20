export default function Login() {
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-[100%]">
      <form
        onSubmit={handelSubmit}
        className="w-[500px] border p-5 rounded-md shadow-md"
      >
        <h1 className="mb-5 text-[30px] font-bold text-center">login </h1>

        <div className="flex flex-col mb-3">
          <label htmlFor="" className="capitalize">
            email
          </label>
          <input
            className="border p-1 rounded outline-none bg-blue-100 "
            type="text"
            name="email"
            id=""
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="" className="capitalize">
            password
          </label>
          <input
            className="border p-1 rounded outline-none bg-blue-100 "
            type="password"
            name="password"
            id=""
          />
        </div>

        <button
          type="submit"
          className="my-5 border p-2 rounded-md bg-blue-500 text-white w-[100%]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
