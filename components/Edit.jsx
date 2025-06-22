"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Edit({ topic, description, id }) {
  const [newTopic, setNewTopic] = useState(topic);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(id);

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newTopic,
          newDescription,
        }),
      });

      if (!res.ok) {
        console.error("Failed to update topic:", res.statusText);
        return;
      }

      console.log("Topic updated successfully!");
      router.refresh();
      router.push("/");
    } catch (err) {
      console.error("Error updating topic:", err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        name="topic"
        id="topic"
        placeholder="Enter topic"
        className="bg-gray-300 border-blue-600 border-2 p-2 rounded"
        value={newTopic}
        onChange={(e) => setNewTopic(e.target.value)}
      />
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Enter description"
        className="bg-gray-300 border-blue-600 border-2 mt-2 p-2 rounded"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-700 text-white border-2 border-black mt-2 p-2 rounded hover:bg-blue-800"
      >
        Update Topic
      </button>
    </form>
  );
}
