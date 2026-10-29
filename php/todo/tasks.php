<?php 
    session_start();

    if(empty($_SESSION)) {
        header('Location: index.php');
    }
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista Zadań ToDo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container todo-container">
        <div class="header-user">
            <!-- Tutaj w PHP wyrenderujesz np. $_SESSION['username'] -->
            <span>Zalogowany jako: <strong>Jan Kowalski</strong></span>
            <a href="logout.php" class="logout-btn">Wyloguj się</a>
        </div>

        <h2>Dodaj nowe zadanie</h2>

        <!-- Formularz dodawania zadania (Create) -->
        <form action="add_task.php" method="POST">
            <div class="form-group">
                <label for="task_name">Nazwa zadania:</label>
                <input type="text" id="task_name" name="task_name" placeholder="np. Kazać wysprzątać pokój" required>
            </div>

            <div class="form-group">
                <label for="category">Kategoria:</label>
                <select id="category" name="category" required>
                    <option value="praca">Praca</option>
                    <option value="rodzina">Rodzina</option>
                    <option value="hobby">Hobby</option>
                </select>
            </div>

            <button type="submit">Dodaj zadanie</button>
        </form>

        <h2>Twoje Zadania</h2>

        <!-- Tabela do wyświetlania pobranych zadań (Read / Delete) -->
        <table class="task-table">
            <thead>
                <tr>
                    <th>Zadanie</th>
                    <th>Kategoria</th>
                    <th>Akcja</th>
                </tr>
            </thead>
            <tbody>
                <!-- Przykładowe wiersze statyczne (w PHP zastąpisz je pętlą foreach/while) -->
                <tr>
                    <td>Przygotować raport dla szefa</td>
                    <td><span class="badge badge-praca">Praca</span></td>
                    <td><a href="delete_task.php?id=1" class="action-btn">Usuń</a></td>
                </tr>
                <tr>
                    <td>Zrobić zakupy spożywcze</td>
                    <td><span class="badge badge-rodzina">Rodzina</span></td>
                    <td><a href="delete_task.php?id=2" class="action-btn">Usuń</a></td>
                </tr>
                <tr>
                    <td>Trening na siłowni</td>
                    <td><span class="badge badge-hobby">Hobby</span></td>
                    <td><a href="delete_task.php?id=3" class="action-btn">Usuń</a></td>
                </tr>
            </tbody>
        </table>
    </div>

</body>
</html>