<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"> 
    <title>Bootstrap</title>
</head>
<body>
    <h1>Números da sorte da Mega</h1>

    <?php  echo "Olá"; ?>

    <?php
        $numeros = array();
        $rum = rand(1,60);
       
        while(count($numeros) <= 5) {
            $num = rand(1,60);
            if(!in_array($num, $numeros)){
                $numeros[] = $num;
            }
        }

        print_r($numeros);
    ?>


</body>
</html>