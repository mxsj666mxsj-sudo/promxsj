"use server";

export async function submitContact(formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const email = formData.get("email");
  const message = formData.get("message");

  console.log("Contact form submission:", { email, message });

  // In a real app, you would send this to Resend, SendGrid, etc.
  return { success: true, message: "Message sent successfully!" };
}

