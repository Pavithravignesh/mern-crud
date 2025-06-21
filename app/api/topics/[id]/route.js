import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, res) {
  const { id } = res.params;
  const { newTitle: title, newDescription: description } = req.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    {
      message: "record has been updated successfully!",
    },
    { status: 200 }
  );
}

export async function GET(req, res) {
  const { id } = res.params;
  await connectMongoDB();
  const topic = await Topic.findById(id);
  return NextResponse.json({ topic }, { status: 200 });
}
