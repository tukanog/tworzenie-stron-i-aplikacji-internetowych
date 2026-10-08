<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zdrowy Bazarek</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <?php 
        $db = new mysqli('localhost', 'root', '', '5ti2_bazar')
    ?>
    <header>
        <h1>
            Zdrowy Bazarek
        </h1>
    </header>
    <nav>
        <?php 
            $kw1 = 'SELECT `nazwa`, `plik` FROM `towar` LIMIT 10';
            $owoce_kw1 = $db->query($kw1);
            while($obrazy = mysqli_fetch_assoc($owoce_kw1)) {
                $plik = $obrazy['plik'];
                $alt = $obrazy['nazwa'];

                echo "<img src=./img/$plik alt=$alt>";
            }
        ?>
    </nav>
    <main>
        <aside>
            <img src="./img/market.png" alt="bazarek">
        </aside>
        <section>
            <p>
                Wybierz owoc lub warzywo i podaj jego wagę:
            </p>
            <form action="index.php" method="post">
                <select name='id_towaru' required>
                    <?php
                        $kw2 = 'SELECT `id`, `nazwa` FROM `towar`';
                        $owoce_kw2 = $db->query($kw2);
                        while($towary = mysqli_fetch_assoc($owoce_kw2)) {
                            $id = $towary['id'];
                            $nazwa = $towary['nazwa'];

                            echo "<option value=$id>$nazwa</option>";
                        }
                    ?>
                </select>
                <input type="number" name="kg" required>
                <button>Zamów</button>
            </form>
            <?php
                if(isset($_POST['id_towaru'])) {
                    $id_towaru = $_POST['id_towaru'];
                    $kg = $_POST['kg'];
                    $kw3 = 'SELECT `rodzaj`, `nazwa`, `cena` FROM `towar` WHERE `id` = '.$id_towaru;
                    $owoce_kw3 = $db->query($kw3);
                    while($wybrane = mysqli_fetch_array($owoce_kw3)) {
                        $rodzaj = $wybrane['rodzaj'];
                        $nazwa = $wybrane['nazwa'];
                        $cena = $wybrane['cena'];
                        $wartosc = $cena * $kg;
                        echo "<p>$rodzaj $nazwa wartość: $wartosc zł</p>";
                        $kw4 = 'INSERT INTO `zamowienie` (`id_towar`, `id_sklep`, `liczba_kg`) VALUES ('.$id.', 2, '.$wartosc.')';
                        $owoce_kw4 = $db->query($kw4);
                    }
                }
            ?>
        </section>
        <?php 

        ?>
    </main>
    <footer>
        <p>
            Stronę opracował: 00000000000
        </p>
    </footer>
    <?php 
        $db->close()
    ?>
</body>
</html>