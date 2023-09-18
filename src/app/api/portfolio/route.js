import prisma from "../../../../prisma/index";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    console.log('body', body);
    const { title, github_link, live_link, tech, category, description } = body;

    const newPost = await prisma.portfolio.createMany({
      data: {
        title,
        github_link,
        live_link,
        tech,
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
    const posts = await prisma.portfolio.findMany();

    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};
