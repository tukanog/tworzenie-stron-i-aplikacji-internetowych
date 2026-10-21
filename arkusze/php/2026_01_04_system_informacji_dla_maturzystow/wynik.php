<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styl.css">
    <title>Matura</title>
</head>
<body>
    <?php 
        $db = new mysqli('localhost', 'root', '', 'matura');
        $wynikKw2 = $db->query("SELECT DISTINCT(przedmiot) FROM `arkusz`;");
        $wynikKw3 = $db->query("SELECT MAX(rok), MIN(rok) FROM `arkusz`;");
        $wynikKw4 = $db->query("SELECT m.id, AVG(w.punkty) AS wynik FROM `wynik` w JOIN maturzysta m ON m.id = w.maturzysta_id GROUP BY m.id ORDER BY wynik DESC LIMIT 1;");
        $wynikKw4zm = $db->query("SELECT m.id, AVG(w.punkty) AS wynik FROM `wynik` w JOIN maturzysta m ON m.id = w.maturzysta_id GROUP BY m.id ORDER BY wynik ASC LIMIT 1;");
        $idKw5 = $_GET['id'];
        $wynikKw5 = $db->query("SELECT a.rok, a.sesja, a.przedmiot, w.punkty FROM `arkusz` a JOIN wynik w ON a.symbol = w.symbol WHERE w.maturzysta_id = $idKw5");
    ?>
    <header>
        <h1>System informacji dla maturzystów</h1>
    </header>
    
    <div id="container">
        <aside>
            <img src="ma.jpg" alt="Matura">
            <img src="tu.jpg" alt="Matura">
            <img src="ra.jpg" alt="Matura">
        </aside>

        <section id="s1">
            <h2><?= $_GET['imie'].' '.$_GET['nazwisko']; ?></h2>
            <?php while ($egzamin = $wynikKw5->fetch_assoc()) { ?>
                    <h3><?= $egzamin['rok'].' '.$egzamin['sesja'] ?></h3>
                    <p><?= $egzamin['przedmiot'].': '.$egzamin['punkty'] ?></p>
            <?php } ?>
        </section>

        <section id="s2">
            <div class="div">
                <h4>Przedmioty</h4>
                <?php 
                    while ($przedmiot = $wynikKw2->fetch_assoc()) {
                        echo $przedmiot['przedmiot'].' ';
                    } 
                ?>
            </div>
            <div class="div">
                <h4>Lata</h4>
                <?php 
                    $rekordKw3 = $wynikKw3->fetch_assoc();
                    echo $rekordKw3['MIN(rok)'].' - '.$rekordKw3['MAX(rok)'];
                ?>
            </div>
            <div class="div">
                <h4>Najlepszy wynik</h4>
                <?php 
                    $rekordKw4 = $wynikKw4->fetch_assoc();
                    echo $rekordKw4['wynik'].'%';
                ?>
            </div>
            <div class="div">
                <h4>Najgorszy wynik</h4>
                <?php 
                    $rekordKw4zm = $wynikKw4zm->fetch_assoc();
                    echo $rekordKw4zm['wynik'].'%';
                ?>
            </div>
        </section>
    </div>

    <footer>
        <p>Stronę wykonał: 23</p>
    </footer>

    <?php $db->close(); ?>
</body>
</html>