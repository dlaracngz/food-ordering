import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Merhaba Dünya" }, { status: 200 });
}
