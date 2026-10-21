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
        $kwerenda = 'SELECT * FROM `zawodnicy`';
        $zawodnicy = $db->query($kwerenda); // wykonanie kwerendy i zapisanie jej wyniku do zmiennej
        var_dump($zawodnicy);
    ?>

    <h1>Liga</h1>
    <h2>Wszyscy zawodnicy</h2>
    <p>Zawodnicy ogółem: <?php echo $zawodnicy->num_rows; ?></p>

    <table>
        <tr>
            <th>Id</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Klub</th>
            <th>Pozycja</th>
        </tr>
        <?php 
            while($zawodnik = $zawodnicy->fetch_assoc()) {
        ?>        
            <tr class='tr<?php echo $zawodnik['id'] % 2?>'>
                <td><?php echo $zawodnik['id']; ?></td>
                <td><?= $zawodnik['imie']; ?></td>
                <td><?= $zawodnik['nazwisko']; ?></td>
                <td><?= $zawodnik['klub']; ?></td>
                <td><?= $zawodnik['pozycja']; ?></td>
            </tr>
        <?php
            }
        ?>
    </table>

    <?php var_dump($zawodnicy->fetch_assoc()); ?>

    <?php
        $db->close(); // zamknięcie połączenia 
    ?>





    <?php ?>
</body>
</html>