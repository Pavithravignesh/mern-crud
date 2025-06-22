import Edit from "@/components/Edit";

async function getTopicById(id) {
  console.log(id);
  try {
    const response = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to get response!");
    }
    return response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default async function EditTopics({ params }) {
  const { id } = params;
  const { topics } = await getTopicById(id);
  console.log(topics);

  if (!topics) {
    return <div>Failed to load topic</div>;
  }

  return (
    <>
      <Edit
        topic={topics.topic}
        description={topics.description}
        id={topics._id}
      />
    </>
  );
}
