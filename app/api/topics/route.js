import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { topic, description } = await req.json();
  await connectMongoDB();
  await Topic.create({ topic, description });
  return NextResponse.json(
    { message: "Topic has successfully created!" },
    { status: 200 }
  );
}

export async function GET(req, res) {
  await connectMongoDB();
  const allTopics = await Topic.find({});
  return NextResponse.json({ allTopics }, { status: 200 });
}

export async function DELETE(req, res) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "record has successfully Deleted!" },
    { status: 200 }
  );
}
