import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { email, name, partNumber, notes, brandNames, specs } =
      await request.json();

    const timestamp = Date.now();
    const safeName = name.replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "");
    const uniqueId = `${safeName}${timestamp}`;

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com", // Official SMTP server for Outlook
      port: 587, // Use 587 for TLS (recommended)
      secure: false, // Must be false for port 587 (TLS)

      auth: {
        user: "a.mustafa@specdrop.com",
        pass: "ffvdmrfnztfrvsmx",
      },
    });

    // Email options for sending to your own inbox
    const mailOptionToYou = {
      from: `"${name}" <a.mustafa@specdrop.com>`,
      to: "a.mustafa@specdrop.com",
      subject: "New Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Form Submission</h2>
          <ul>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Part Number:</strong> ${partNumber}</li>
            <li><strong>Brand Names:</strong>
              <ul>
                ${brandNames
                  ?.map((brand: string) => `<li>${brand}</li>`)
                  .join("")}
              </ul>
            </li>
            <li><strong>Highest Priority Specifications:</strong>
              <ul>
                ${specs?.map((spec: string) => `<li>${spec}</li>`).join("")}
              </ul>
            </li>
            <li><strong>Message:</strong> ${notes}</li>
          </ul>
        </div>
      `,
    };

    //  <p><em>(Note: This link will be replaced with a unique request ID or status page link.)</em></p>
    // Email options for sending thank you email to the user
    //   <a href="[InsertLinkHere]" style="color: #0078D4;"></a>
    const mailOptionToUser = {
      from: "a.mustafa@specdrop.com",
      to: email,
      subject: "We Have Received Your Request – SpecDrop",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #0056b3;">Thank You for Your Request!</h2>
          <p>Hi <strong>${name}</strong>,</p>
          
          <p>Thank you for submitting your part request through <strong>SpecDrop</strong> — we’ve received it and our team is already working on finding the best possible alternatives for you.</p>
          
          <h3 style="color: #0056b3;">What Happens Next:</h3>
          <ul>
            <li><strong>Manual Review:</strong> Our team of engineers will carefully analyze your request and match it with the most suitable alternative parts based on technical specs, availability, and compatibility.</li>
            <li><strong>Personalized Results:</strong> You’ll receive a tailored response with recommended alternatives within <em>[2 business days/hours]</em>.</li>
            <li><strong>Expert Insights:</strong> If needed, we may follow up with clarifying questions to ensure we provide the best match.</li>
          </ul>
          
          <h3 style="color: #0056b3;">Track Your Request</h3>

          <p></p>

          <h3 style="color: #0056b3;">Your Unique ID:</h3>
        
           <p id="${uniqueId}">${uniqueId}</p>
         
          
          <h3 style="color: #0056b3;">Help Shape the Future</h3>
          <p>Once you've reviewed the results, we’d love to hear your thoughts. We'll follow up with a short interview to learn what worked, what didn’t, and what features you’d like to see.</p>
          
          <p>Thanks again for helping us build a better tool for automation engineers. We’re excited to support your work.</p>
          
          <br />
          <p>Best regards,</p>
          <p style="color: #0056b3;><strong>The SpecDrop Team</strong><br />
          <a href="mailto:info@specdrop.com" style="color: #0078D4;">info@specdrop.com</a><br />
          <a href="https://speed-drop.vercel.app/" style="color: #0078D4;">www.specdrop.com</a></p>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(mailOptionToYou);
    await transporter.sendMail(mailOptionToUser);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error sending email:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      { message: "Failed to Send Email", error: errorMessage },
      { status: 500 }
    );
  }
}
