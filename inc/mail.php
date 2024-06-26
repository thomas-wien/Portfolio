<?php
$errors = [];
$successMessage = '';
$formStatus = ''; // Hinzugefügte Variable zum Speichern des Formularstatus

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Formular-Daten sammeln und bereinigen
    $name = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING));
    $email = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
    $message = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING));
    $copyToSelf = isset($_POST['copyToSelf']) ? true : false;

    // Formular-Daten validieren
    if (empty($name)) {
        $errors[] = "Name ist erforderlich.";
    }

    if (empty($email)) {
        $errors[] = "Email ist erforderlich.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Ungültiges Email-Format.";
    }

    if (empty($message)) {
        $errors[] = "Nachricht ist erforderlich.";
    }

    // Wenn keine Fehler vorliegen, E-Mail senden
    if (empty($errors)) {
        include "./inc/mail.txt";
        $subject = "Neue Kontaktanfrage von $name";
        $body = "Name: $name\nEmail: $email\n\nNachricht:\n$message";
        $headers = [
            "From" => $to,
            "Reply-To" => $email,
            "Content-Type" => "text/plain; charset=UTF-8"
        ];

        $mailSent = mail($to, $subject, $body, $headers);

        if ($mailSent && $copyToSelf) {
            $copySubject = "Kopie Ihrer Nachricht an Thomas Netusil";
            $copyHeaders = [
                "From" => "no-reply@ariadne.at",
                "Reply-To" => $to,
                "Content-Type" => "text/plain; charset=UTF-8"
            ];
            $mailSent = mail($email, $copySubject, $body, $copyHeaders);
        }

        if ($mailSent) {
            $successMessage = "Ihre Nachricht wurde erfolgreich gesendet.";
            $formStatus = 'success'; // Erfolgsstatus setzen
            // Formularfelder zurücksetzen
            $name = '';
            $email = '';
            $message = '';
            $copyToSelf = false;
        } else {
            $errors[] = "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.";
            $formStatus = 'error'; // Fehlerstatus setzen
        }
    } else {
        $formStatus = 'error'; // Fehlerstatus setzen, wenn Validierung fehlschlägt
    }
}
?>