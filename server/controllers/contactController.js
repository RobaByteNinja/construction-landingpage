const nodemailer = require('nodemailer');

const contactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Create transporter with explicit Gmail settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify connection configuration
    await transporter.verify();
    console.log('Server is ready to take our messages');

    // Email content - send to your actual email, not the demo address
    const mailOptions = {
      from: `"BuildMaster Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL, // Send to your actual email
      replyTo: email, // Allow replying directly to the sender
      subject: `BuildMaster Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Sent from BuildMaster Contact Form</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully to:', process.env.RECIPIENT_EMAIL);
    res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });
  } catch (error) {
    console.error('Email error details:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
};

module.exports = { contactForm };