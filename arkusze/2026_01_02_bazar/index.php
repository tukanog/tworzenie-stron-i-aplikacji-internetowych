<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styl.css">
    <title>Zdrowy bazarek</title>
</head>
<body>
    <?php 
        $db = new mysqli('localhost', 'root', '', 'bazar');

        $zapytanie1 = "SELECT `nazwa`, `plik` FROM `towar` LIMIT 10;";
        $zapytanie2 = "SELECT `id`, `nazwa` FROM `towar`;";

        $towary1 = $db->query($zapytanie1);
        $towary2 = $db->query($zapytanie2);

        if(isset($_POST['id'])) {
            $id_towar = $_POST['id'];
            $liczba_kg = $_POST['waga'];
            $zapytanie4 = "INSERT INTO `zamowienie` (`id_towar`, `id_sklep`, `liczba_kg`) VALUES ('$id_towar', '2', '$liczba_kg');";
            $db->query($zapytanie4);
        }
    ?>
    <header>
        <h1>Zdrowy bazarek</h1>
    </header>
    
    <nav>
        <?php while ($towar1 = $towary1->fetch_assoc()) { ?>
            <img src="<?= $towar1['plik']; ?>" alt="<?= $towar1['nazwa']; ?>">
        <?php } ?>
    </nav>

    <main>
        <div>
            <aside>
                <img src="market.png" alt="bazarek">
            </aside>
            <section>
                <p>Wybierz owoc lub warzywo i podaj jego wagę</p>
                <form action="index.php" method="post">
                    <select name="id">
                        <?php while ($towar2 = $towary2->fetch_assoc()) { ?>
                            <option value="<?= $towar2['id']; ?>"><?= $towar2['nazwa']; ?></option>
                        <?php } ?>
                    </select>

                    <input type="number" name="waga">

                    <button>Zamów</button>
                </form>
                <?php 
                    if(isset($_POST['id'])) {
                        $id = $_POST['id'];
                        
                        $zapytanie3 = "SELECT `rodzaj`, `nazwa`, `cena` FROM `towar` WHERE `id` = $id";
                        $towar3 = $db->query($zapytanie3);
                        $wybrane = $towar3->fetch_assoc();
                        $waga = $_POST['waga'];
                        $wartosc = $wybrane['cena'] * $waga;
                        $rodzaj = $wybrane['rodzaj'];
                        $nazwa = $wybrane['nazwa'];
                        echo "<p>$rodzaj $nazwa wartość: $wartosc zł</p>";
                        
                    }
                ?>
            </section>
        </div>
    </main>

    <footer>
        <p>Stronę opracował: 23</p>
    </footer>

    <?php $db->close(); ?>
</body>
</html>