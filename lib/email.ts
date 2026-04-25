import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail({
  name,
  email,
  role,
  message,
}: {
  name: string;
  email: string;
  role: string;
  message: string;
}) {
  const contactEmail = process.env.CONTACT_EMAIL || 'chanakya.offc@gmail.com';

  return await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>', // Change to verified domain later
    to: contactEmail,
    subject: `New Inquiry from ${name}`,
    replyTo: email,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
      <hr />
      <p>Sent from your portfolio contact form.</p>
    `,
  });
}
