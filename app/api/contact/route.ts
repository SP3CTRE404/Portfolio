import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Your email where you'll receive messages
const toEmail = "uditagg2004@gmail.com"; 

export async function POST(request: Request) {
  try {
    // 1. Get the data sent from the frontend form
    const { name, email, subject, message } = await request.json();

    // 2. Use Resend to send an email with that data
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // This must be a verified domain on Resend
      to: [toEmail], // Sends the email to you
      subject: `New Portfolio Message: ${subject}`,
      replyTo: email, // Lets you reply directly to the person who contacted you
      html: `
        <h1>New Message from your Portfolio</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 3. Send a success response back to the frontend
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    // 4. If something goes wrong, send an error response
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}