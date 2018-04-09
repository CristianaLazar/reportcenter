//imports
import React from 'react'
import MainApp from './MainApp'

// Content component - Top component of the index page
var Content = React.createClass({
    render() {
        return (
            <div className="DOM">
                <div>
                    <img src="logo.png" style={{width: 10 + '%', marginLeft: 15 + '%', marginTop: 2 + '%'}}/>
                </div>
                <ul className="navigation">
                    <li><a href="index.php">Acasa</a></li>
                    <li><a href="contact.php">Contact</a></li>
                    <li><a href="login.php">Login</a></li>
                    <li><a href="register.php">Inregistrare</a></li>
                </ul>
                <div className="content">
                    <div className="report">
                        <MainApp/>
                    </div>
                    <div className="about">
                        <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                            <div className="atitle">DESPRE NOI</div>
                        </div>
                        <div className="aboutcont">
                            <p>Site-ul nostru va ofera o modalitate rapida de a raporta mici delicvente direct catre
                                cadrele politiei.</p>
                            <p>Pentru a depune orice plangere va rugam sa apasati pe butonul albastru de mai sus
                                intitulat "Adaugati o reclamatie".</p>
                            <p>Daca faceti parte din Politia Romana va rugam sa ne contactati prin detaliile oferite pe
                                pagina de contact pentru a va activa contul.</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="midle_footer">
                        <div className="left_footer">
                            <div className="footer_nav_adr" style={{textAlign: 'left'}}>
                                <p style={{fontSize:1.3+'em'}}>Contact</p>
                                <ul className="adressList">
                                    <li style={{marginBottom: 5 + 'px', width: 98 + '%'}}>Adresa: Piaţa Revoluţiei nr.1
                                        A, sector 1,Bucureşti
                                    </li>
                                    <li style={{marginBottom: 5 + 'px', width: 98 + '%'}}>
                                        Telefon:021/264.87.05
                                    </li>
                                    <li style={{marginBottom: 5 + 'px', width: 98 + '%'}}>
                                        Fax: 021/264.86.77
                                    </li>
                                </ul>
                            </div>
                            <div className="footer_nav_adr" style={{marginTop:7+'px', width:300+'px', textAlign:'left'}}>Social media
                                <a href="https://twitter.com/maigov" target="_blank"><img src="icon-twitter.png"
                                                                                          style={{
                                                                                              marginLeft: 5 + 'px',
                                                                                              marginRight: 5 + 'px',
                                                                                              textAlign: 'left',
                                                                                              width: 30 + 'px',
                                                                                              height: 30 + 'px'
                                                                                          }}
                                                                                          title="Pagina MAI pe twitter"/></a>
                                <a href="https://www.facebook.com/pages/Ministerul-Afacerilor-Interne-Romania/438338142903249"
                                   target="_blank"><img src="icon-facebook.png"
                                                        title="Vizitaţi pagina de facebook"
                                                        style={{
                                                            textAlign: 'left',
                                                            width: 30 + 'px',
                                                            height: 30 + 'px'
                                                        }}/></a>
                                <a href="https://www.instagram.com/ministerul_afacerilor_interne/" target="_blank"><img
                                    src="icon-google.png"
                                    style={{
                                        marginLeft: 5 + 'px',
                                        marginRight: 5 + 'px',
                                        textAlign: 'left',
                                        width: 30 + 'px',
                                        height: 30 + 'px'
                                    }}
                                    title="Vizitaţi pagina de Instagram"/></a>
                            </div>
                        </div>
                        <div className="left_footer_link">
                            <div className="footer_nav_2" style={{textAlign:'left'}}>
                                <p style={{fontSize:1.3+'em'}}>Legaturi utile</p>
                                <ul style={{textAlign:'left'}} className="anchorIdentifier">
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
            </div>
        );
    }
});

// make sure to export the component
export default Content