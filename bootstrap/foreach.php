<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"> 
    <title>Bootstrap</title>
</head>
<body>
    <h1>Usando o Foreach</h1>

    <?php  echo "Olá"; ?>

    <?php
        $funcionadios = array('Celso', 'João', 'Rosana', 'Murilo');

        echo '<pre>';
        print_r($funcionadios);
        echo '</pre>';

        foreach($funcionadios as $idx => $nome_funcionario){
            echo "ID $idx - $nome_funcionario <br/>";
        }

    ?>


</body>
</html>