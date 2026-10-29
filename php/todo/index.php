<?php
    // hasło: alamakota!
    session_start(); // rozpoczęcie sesji

    $db = new mysqli('localhost', 'root', '', 'todo_ti222');

    if(isset($_POST['username'], $_POST['password'])) {
        $username = $_POST['username'];
        $password = sha1($_POST['password']);

        $kwLogin = "SELECT * FROM `users` WHERE `username` LIKE '$username' AND `password` LIKE '$password';";

        $user = $db->query($kwLogin);

        if ($user->num_rows == 1) {
            $user = $user->fetch_assoc();
            $_SESSION['id'] = $user['id']; // $_SESSION to tablica globalna do sesji
            $_SESSION['username'] = $user['username'];
            $_SESSION['fullname'] = $user['fullname'];
            header('Location: tasks.php'); // wysyła do innej strony
        } else { $komunikat = 'Niepoprawne dane'; }
    }

    if(isset($_SESSION['id'])) {
        header('Location: tasks.php');
    }

?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logowanie - Lista ToDo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h2>Zaloguj się</h2>
        
        <!-- Miejsce na ewentualny komunikat o błędziheader('Location: tasks.php');e z PHP -->
        <p style="color: red;">
            <?php if(isset($komunikat)) { echo $komunikat; }; ?>
        </p>

        <form action="index.php" method="POST">
            <div class="form-group">
                <label for="username">Nazwa użytkownika:</label>
                <input type="text" id="username" name="username" required>
            </div>

            <div class="form-group">
                <label for="password">Hasło:</label>
                <input type="password" id="password" name="password" required>
            </div>

            <button type="submit">Zaloguj</button>
        </form>
    </div>

    <?php $db->close(); ?>
</body>
</html>