<?php
// Make sure the form has been submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Set the recipient email address
  include "./inc/mail.txt";

  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set the email subject and message body
  $subject = 'New message from ' . $name;
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";

  // Set the email headers
  $headers = "From: $to\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "X-Mailer: PHP/" . phpversion();

  // Send the email
  if (mail($to, $subject, $body, $headers, "-f $to")) {
    echo 'Message sent successfully.';
  } else {
    echo 'An error occurred. Please try again later.';
  }
}
