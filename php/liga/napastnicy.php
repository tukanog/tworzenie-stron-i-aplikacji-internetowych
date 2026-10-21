<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liga</title>
    <style>table,td { border: 1px solid black }</style>
</head>
<body>
    <?php
        $db = new mysqli('localhost', 'root', '', 'liga');
        $kwerenda = 'SELECT * FROM `zawodnicy` WHERE `pozycja` LIKE "napastnik"';
        $zawodnicy = $db->query($kwerenda);
    ?>

    <h1>Liga</h1>
    <h2>Napastnicy</h2>
    <p>Napastników ogółem: <?php echo $zawodnicy->num_rows; ?></p>
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
            <tr>
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

    <?php
        $db->close();
    ?>
</body>
</html>