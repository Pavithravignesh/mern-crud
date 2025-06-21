import TopicsList from "@/components/TopicsList";

const getTopics = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data!");
    }
    return response.json();
  } catch (err) {
    console.log("Error loading topics: ", err);
    return [];
  }
};

export default async function Home() {
  const { allTopics } = await getTopics();
  return (
    <>
      <div>
        {allTopics && allTopics.map((e) => <TopicsList key={e._id} e={e} />)}
      </div>
    </>
  );
}
