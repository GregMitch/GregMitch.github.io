<?php
 $path = 'submits.txt';
 if (isset($_POST['firstname']) && isset($_POST['lastname'])) {
    $fh = fopen($path,"a+");
    $string = $_POST['firstname'].' - '.$_POST['lastname'];
    fwrite($fh,$string); // Write information to the file
    fclose($fh); // Close the file
 }
?>
