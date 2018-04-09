<?php
include_once 'includes/db_connect.php';
include_once 'includes/functions.php';

sec_session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>ReportCentre - Contact</title>

    <link href="libs/css/bootstrap/css/bootstrap.css" rel="stylesheet" media="screen">
    <link rel="stylesheet" href="src/style/main.css">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>

</head>
<?php if (login_check($mysqli) == false) : ?>
    <body>
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
        <div class="report">
            <b><p style="font-size: 0.7em">Instructiuni privind activarea contului:</p></b>
            <p style="font-size: 0.5em">Pentru a te putea loga si accesa panoul de control din care poti prelua cazuri,
                te rugam sa ne contactezi
                la adresa de email" <b>constandavalentin@gmail.com</b>.</p>
            <p style="font-size: 0.5em">Va rugam ca in mail-ul pe care ni-l trimiteti sa
                includeti un fisier de extensie .pdf cu contractul de munca scanat alaturi de o carte de identitate
                valabila. </p>
            <p style="font-size: 0.5em">Apasa <a href="index.php">aici</a> pentru a reveni pe pagina principala.</p>
            <br>
            <b><p style="font-size: 0.7em">Date de contact:</p></b>
            <p style="font-size: 0.5em"><b>Email:</b> constandavalentin@gmail.com </p>
            <p style="font-size: 0.5em"><b>Numere de telefon:</b> 0731524423 ( Digi )/ 0744917904 </p>
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
    </body>
<?php else : ?>
    <body>
    <div>
        <img src="logo.png" style="width: 10%; margin-left: 15%; margin-top: 2%">
    </div>
    <ul class="navigation">
        <li><a href="contact.php">Contact</a></li>
        <li><a href="content.php">Panou de control plangeri</a></li>
        <li><a href="includes/logout.php">Logout</a></li>
    </ul>
    <div class="content">
        <div class="report">
            <b><p style="font-size: 0.7em">Instructiuni privind activarea contului:</p></b>
            <p style="font-size: 0.5em">Pentru a te putea loga si accesa panoul de control din care poti prelua cazuri,
                te rugam sa ne contactezi
                la adresa de email" <b>constandavalentin@gmail.com</b>.</p>
            <p style="font-size: 0.5em">Va rugam ca in mail-ul pe care ni-l trimiteti sa
                includeti un fisier de extensie .pdf cu contractul de munca scanat alaturi de o carte de identitate
                valabila. </p>
            <p style="font-size: 0.5em">Apasa <a href="index.php">aici</a> pentru a reveni pe pagina principala.</p>
            <br>
            <b><p style="font-size: 0.7em">Date de contact:</p></b>
            <p style="font-size: 0.5em"><b>Email:</b> constandavalentin@gmail.com </p>
            <p style="font-size: 0.5em"><b>Numere de telefon:</b> 0731524423 ( Digi )/ 0744917904 </p>
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
    </body>
<?php endif; ?>
</html>
