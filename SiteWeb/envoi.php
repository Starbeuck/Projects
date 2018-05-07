<?php
$to = "keroullasolenn@gmail.com";
$name = $_POST['name'];
$from = $_POST['mail'];
$subject = $_POST['subject'];
$message = "Ce message a été envoyé par" . $from . " : " . $_POST['message'];

if(mail($to,$subject,$message,$name)) {
    echo '<script type="text/javascript">window.alert("Votre mail a bien été envoyé ! Vous allez être redirigé"); window.location.href="/"; </script>';
} else {
     echo '<script type="text/javascript">window.alert("Votre mail n\'a pas été envoyé; Veuillez recommencer s\'il vous plaît"); window.location.href="contact.html"; </script>';
}
?>