<?php
  session_start();
  //echo $_SESSION['autenticado'];
?>

<html>
  <head>
    <meta charset="utf-8" />
    <title>App Help Desk</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <style>
      .card-login {
        padding: 30px 0 0 0;
        width: 350px;
        margin: 0 auto;
      }
    </style>
  </head>

  <body>

      <?php
       include_once("navbar.php");
      ?>

    <div class="container">    
      <div class="row">

        <div class="card-login">
          <div class="card">
            <div class="card-header">
              Login
            </div>
            <div class="card-body">
              <form action="valida_login.php" method="POST">
                <div class="form-group">
                  <input name="email" type="email" class="form-control" placeholder="E-mail">
                </div>
                <div class="form-group">
                  <input name="password" type="password" class="form-control" placeholder="Senha">
                </div>

                
                <?php if (isset($_GET['login']) && $_GET['login']  == 'erro_login'){ ?>
                  <div class="text-danger">
                    Usuário o usenha inválido
                  </div>                   
                <?php } ?>

                <?php if (isset($_GET['login']) && $_GET['login']  == 'erro_login2'){ ?>
                  <div class="text-danger">
                   Página protegida. Faça seu login.
                  </div>                   
                <?php } ?>


                <button class="btn btn-lg btn-info btn-block" type="submit">Entrar</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  </body>
</html>