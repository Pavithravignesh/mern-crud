import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topics";
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
