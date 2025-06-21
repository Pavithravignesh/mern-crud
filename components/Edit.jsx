import React from "react";

function Edit() {
  return (
    <>
      <form action="" className="flex flex-col">
        <input
          type="text"
          name=""
          id=""
          placeholder="enter Topics"
          className="bg-gray-300 border-blue-600 border-2"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="enter description"
          className="bg-gray-300 border-blue-600 border-2 mt-2"
        />
        <button
          type="submit"
          className="bg-blue-700 border-black-600 border-2 mt-2"
        >
          Update Topics
        </button>
      </form>
    </>
  );
}

export default Edit;
