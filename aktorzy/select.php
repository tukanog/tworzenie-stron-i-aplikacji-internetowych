<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dodaj aktora</title>
</head>
<body>
    <?php 
        $db = new mysqli('localhost', 'root', '', 'kino');

        $kwPobierzAktorow = "SELECT * FROM `aktorzy`";
        $kwPobierzFilmy = "SELECT * FROM `filmy`";

        $aktorzy = $db->query($kwPobierzAktorow);
        $filmy = $db->query($kwPobierzFilmy);

        if(isset($_POST['id_aktora'])) {
            $id_aktora = $_POST['id_aktora'];
            $id_filmu = $_POST['id_filmu'];
            
            $kwerenda = "INSERT INTO `filmy_aktorzy` (`id_aktora`, `id_filmu`) VALUES ('$id_aktora', '$id_filmu')"; // z cudzysłowiem możemy używać zmiennych PHP bez konkatenacji, ale takto w kwerendzie trzeba używać apostrofów
            $db->query($kwerenda);
        }

        if ($db->affected_rows === 1) {
            echo '<p>Dodano aktora do filmu!</p>';
        }

    ?>

    <h1>Dodaj aktora do filmu</h1>
    <form action="select.php" method="post">
        <p>
            <label>Aktor: 
                <select name="id_aktora">
                    <option value=""></option>
                    <?php while($aktor = $aktorzy->fetch_assoc()) { ?>
                        <option value="<?= $aktor['id_aktora']; ?>"><?= $aktor['imie']." ".$aktor['nazwisko']; ?></option>
                    <?php } ?>
                </select>
            </label>
        </p>
        <p>
            <label>Film: 
                <select name="id_filmu">
                    <option value=""></option>
                    <?php while($film = $filmy->fetch_assoc()) { ?>
                        <option value="<?= $film['id_filmu']; ?>"><?= $film['tytul']; ?></option>
                    <?php } ?>
                </select>
            </label>
        </p>
        <button>Dodaj</button>
    </form>

    <?php $db->close() ?>
</body>
</html>