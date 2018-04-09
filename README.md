#Report Centre - Documentatie


<i><h2>Scopul proiectului ( Tema )</h2></i>

<p>Report Centre este un website care vine in ajutorul serviciului de urgente 112 si a Politiei Romane prin punerea la dispozitie a unei platforme prin care oricine poate depune o plangere sau sa raporteze diferite delicvente Politiei Romane fara a apela la serviciul de urgente sau a se deplasa pana la cea mai apropiata sectie.</p>
<b><p>In cazul in care este vorba de o urgenta, site-ul nu iti va permite sa postezi reclamatia, ci iti va indica sa suni imediat la 112.</p></b>
<p>Datorita faptului ca oricine poate adauga o plangere prin acest serviciu, ne luam dreptul ne a le cere utilizatorilor date personale (cnp,serie,numar buletin) lucru ce ne va ajuta in cazul in care exista abuzuri.</p>
<p>Pentru a adauga o plangere trebuie sa accesati pagina principala a website-ului (index.php) unde imediat veti putea observa imediat butonul "Adaugati o reclamatie", urmand ca dumneavoastra sa completati formularul si gata!</p>

<b><p>Site-ul poate fi utilizat si de pe telefon/tableta, oferind un design responsive si scalabil dupa cerintele telefonului.</p></b>
<i><h2>Rulare locala</h2></i>

<p>Pentru a rula website-ul aveti nevoie de un server php configurat care sa poata rula fisiere cu extensia .php . De asemenea, aveti nevoie de bazele de date MySQL pentru a putea importa baza de date pe care noi o oferim pentru testare.</p>
<b><p>Atentie! Site-ul nu va rula fara un browser care suporta nu JavaScript. Ne pare rau insa accesibilitatea si dezvoltarea unei interfete usor de utilizat necesita JavaScript.</p></b>

<i><h2>Instalare locala</h2></i>

<h3>Numai daca intentionati sa modificati fisierele .js (React)</h3>

<p>Pentru a putea utiliza proiectul in starea aceasta si pentru a il modifica, aveti nevoie de npm (Ubuntu 16.04.x - <i>recomandat</i>: <b>https://nodejs.org/en/</b> sau Windows:<b>http://blog.teamtreehouse.com/install-node-js-npm-windows</b>).

<p>In folderul root utilizati comanda <code>npm install</code></p> pentru a instala toate pachetele.

<p>Daca ati facut toate cele indicate, acum puteti modifica fisierele javascript ce tin de ReactJS, iar rezultate le puteti vedea daca introduceti comanda <code>webpack</code></p>

<h3>Pentru a modifica fisierele .php ce tin de baza de date</h3>

<p>Daca aveti bazele de date MySQL instalate, utilizatorul root configurat si un server local de php, nu mai trebuie sa instalati nimic</p>

<i><h2>Configurarea bazei de date</h2></i>

<p>Site-ul nostru utilizeaza, pentru moment, doua baze de date. Prima are scopul de a stoca plangerile depuse de cetateni( <b>empower_members_db.sql</b> ) iar a doua de a pastra in siguranta datele tuturor utilizatorilor inregistrati. ( <b>empower_db.sql</b> ) </p>
Pentru a configura datele cu care dumneavoastra faceti conexiunea la baza de date, accesati urmatoarele fisiere si modificati campurile necesare:<br>
<p>includes/psl-config.php</p>
<p>config/database.php</p>
<p>config/database_users.php</p>

<p>Printre fisierele website-ului se afla si cele doua baze de date. Va rugam sa le utilizati exact cum va sunt oferite prin importarea acestora pe device-ul dumneavoastra.</p>

<b><p>Daca ati urmat toti pasii sub aceasta parte a documentatiei acum veti putea accesa site-ul si il veti putea utiliza. 

<i><h2>Utilizare</h3></i>

<h3>Din punct de vedere al permisiunilor:</h3>

Va oferim urmatoarele 3 conturi de utilizator create cu urmatoarele permisiuni:</p></b>
<p>Email: empowerUnverified@gmail.com , password: Ilovecats123 (utilizator care nu are acces la panoul de control reclamatii)</p>
<p>Email: empowerVerified@gmail.com , password: Ilovecats123 (utilizator care are access doar la panoul de control reclamatii)</p>
<p>Email: empowerAdmin@gmail.com , password: Ilovecats123 (utilizator de tip administrator cu access la toate panourile de control)</p>

<p>Va puteti crea chiar dumneavoastra un cont. Acesta va fi unverified initial. Daca va logati pe contul de administrator, veti putea accesa Admin Panel prin intermediul caruia puteti verifica orice utilizator care nu este verificat inca.<b>Nu puteti crea niciun cont de tip administrator in locul celui oferit decat daca modificati permisiunile direct din baza de date.</b></p>
<p>Un utilizator unverified nu poate face nimic, absolut nimic pe site. Un utilizator verificat poate doar sa acceseze panoul de control reclamatii si sa marcheze reclamatiile ca fiind preluate/rezolvate. Administratorul are acces si la Admin Panel ce ii permite sa verifice utilizatorii pe langa accesul la panoul de control reclamatii.</p>

<h3>Din punctul de vedere al unui reclamant:</h3>

<p>Un reclamant nu poate accesa paginile de tip panou de control. El poate adauga o reclamatie oferind minimul de date necesar identificarii acestuia. Datele sunt confidentiale, ele pot sa fie vazute numai de catre un cadru din Politia Romana cand se verifica detaliile plangerii.</p>

<i><h2>Tehnologii utilizate in dezvoltare:</h2></i>

<ul>
<li>HTML</li>
<li>CSS3</li>
<li>JavaScript</li>
<li>ReactJS</li>
<li>Node</li>
<li>JQuery</li>
<li>PHP</li>
<li>MySQL</li>
<li>Webpack(for bundling)</li>
</ul>

<b>For the login and signup form and pages, refer to https://github.com/peredurabefrog/phpSecureLogin which provided these great tools. Current in-use files are modified and should not be used for own projects. Refer to the above link.</b>
