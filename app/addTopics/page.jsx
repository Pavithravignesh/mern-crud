"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function AddTopics() {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log("hi");

    if (!topic || !description) {
      alert("Kindly enter the details!");
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, description }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (err) {
      console.log("FAILED", err);
    }
  }

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="bg-gray-300 border-blue-600 border-2"
          type="text"
          name=""
          id=""
          value={topic}
          placeholder="enter Topics"
          onChange={(e) => setTopic(e.target.value)}
        />
        <input
          className="bg-gray-300 border-blue-600 border-2 mt-2"
          type="text"
          name=""
          id=""
          value={description}
          placeholder="enter description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-700 border-black-600 border-2 mt-2"
        >
          Add Topics
        </button>
      </form>
    </>
  );
}

export default AddTopics;
