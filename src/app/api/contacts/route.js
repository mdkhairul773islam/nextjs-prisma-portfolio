import prisma from "../../../../prisma/index";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { name, email, description } = body;

    const newPost = await prisma.contact.create({
      data: {
        name,
        email,
        description,
      },
    });

    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json(
      { message: "Contact Error", error },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const posts = await prisma.contact.findMany();

    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};
