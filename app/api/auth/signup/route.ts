import { createClient } from '@supabase/supabase-js';
import jwt from 'jsonwebtoken';
import { UserSignup, UserResponse } from '@/app/api/auth/data-type';
import { NextResponse } from 'next/server';


// Initialize Supabase client
const supabase = createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_KEY as string);

// This function will handle the POST request
export async function POST(request: Request) {
  try {
    // Parse the incoming request body
    const { username, email, password }: UserSignup = await request.json() as UserSignup;
    const newUser = {
      username,
      password,
      email
    }
    const { data, error } = await supabase
      .from(process.env.DB_TABLE_NAME as string)
      .insert(newUser)
      .select()
      .single();

      if (error || !data) {
        return NextResponse.json({ status: false, username: "", email: error, access_token: "error", isAdmin: false }, { status: 404 });
      }
    const payload = { username: data.username, isAdmin: data.isAdmin };
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return NextResponse.json({
      status: true,
      username: data.username,
      email: data.email,
      access_token: accessToken,
      isAdmin: data.isAdmin,
    });

  } catch (error) {
    return NextResponse.json({ status: false, username: "", email: "Server error", access_token: "error", isAdmin: false }, { status: 500 });
  }
}
