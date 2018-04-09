<?php
include_once 'includes/register.inc.php';
include_once 'includes/functions.php';

sec_session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">

    <title>ReportCentre - Pentru o societate mai sigura</title>

    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/JSXTransformer.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/less.js/1.7.5/less.min.js"></script>


    <link href="libs/css/bootstrap/css/bootstrap.css" rel="stylesheet" media="screen">
    <link rel="stylesheet" href="src/style/main.css">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>

</head>
<?php if (login_check($mysqli) == true) : ?>
    <?php
    header('Location: content.php');
    ?>
<?php else : ?>
<body>
    <div>
    <?php
    include 'config/core.php';
    echo "<div id='app'></div>";
    ?>
    </div>
    <script type="text/javascript" src="./build/index.js"></script>
    <script src="libs/js/jquery.js"></script>
    <script src="libs/css/bootstrap/js/bootstrap.min.js"></script>
</body>
<?php endif; ?>
</html>
