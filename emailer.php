<?php
$headers = array(
    'From' => $_POST["mail"]
);
$subject = ($_POST["name"] . " has sent you a message");
$result = mail(
    "tipettino@altervista.org",
    $subject,
    ($_POST["message"]),
    $headers
);
?>
<?php
    if ($result) {
        echo 'success';
    } else {
        echo 'failure';
    };
?>