import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = contactSchema.parse(body);

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // You'll need to verify a domain on Resend to change this
      to: 'nikshadali@example.com', // Replace with your actual receiving email
      subject: `New Portfolio Message: ${subject}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
