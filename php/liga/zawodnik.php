<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $db = new mysqli('localhost', 'root', '', 'liga');

        if (isset($_GET['id'])) {
            $id = $_GET['id'];
        } else {
            die('Brak danych do wyświetlania, <a href="where.php">wróć do listy zawodników</a>');
        }

        $kwerenda = 'SELECT * FROM `zawodnicy` WHERE `id` = '.$id;
        $zawodnik = $db->query($kwerenda)->fetch_assoc();

        if (!$zawodnik) {
            die('Nie ma zawodnika o takim id, <a href="where.php">wróć do listy zawodników</a>');
        }
    ?>

    <h1><?= $zawodnik['id'] ?>. <?= $zawodnik['imie'].' '.$zawodnik['nazwisko']; ?></h1>
    <p>
        <b>Klub:</b> <?= $zawodnik['klub']; ?>
    </p>
    <p>
        <b>Pozycja:</b> <?= $zawodnik['pozycja']; ?>
    </p>
    <p>
        <a href="where.php">Wróć do listy zawodników</a>
    </p>
</body>
</html>