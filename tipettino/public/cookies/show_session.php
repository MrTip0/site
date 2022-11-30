<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>DATI</title>
</head>
<body>
    <table>
        <tr>
            <th>Dato</th>
            <th>Valore</th>
        </tr>
        <?php
        foreach ($_SESSION as $key => $val) {
            ?>
            <tr>
                <td><?php echo $key ?></td>
                <td><?php echo $val ?></td>
            </tr>
            <?php
        }
        ?>
    </table>
    <a href="destroy_session.php">Cancella dati</a>
</body>
</html>