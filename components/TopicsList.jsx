"use client";

import Link from "next/link";
import Remove from "./Remove";

export default function TopicsList({ e }) {
  return (
    <>
      <div className="flex justify-between px-4 m-2 border-2">
        <div className="">
          <div className="font-bold">{e.topic}</div>
          <div className="font-semi">{e.description}</div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="font-bold">
            <Remove />
          </div>
          <Link href={"/editTopics"} className="font-semibold">
            Edit
          </Link>
        </div>
      </div>
    </>
  );
}
