<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dodaj zawodnika</title>
</head>
<body>
    <?php 
        $db = new mysqli('localhost', 'root', '', 'liga');

        // $kwerendaDodajZawodnika
        // $kwerenda = 'INSERT INTO `zawodnicy` (`imie`, `nazwisko`, `klub`, `pozycja`) VALUES ("Karol", "Testowy", "FC Siekiera-Motyka", "napastnik")';

        if(isset($_POST['imie'])) {
            $imie = $_POST['imie'];
            $nazwisko = $_POST['nazwisko'];
            $klub = $_POST['klub'];
            $pozycja = $_POST['pozycja'];

            // $kwerenda = 'INSERT INTO `zawodnicy` (`imie`, `nazwisko`, `klub`, `pozycja`) VALUES ("'.$imie.'", "'
            $kwerenda = "INSERT INTO `zawodnicy` (`imie`, `nazwisko`, `klub`, `pozycja`) VALUES ('$imie', '$nazwisko', '$klub', '$pozycja')"; // z cudzysłowiem możemy używać zmiennych PHP bez konkatenacji, ale takto w kwerendzie trzeba używać apostrofów
            $db->query($kwerenda);
        }

        // $wynik = $db->query($kwerenda);
        if ($db->affected_rows === 1) {
            echo '<p>Dodano nowego zawodnika!</p>';
        }
    ?>

    <form action="insert.php" method="post">
        <p>
            <label>Imię: <input type="text" name="imie" required></label>
        </p>
        <p>
            <label>Nazwisko: <input type="text" name="nazwisko" required></label>
        </p>
        <p>
            <label>Klub: <input type="text" name="klub" required></label>
        </p>
        <p>
            <label>Pozycja: 
                <select name="pozycja" required>
                    <option value=""></option>
                    <option value="bramkarz">bramkarz</option>
                    <option value="obrońca">obrońca</option>
                    <option value="pomocnik">pomocnik</option>
                    <option value="napastnik">napastnik</option>
                </select>
            </label>
        </p>
        <button>Dodaj</button>
    </form>

    <?php 
        $db->close();
    ?>
</body>
</html>