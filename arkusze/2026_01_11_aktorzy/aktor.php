<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styl.css">
    <title>Informacje o aktorze | KinoTEKA</title>
</head>
<body>
    <?php 
        $id = '';

        if (isset($_GET['id'])) {
            $id = ' WHERE `a`.`id_aktora` = '.$_GET['id'].' ';
        }

        $db = new mysqli('localhost', 'root', '', 'kino');
        $aktorzy = $db->query('SELECT `a`.`id_aktora`, `a`.`imie`, `a`.`nazwisko`, `a`.`plik_awatara`, COUNT(`f`.`id_filmu`) AS `liczba_filmow` FROM `filmy` `f` JOIN `filmy_aktorzy` `fa` ON `f`.`id_filmu` = `fa`.`id_filmu` RIGHT JOIN `aktorzy` `a` ON `a`.`id_aktora` = `fa`.`id_aktora`'.$id.'GROUP BY `a`.`id_aktora`, `a`.`imie`, `a`.`nazwisko`');
        $aktor = $aktorzy->fetch_assoc();
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
        <div id="aktorzy">
            <div class="aktoraktor">
                <img src="img/<?= $aktor['plik_awatara']?>" alt="<?= $aktor['imie'].' '.$aktor['nazwisko'] ?>" title="<?= $aktor['imie'].' '.$aktor['nazwisko'] ?>">
                <h1><?= $aktor['imie']; echo " "; echo $aktor['nazwisko'] ?></h1>
            </div>
        </div>
        <?php if ($aktor['liczba_filmow'] == 0) {?>
            <p><?= $aktor['imie'] ?> nie znajduje się na listach obsady znanych nam produkcji.</p>
        <?php } else { ?>
            <p><?= $aktor['imie'] ?> znajduje się na listach obsady <?= $aktor['liczba_filmow'] ?> znanych nam produkcji</p>
        <?php } ?>
    </main>

    <footer>
        <p>Autor: TUKANGOSCIU</p>
    </footer>

    <?php
        $db->close();
    ?>
</body>
</html>