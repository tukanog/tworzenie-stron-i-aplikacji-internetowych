<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styl.css">
    <title>Lista aktorów | KinoTEKA</title>
</head>
<body>
    <?php 
        $db = new mysqli('localhost', 'root', '', 'kino');
        $aktorzy = $db->query('SELECT * FROM `aktorzy` ORDER BY `nazwisko`, `imie`');
    ?>
    <div id="header">
        <header>
            <h2>
                <a href="index.php">KinoTEKA</a>
            </h2>
        </header>
        <header>
            <p>
                <strong>
                    <i>W naszej bazie znajdują się najlepsi aktorzy</i>
                </strong>
            </p>
        </header>
    </div>

    <main>
        <h1>Najlepsi aktorzy tylko w naszym kinie</h1>
        <div id="aktorzy">
            <?php 
                while ($aktor = $aktorzy->fetch_assoc()) {
            ?>      <a href="aktor.php?id=<?= $aktor['id_aktora']?>">
                        <div class="aktorindex">
                            <img src="img/<?= $aktor['plik_awatara']?>" alt="<?= $aktor['imie'].' '.$aktor['nazwisko'] ?>" title="<?= $aktor['imie'].' '.$aktor['nazwisko'] ?>">
                            <p><?= $aktor['imie'].' '.$aktor['nazwisko'] ?></p>
                        </div>
                    </a>
            <?php
                }
            ?>
        </div>
    </main>
    <footer>
        <p>
            Autor: <strong>TUKANGOSCIU</strong>
        </p>
    </footer>
    <?php
        $db->close();
    ?>
</body>
</html>