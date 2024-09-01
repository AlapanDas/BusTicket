
import { createClient } from '@supabase/supabase-js';
import jwt from 'jsonwebtoken';
import { UserLogin } from '@/app/api/auth/data-type';
import { NextResponse } from 'next/server';


// Initialize Supabase client
const supabase = createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_KEY as string);

// This function will handle the POST request
export async function POST(request: Request) {
  try {
    // Parse the incoming request body
    const { username, password }: UserLogin = await request.json();
    
    const { data, error } = await supabase
    .from(process.env.DB_TABLE_NAME as string)
    .select('*')
    .eq(process.env.DB_COLUMN_NAME as string, username)
    .single();

    if (error || !data) {
      return NextResponse.json({ status: false, username: "", email: "User not found", access_token: "error", isAdmin: false }, { status: 404 });
    }

    
    if (password===data.password) {
      const payload = { username: data.username, isAdmin: data.isAdmin };
      const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });

      return NextResponse.json({
        status: true,
        username: data.username,
        email: data.email,
        access_token: accessToken,
        isAdmin: data.isAdmin,
      });
    } else {
      return NextResponse.json({ status: false, username: "", email: "Invalid password", access_token: "error", isAdmin: false }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ status: false, username: "", email: "Server error", access_token: "error", isAdmin: false }, { status: 500 });
  }
}


export async function GET() {
  return NextResponse.json({ message: "Hello from NextJS" })
}