<?php 
//this is the wrong method which was causing the error= $email=$_POST<'email'>;
$email= filter_input(INPUT_POST, 'email');
$name= filter_input(INPUT_POST, 'name');
$data=$name.",".
    $email; 
$file="file.csv"; 
file_put_contents($file, $data . PHP_EOL, FILE_APPEND); 
print "<h1 align=center>Thank you for submitting your email address!</h1>"; ?> 
<html> 
    <head> 
        <title>ThankYou Page</title> 
    </head> 
    <body> 
        <h1><a href="form.html">GO BACK</a> </h1> 
    </body> 
</html>