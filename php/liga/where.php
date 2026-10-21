<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liga</title>
    <style>table,td { border: 1px solid black } .tr0 { background-color: grey } </style>
</head>
<body>
    <?php
        $db = new mysqli('localhost', 'root', '', 'liga'); // połączenie z bazą

        $where = '';
        $order = '';
        $id = '';

        if (isset($_GET['id'])) {
            $id = ' WHERE `id` = '.$_GET['id']; // kropka to CONCAT (konkatenacja)
        }

        if (isset($_GET['pozycja'])) {
            $where = ' WHERE `pozycja` = "'.$_GET['pozycja'].'"'; // kropka to CONCAT (konkatenacja)
        }

        if (isset($_GET['posortuj'])) {
            $order = ' ORDER BY `nazwisko`'; // kropka to CONCAT (konkatenacja)
        }

        $kwerenda = 'SELECT * FROM `zawodnicy`'.$where.$order.$id;
        $zawodnicy = $db->query($kwerenda); // wykonanie kwerendy i zapisanie jej wyniku do zmiennej
        // var_dump($zawodnicy);
    ?>

    <h1>Liga</h1>
    <h2>Wszyscy zawodnicy</h2>
    <p>Zawodnicy ogółem: <?php echo $zawodnicy->num_rows; ?></p>
    <p>
        Wybierz: <a href="where.php">wszyscy</a>, 
        <a href="where.php?pozycja=bramkarz">bramkarz</a>, 
        <a href="where.php?pozycja=obrońca">obrońca</a>, 
        <a href="where.php?pozycja=pomocnik">pomocnik</a>,
        <a href="where.php?pozycja=napastnik">napastnik</a>
    </p>
    <p>
        <a href="where.php?posortuj=true">Posortuj</a>
    </p>
    <p>
        <form action="zawodnik.php" method="get">
            <label>
                Wpisz id zawodnika: <input type="number" name="id">
            </label>
            <button>Wybierz</button>
        </form>
    </p>
    <table>
        <tr>
            <th>Id</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Klub</th>
            <th>Pozycja</th>
        </tr>
        <?php 
            if ($zawodnicy->num_rows == 0) { // num_rows to liczba wierszy
                echo '<tr><td colspan="5">Brak danych do wyświetlenia</td></tr>';
            } else {
                while($zawodnik = $zawodnicy->fetch_assoc()) {
        ?>        
            <tr class='tr<?php echo $zawodnik['id'] % 2?>'>
                <td>
                    <a href="zawodnik.php?id=<?= $zawodnik['id']; ?>">
                        <?= $zawodnik['id']; ?>
                    </a>
                </td>
                <td><?= $zawodnik['imie']; ?></td>
                <td><?= $zawodnik['nazwisko']; ?></td>
                <td><?= $zawodnik['klub']; ?></td>
                <td><?= $zawodnik['pozycja']; ?></td>
            </tr>
        <?php
                } 
            }
        ?>
    </table>

    <?php
        $db->close(); // zamknięcie połączenia 
    ?>
</body>
</html>