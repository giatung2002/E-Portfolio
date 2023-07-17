<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Validate form data
  if (empty($name) || empty($email) || empty($message)) {
    die("Please fill in all required fields.");
  }

  // Set up email parameters
  $to = "youremail@example.com"; // Replace with your email address
  $subject = "New message from $name";
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  // Construct email body
  $body = "<h1>New message from $name</h1>";
  $body .= "<p>Email: $email</p>";
  $body .= "<p>Message: $message</p>";

  // Send email
  if (mail($to, $subject, $body, $headers)) {
    echo "Email sent successfully.";
  } else {
    die("Error sending email.");
  }
}
?>
