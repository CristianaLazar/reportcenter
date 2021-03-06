<?php
include_once 'includes/register.inc.php';
include_once 'includes/functions.php';

sec_session_start();

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>ReportCentre - Inregistrare</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script type="text/JavaScript" src="js/sha512.js"></script>
    <script type="text/JavaScript" src="js/forms.js"></script>
    <link rel="stylesheet" href="./src/style/main.css"/>
</head>
<body>
<?php
if (!empty($error_msg)) {
    echo $error_msg;
}
?>
<?php if (login_check($mysqli) == true) : ?>
    <?php
    header('Location: index.php');
    ?>
<?php else : ?>

    <div>
        <img src="logo.png" style="width: 10%; margin-left: 15%; margin-top: 2%">
    </div>
    <ul class="navigation">
        <li><a href="index.php">Acasa</a></li>
        <li><a href="contact.php">Contact</a></li>
        <li><a href="login.php">Login</a></li>
        <li><a href="register.php">Inregistrare</a></li>
    </ul>
    <div class="content">
        <div class="login_div">
            <div class="form">

                <form class="login-form" method="post" name="registration_form" action="<?php echo esc_url($_SERVER['PHP_SELF']); ?>">
                    <input type="text" placeholder="Nume de utilizator"  name='username' id='username' required/>
                    <input type="password" name="password" id="password" placeholder="Parola" required/>
                    <input type="password" name="confirmpwd" id="confirmpwd" placeholder="Confirma parola" required/>
                    <input type="text" name="email" id="email" placeholder="Email" required/>
                    <input type="text" placeholder="Nume complet" name="name" id="name" required/>
                    <input type="text" placeholder="CNP" name="cnp" id="cnp" required/>
                    <input type="text" placeholder="Serie Buletin" name="serie" id="serie" required/>
                    <input type="text" placeholder="Numar Buletin" name="number" id="number" required/>
                    <input type="text" placeholder="Adresa completa sectie + numarul sectiei" name="workplace_info" id="workplace_info" required/>
                    <input class="button" type="submit"
                           value="Inregistrare"
                           onclick="return regformhash(this.form,
                                   this.form.username,
                                   this.form.email,
                                   this.form.password,
                                   this.form.confirmpwd,
                                   this.form.name,
                                   this.form.cnp,
                                   this.form.serie,
                                   this.form.number,
                                   this.form.workplace_info);"/>
                    <p class="message">Aveti deja cont? <a href="login.php">Logati-va</a></p>
                </form>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="midle_footer">
            <div class="left_footer">
                <div class="footer_nav_adr" style="text-align: left;">
                    <p style="font-size:1.3em;">Contact</p>
                    <ul class="adressList">
                        <li style="margin-bottom:5px; width: 98%">Adresa: Piaţa Revoluţiei nr.1
                            A, sector 1,Bucureşti
                        </li>
                        <li style="margin-bottom:5px; width: 98%">
                            Telefon:021/264.87.05
                        </li>
                        <li style="margin-bottom:5px; width: 98%">
                            Fax: 021/264.86.77
                        </li>
                    </ul>
                </div>
                <div class="footer_nav_adr" style="margin-top:7px; width:300px; text-align:left">Social media
                    <a href="https://twitter.com/maigov" target="_blank">
                        <img src="icon-twitter.png"
                             style="margin-left: 5px;margin-right: 5px;text-align:left;width: 30px;height: 30px;"
                             title="Pagina MAI pe twitter"></a>
                    <a href="https://www.facebook.com/pages/Ministerul-Afacerilor-Interne-Romania/438338142903249"
                       target="_blank"><img src="icon-facebook.png"
                                            title="Vizitaţi pagina de facebook"
                                            style="text-align: left;width: 30px;height: 30px;"></a>
                    <a href="https://www.instagram.com/ministerul_afacerilor_interne/" target="_blank"><img
                            src="icon-google.png"
                            style="margin-left: 5px;margin-right: 5px;text-align:left;width: 30px;height: 30px;"
                            title="Vizitaţi pagina de Instagram"/></a>
                </div>
            </div>
            <div class="left_footer_link">
                <div class="footer_nav_2" style="text-align:left">
                    <p style="font-size:1.3em">Legaturi utile</p>
                    <ul style="text-align:left" class="anchorIdentifier">
                        <li><a href="http://www.presidency.ro/" target="_blank" style={{}}>Preşedintele României</a>
                        </li>
                        <li><a href="http://www.gov.ro/" target="_blank">Guvernul României</a></li>
                        <li><a href="http://www.cnpromania.ro/" target="_blank">Corpul Naţional al
                                Poliţiştilor</a></li>
                        <li><a href="https://www.europol.europa.eu/" target="_blank">Europol</a></li>
                        <li><a href="http://www.interpol.int/" target="_blank">Interpol</a></li>
                        <li><a href="http://www.cepol.europa.eu/" target="_blank">Cepol</a></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>
</body>
</html>
