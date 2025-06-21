import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center bg-amber-300 text-gray-600 p-4 m-4">
        <Link href={"/"} className="font-bold">
          PVS Todos
        </Link>
        <Link href={"/addTopics"} className="border-2 p-2">
          Add Topics
        </Link>
      </div>
    </>
  );
}

export default Navbar;
