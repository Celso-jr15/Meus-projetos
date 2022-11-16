<?php
  session_start();


    $usuario_autenticado = false;
    $usuario_id = null;
    $usuario_perfil_id = null;

    $perfis = array(1 => 'Administrativo', 2 => 'Usuário');

    $usuarios_app = array(
        array('id' => '1', 'email' => '1@gmail.com', 'password' => '123', 'perfil_id'=>'1'),
        array('id' => '2', 'email' => '2@gmail.com', 'password' => '456', 'perfil_id'=>'2'),
        array('id' => '3', 'email' => '3@gmail.com', 'password' => '789', 'perfil_id'=>'2'),
    );


    foreach($usuarios_app as $user) {
        if($user['email'] == $_POST['email'] && $user['password'] == $_POST['password'] ){
            $usuario_autenticado = true;
            $usuario_id = $user['id'];
            $usuario_perfil_id = $user['perfil_id'];
        }   
    }

    if($usuario_autenticado){
        echo 'Usuário Autenticado';
        $_SESSION['autenticado'] = 'SIM';
        $_SESSION['id'] = $usuario_id;
        $_SESSION['perfil_id'] = $usuario_perfil_id;
        header('location: home.php');
    }else {
        $_SESSION['autenticado'] = 'NAO';
        header('location: index.php?login=erro_login');
       // echo "Usuário NÃO Autenticado";
    }

    //print_r($_POST);




?>