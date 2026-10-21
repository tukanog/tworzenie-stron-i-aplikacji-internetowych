<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liga</title>
</head>
<body>
    <?php
        $db = new mysqli('localhost', 'root', '', 'liga');

        $where = '';

        if (isset($_GET['nazwisko'])) {
            $where = ' WHERE `nazwisko` LIKE "%'.$_GET['nazwisko'].'%" ';
        }

        $kwerenda = 'SELECT * FROM `zawodnicy`'.$where.'ORDER BY `nazwisko`'; 
        $zawodnicy = $db->query($kwerenda);
    ?>

    <h1>Liga</h1>
    <h2>Wszyscy zawodnicy alfabetycznie po nazwisku</h2>
    <p>Zawodnicy ogółem: <?php echo $zawodnicy->num_rows; ?></p>
    <form action="" method="get">
        <label>
            Wpisz nazwisko: <input type="text" name="nazwisko">
        </label>
        <button>Wybierz</button>
    </form>
    
    <?php 
        if (isset($_GET['nazwisko'])) {
    ?>
        <p> 
            <a href="alfabetycznie.php">Wróć do wszystkich</a> 
        </p>
    <?php
        }
    ?>

    <ol>
        <?php 
            while ($zawodnik = $zawodnicy->fetch_assoc()) {
        ?>
            <li> <?= $zawodnik['id']; ?> <?= $zawodnik['imie']; ?> <?= $zawodnik['nazwisko']; ?> <?= $zawodnik['klub']; ?> <?= $zawodnik['pozycja']; ?> </li>
        <?php
            }
        ?>
    </ol>

    <?php
        $db->close();
    ?>
</body>
</html>