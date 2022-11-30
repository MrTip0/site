<?php
session_start();
function is_set($var) {
    return !empty($_GET[$var]);
}

$response_code = 200;
$msg = '';
$begin_page = 'Benvenuto nuovo utente';

if (is_set("nome") && is_set("cognome") && is_set("nascita") && is_set("indirizzo") && is_set("cf") && is_set("sesso") && is_set("hobby")) {
    if (strlen($_GET["cf"]) != 16) {
        $msg = 'Il codice fiscale deve essere lungo 16 caratteri';
        $response_code = 400;
    } else {
        $msg = 'Buongiorno sig.' . ($_GET["sesso"] == "femmina"?"ra":"") . " " . $_GET["cognome"] . " " . $_GET["nome"] . " lei abita a " . $_GET["indirizzo"] . " e le piace praticare " . $_GET["hobby"];
        setcookie('nome', $_GET["nome"], time() + 60 * 60 * 24 * 30);
        setcookie('cognome', $_GET["cognome"], time() + 60 * 60 * 24 * 30);
        $_SESSION["nome"] = $_GET["nome"];
        $_SESSION["cognome"] = $_GET["cognome"];
        $_SESSION["nascita"] = $_GET["nascita"];
        $_SESSION["indirizzo"] = $_GET["indirizzo"];
        $_SESSION["cf"] = $_GET["cf"];
        $_SESSION["sesso"] = $_GET["sesso"];
        $_SESSION["hobby"] = $_GET["hobby"];
    }
} elseif (!empty($_COOKIE["nome"]) && !empty($_COOKIE["cognome"])) {
    $begin_page = 'Bentornato ' . $_COOKIE["nome"] . ' ' . $_COOKIE["cognome"];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title><?php echo $msg == "" ? 'form' : $msg ?></title>
</head>
<body>
    <?php
        if ($msg == '') {
            echo $begin_page;
            ?>
            <form action="" method="get">
                <label for="nome">Nome</label>
                <input type="text" name="nome" id="nome" placeholder="mario">
                <label for="cognome">Cognome</label>
                <input type="text" name="cognome" id="cognome" placeholder="rossi">
                <label for="nascita">Nascita</label>
                <input type="date" name="nascita" id="nascita">
                <label for="nome">Indirizzo</label>
                <input type="text" name="indirizzo" id="indirizzo" placeholder="milano">
                <label for="cf">Codice Fiscale</label>
                <input type="text" name="cf" id="cf">
                <input type="radio" name="sesso" id="maschio" value="maschio">
                <label for="maschio">Maschio</label>
                <input type="radio" name="sesso" id="femmina" value="femmina">
                <label for="femmina">Femmina</label>
                <input type="radio" name="sesso" id="nbin" value="nbin">
                <label for="nbin">Non binario</label>
                <label for="hobby">Hobby preferito</label>
                <input type="text" name="hobby" id="hobby">
                <input type="submit" value="Invia">
            </form>
            <?php
            if (!empty($_SESSION["nome"])) {
                echo '<a href="show_session.php">Mostra dati</a>';
            }
        } else {
            echo "<p>$msg</p>";
        }
    ?>
</body>
</html>
<?php
http_response_code($response_code);