<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dodaj zawodnika</title>
</head>
<body>
    <?php 
        $db = new mysqli('localhost', 'root', '', 'liga2');

        $kwPobierzKluby = "SELECT * FROM `kluby`";
        $kwPobierzPozycje = "SELECT * FROM `pozycje`";

        $kluby = $db->query($kwPobierzKluby);
        $pozycje = $db->query($kwPobierzPozycje);

        if(isset($_POST['imie'])) {
            $imie = $_POST['imie'];
            $nazwisko = $_POST['nazwisko'];
            $klub = $_POST['klub_id'];
            $pozycja = $_POST['pozycja_id'];

            $kwerenda = "INSERT INTO `zawodnicy` (`imie`, `nazwisko`, `klub_id`, `pozycja_id`) VALUES ('$imie', '$nazwisko', '$klub', '$pozycja')"; // z cudzysłowiem możemy używać zmiennych PHP bez konkatenacji, ale takto w kwerendzie trzeba używać apostrofów
            $db->query($kwerenda);
        }

        if ($db->affected_rows === 1) {
            echo '<p>Dodano nowego zawodnika!</p>';
        }
    ?>

    <h1>Dodaj zawodnika</h1>
    <form action="select.php" method="post">
        <p>
            <label>
                Imię: 
                <input type="text" name="imie" required>
            </label>
        </p>
        <p>
            <label>
                Nazwisko: 
                <input type="text" name="nazwisko" required>
            </label>
        </p>
        <p>
            <label>
                Klub: 
                <select name="klub_id" required>
                    <option value=""></option>
                    <?php while($klub = $kluby->fetch_assoc()) { ?>
                        <option value="<?= $klub['id']; ?>"><?= $klub['nazwa']; ?></option>
                    <?php } ?>
                </select>
            </label>
        </p>
        <p>
            <label>
                Pozycja: 
                <select name="pozycja_id" required>
                    <option value=""></option>
                    <?php while($pozycja = $pozycje->fetch_assoc()) { ?>
                        <option value="<?= $pozycja['id']; ?>"><?= $pozycja['pozycja']; ?></option>
                    <?php } ?>
                </select>
            </label>
        </p>
        <button>Dodaj</button>
    </form>

    <?php $db->close(); ?>
</body>
</html>