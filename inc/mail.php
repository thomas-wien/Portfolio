<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING));
    $email = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
    $message = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING));

    $errors = [];

    // Validate form data
    if (empty($name)) {
        $errors[] = "Name is required.";
    }

    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }

    if (empty($message)) {
        $errors[] = "Message is required.";
    }

    // If no errors, send the email
    if (empty($errors)) {
      include "./inc/mail.txt"; // Replace with your email address
        $subject = "New contact from $name";
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        $headers = [
            "From" => $to,
            "Reply-To" => $email,
            "Content-Type" => "text/plain; charset=UTF-8"
        ];

        if (mail($to, $subject, $body, $headers, "-f $to")) {
            $successMessage = "Your message has been sent successfully.";
        } else {
            $errors[] = "There was a problem sending your message. Please try again later.";
        }
    }
}
?>