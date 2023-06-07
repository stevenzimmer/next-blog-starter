import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
 
export async function GET(request: NextRequest) {


  const secret = request.nextUrl.searchParams.get("secret")

  if(secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: "invalid Token"}, {
      status: 401,
      statusText: "Unauthorized",
      headers: {
        "Conent-Type": "application/json"
      }
    })
  }


  const path = request.nextUrl.searchParams.get('path') || '/';

  revalidatePath(path);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}