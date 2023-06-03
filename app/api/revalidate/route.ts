import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
 
export async function GET(request: NextRequest, response: NextResponse) {

  if(request.nextUrl.searchParams.get("secret") !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: "invalid Token"})
  }


  const path = request.nextUrl.searchParams.get('path') || '/';

  revalidatePath(path);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}