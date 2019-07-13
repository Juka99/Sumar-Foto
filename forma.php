<?php

if (isset($_POST['submit'])) {
$name = $_POST['full'];
$mailFrom = $_POST['mejl'];
$message = $_POST['area'];
$subject = 'Poruka !';

$mailTo = "yukajunior007@gmail.com";
$headers = "From: ".$mailFrom;
$txt = "Mejl od pickice: ".$mailFrom. "\n\nIme pickice: " .$name."\n\nPoruka od pickice: ".$message;

mail($mailTo, $subject, $txt, $headers);
header("Location: index.php?mailsend");
}

/*if(isset($_POST['submit'])){
    $name = $_POST['full'];
    $email = $_POST['mejl'];
    $message = $_POST['area'];

    $mailto = "yukajunior007@gmail.com";
    $headers = "From: ".$email;
    $txt = "You have received an e-mail from: " .$name.".\n\n".$message;


    mail($mailto, $txt, $headers);
    header("Location: http://www.darpetdev.com/?mailsent%22");

} else {
    echo "Something went wrong";
}*/

