import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  console.log("at put");
  const { id } = params;
  const { newTopic: topic, newDescription: description } = await req.json();
  await connectMongoDB();
  console.log({ topic, description });
  await Topic.findByIdAndUpdate(id, { topic, description });
  return NextResponse.json(
    {
      message: { topic, description },
    },
    { status: 200 }
  );
}

export async function GET(req, res) {
  const { id } = res.params;
  await connectMongoDB();
  const topics = await Topic.findById(id);
  return NextResponse.json({ topics }, { status: 200 });
}
