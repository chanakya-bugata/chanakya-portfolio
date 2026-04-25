import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';
import { sendContactEmail } from '@/lib/email';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  role: z.string().min(1, 'Please select your role'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Validate the request body
    const validatedData = contactSchema.safeParse(body);
    
    if (!validatedData.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validatedData.error.format() },
        { status: 400 }
      );
    }

    const { name, email, role, message } = validatedData.data;

    // 2. Log to Supabase
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, role, message }]);

    if (dbError) {
      console.error('Supabase error:', dbError);
      // We continue even if DB logging fails, but maybe log it
    }

    // 3. Send email via Resend
    const { error: emailError } = await sendContactEmail({
      name,
      email,
      role,
      message,
    });

    if (emailError) {
      console.error('Resend error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email notification' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
