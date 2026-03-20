//@ts-nocheck
"use server";

export async function POST(req) {
  const body = await req.json()
  return Response.json({ id: Date.now(), ...body }, { status: 201 })
}



