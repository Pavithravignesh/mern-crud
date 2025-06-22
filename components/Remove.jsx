"use client";

import { useRouter } from "next/navigation";

export default function Remove({ id }) {
  const router = useRouter();

  async function handleClick() {
    // console.log(id);
    try {
      const confirmed = confirm("Are you sure!");
      if (confirmed) {
        const response = await fetch(
          `http://localhost:3000/api/topics?id=${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          console.log("DELETED successfully!");
          router.refresh();
        } else {
          console.log("DELETED Failed!");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        <div className="">Remove</div>
      </button>
    </>
  );
}
