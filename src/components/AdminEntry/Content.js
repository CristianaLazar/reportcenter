//imports
import React from 'react'
import $ from 'jquery'
import ListAllUnverifiedUsers from './ListAllUnverifiedUsers'

// Content Component - Top component of the content page
var Content = React.createClass({

    getInitialState: function () {
        return {
            admin: 0,
            array: [],
        };
    },

    // fetch the admin status so that we can display the page only to the admin

    componentDidMount: function () {
        this.serverRequestProd = $.post("api/admin_status.php", function (user) {
            var u = JSON.parse(user)[0];
            this.setState({
                array: JSON.parse(user)
            });
            this.setState({admin: u.admin});
        }.bind(this));
        this.serverRequestProd = $.post("api/get_user_name.php", function (user) {
            var u = JSON.parse(user)[0];
            this.setState({name: u.name});
        }.bind(this));
    },

    componentWillUnmount: function () {
        this.serverRequestProd.abort();
    },

    render() {
        if (this.state.admin == 0) { // if user isn't an admin
            return (
                <div className="DOM">
                    <div>
                        <div>
                            <img src="logo.png" style={{width: 10 + '%', marginLeft: 15 + '%', marginTop: 2 + '%'}}/>
                        </div>
                        <ul className="navigation">
                            <li><a href="contact.php">Contact</a></li>
                            <li><a href="content.php">Panou de control plangeri</a></li>
                            <li><a href="includes/logout.php">Logout</a></li>
                        </ul>
                        <div className="content">
                            <p>Ne para rau insa dumneavoastra nu sunteti admin.</p>
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
                </div>
            );
        }
        else if (this.state.admin == 1) { // if user is an admin
            return (
                <div>
                    <div>
                        <img src="logo.png" style={{width: 10 + '%', marginLeft: 15 + '%', marginTop: 2 + '%'}}/>
                    </div>
                    <ul className="navigation">
                        <li><a href="contact.php">Contact</a></li>
                        <li><a href="content.php">Panou de control plangeri</a></li>
                        <li><a href="admin.php">Reincarca panoul</a></li>
                        <li><a href="includes/logout.php">Logout</a></li>
                    </ul>
                    <div className="content">
                        <div>
                            <div className="list" style={{fontFamily:'Roboto'}}>Bine ai venit {this.state.name} !</div>
                        <ListAllUnverifiedUsers/>
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
    }
});

//make sure to export the component
export default Content