(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'jquery', './ReadProductsComponent'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('jquery'), require('./ReadProductsComponent'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.jquery, global.ReadProductsComponent);
        global.Content = mod.exports;
    }
})(this, function (exports, _react, _jquery, _ReadProductsComponent) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _jquery2 = _interopRequireDefault(_jquery);

    var _ReadProductsComponent2 = _interopRequireDefault(_ReadProductsComponent);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // Content Component - Top component of the content page
    var Content = _react2.default.createClass({
        displayName: 'Content',


        getInitialState: function getInitialState() {
            return {
                verified: 0,
                array: [],
                admin: 0,
                array2: [],
                name: ''
            };
        },

        // fetch the verified status so that we can display the reports only to verified members
        // fetch the admin status so that we can display the page only to the admin

        componentDidMount: function componentDidMount() {
            this.serverRequestProd = _jquery2.default.post("api/verified_status.php", function (user) {
                var u = JSON.parse(user)[0];
                this.setState({
                    array: JSON.parse(user)
                });
                this.setState({ verified: u.verified });
            }.bind(this));

            this.serverRequestProd = _jquery2.default.post("api/admin_status.php", function (user) {
                var u = JSON.parse(user)[0];
                this.setState({
                    array2: JSON.parse(user)
                });
                this.setState({ admin: u.admin });
            }.bind(this));

            this.serverRequestProd = _jquery2.default.post("api/get_user_name.php", function (user) {
                var u = JSON.parse(user)[0];
                this.setState({ name: u.name });
            }.bind(this));
        },

        componentWillUnmount: function componentWillUnmount() {
            this.serverRequestProd.abort();
        },

        render: function render() {
            if (this.state.verified == 0) {
                // if user isn't verified
                return _react2.default.createElement(
                    'div',
                    { className: 'DOM' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { src: 'logo.png', style: { width: 10 + '%', marginLeft: 15 + '%', marginTop: 2 + '%' } })
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'navigation' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'contact.php' },
                                'Contact'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'includes/logout.php' },
                                'Logout'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'report' },
                            _react2.default.createElement(
                                'p',
                                { style: { fontSize: 3 + 'em' } },
                                'Te rugam sa iti verifici contul.'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'about' },
                            _react2.default.createElement(
                                'div',
                                { style: { textAlign: 'center', display: 'flex', justifyContent: 'center' } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'atitle' },
                                    'DESPRE NOI'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'aboutcont' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Site-ul nostru va ofera o modalitate rapida de a raporta mici delicvente direct catre cadrele politiei.'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Pentru a depune orice plangere va rugam sa apasati pe butonul albastru de mai sus intitulat "Adaugati o reclamatie".'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Daca faceti parte din Politia Romana va rugam sa ne contactati prin detaliile oferite pe pagina de contact pentru a va activa contul.'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'footer' },
                        _react2.default.createElement(
                            'div',
                            { className: 'midle_footer' },
                            _react2.default.createElement(
                                'div',
                                { className: 'left_footer' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'footer_nav_adr', style: { textAlign: 'left' } },
                                    _react2.default.createElement(
                                        'p',
                                        { style: { fontSize: 1.3 + 'em' } },
                                        'Contact'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'adressList' },
                                        _react2.default.createElement(
                                            'li',
                                            { style: { marginBottom: 5 + 'px', width: 98 + '%' } },
                                            'Adresa: Pia\u0163a Revolu\u0163iei nr.1 A, sector 1,Bucure\u015Fti'
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { style: { marginBottom: 5 + 'px', width: 98 + '%' } },
                                            'Telefon:021/264.87.05'
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { style: { marginBottom: 5 + 'px', width: 98 + '%' } },
                                            'Fax: 021/264.86.77'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'footer_nav_adr', style: { marginTop: 7 + 'px', width: 300 + 'px', textAlign: 'left' } },
                                    'Social media',
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://twitter.com/maigov', target: '_blank' },
                                        _react2.default.createElement('img', { src: 'icon-twitter.png',
                                            style: {
                                                marginLeft: 5 + 'px',
                                                marginRight: 5 + 'px',
                                                textAlign: 'left',
                                                width: 30 + 'px',
                                                height: 30 + 'px'
                                            },
                                            title: 'Pagina MAI pe twitter' })
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://www.facebook.com/pages/Ministerul-Afacerilor-Interne-Romania/438338142903249',
                                            target: '_blank' },
                                        _react2.default.createElement('img', { src: 'icon-facebook.png',
                                            title: 'Vizita\u0163i pagina de facebook',
                                            style: {
                                                textAlign: 'left',
                                                width: 30 + 'px',
                                                height: 30 + 'px'
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://www.instagram.com/ministerul_afacerilor_interne/', target: '_blank' },
                                        _react2.default.createElement('img', {
                                            src: 'icon-google.png',
                                            style: {
                                                marginLeft: 5 + 'px',
                                                marginRight: 5 + 'px',
                                                textAlign: 'left',
                                                width: 30 + 'px',
                                                height: 30 + 'px'
                                            },
                                            title: 'Vizita\u0163i pagina de Instagram' })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'left_footer_link' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'footer_nav_2', style: { textAlign: 'left' } },
                                    _react2.default.createElement(
                                        'p',
                                        { style: { fontSize: 1.3 + 'em' } },
                                        'Legaturi utile'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { style: { textAlign: 'left' }, className: 'anchorIdentifier' },
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.presidency.ro/', target: '_blank', style: {} },
                                                'Pre\u015Fedintele Rom\xE2niei'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.gov.ro/', target: '_blank' },
                                                'Guvernul Rom\xE2niei'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.cnpromania.ro/', target: '_blank' },
                                                'Corpul Na\u0163ional al Poli\u0163i\u015Ftilor'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'https://www.europol.europa.eu/', target: '_blank' },
                                                'Europol'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.interpol.int/', target: '_blank' },
                                                'Interpol'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.cepol.europa.eu/', target: '_blank' },
                                                'Cepol'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            } else if (this.state.verified == 1 && this.state.admin == 0) {
                // if user is verified but not an admin
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { src: 'logo.png', style: { width: 10 + '%', marginLeft: 15 + '%', marginTop: 2 + '%' } })
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'navigation' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'contact.php' },
                                'Contact'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'content.php' },
                                'Reincarca panoul'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'includes/logout.php' },
                                'Logout'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'list', style: { fontFamily: 'Roboto' } },
                            'Bine ai venit ',
                            this.state.name,
                            ' !'
                        ),
                        _react2.default.createElement(_ReadProductsComponent2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'footer' },
                        _react2.default.createElement(
                            'div',
                            { className: 'midle_footer' },
                            _react2.default.createElement(
                                'div',
                                { className: 'left_footer' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'footer_nav_adr', style: { textAlign: 'left' } },
                                    _react2.default.createElement(
                                        'p',
                                        { style: { fontSize: 1.3 + 'em' } },
                                        'Contact'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'adressList' },
                                        _react2.default.createElement(
                                            'li',
                                            { style: { marginBottom: 5 + 'px', width: 98 + '%' } },
                                            'Adresa: Pia\u0163a Revolu\u0163iei nr.1 A, sector 1,Bucure\u015Fti'
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { style: { marginBottom: 5 + 'px', width: 98 + '%' } },
                                            'Telefon:021/264.87.05'
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { style: { marginBottom: 5 + 'px', width: 98 + '%' } },
                                            'Fax: 021/264.86.77'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'footer_nav_adr', style: { marginTop: 7 + 'px', width: 300 + 'px', textAlign: 'left' } },
                                    'Social media',
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://twitter.com/maigov', target: '_blank' },
                                        _react2.default.createElement('img', { src: 'icon-twitter.png',
                                            style: {
                                                marginLeft: 5 + 'px',
                                                marginRight: 5 + 'px',
                                                textAlign: 'left',
                                                width: 30 + 'px',
                                                height: 30 + 'px'
                                            },
                                            title: 'Pagina MAI pe twitter' })
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://www.facebook.com/pages/Ministerul-Afacerilor-Interne-Romania/438338142903249',
                                            target: '_blank' },
                                        _react2.default.createElement('img', { src: 'icon-facebook.png',
                                            title: 'Vizita\u0163i pagina de facebook',
                                            style: {
                                                textAlign: 'left',
                                                width: 30 + 'px',
                                                height: 30 + 'px'
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://www.instagram.com/ministerul_afacerilor_interne/', target: '_blank' },
                                        _react2.default.createElement('img', {
                                            src: 'icon-google.png',
                                            style: {
                                                marginLeft: 5 + 'px',
                                                marginRight: 5 + 'px',
                                                textAlign: 'left',
                                                width: 30 + 'px',
                                                height: 30 + 'px'
                                            },
                                            title: 'Vizita\u0163i pagina de Instagram' })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'left_footer_link' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'footer_nav_2', style: { textAlign: 'left' } },
                                    _react2.default.createElement(
                                        'p',
                                        { style: { fontSize: 1.3 + 'em' } },
                                        'Legaturi utile'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { style: { textAlign: 'left' }, className: 'anchorIdentifier' },
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.presidency.ro/', target: '_blank', style: {} },
                                                'Pre\u015Fedintele Rom\xE2niei'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.gov.ro/', target: '_blank' },
                                                'Guvernul Rom\xE2niei'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.cnpromania.ro/', target: '_blank' },
                                                'Corpul Na\u0163ional al Poli\u0163i\u015Ftilor'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'https://www.europol.europa.eu/', target: '_blank' },
                                                'Europol'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.interpol.int/', target: '_blank' },
                                                'Interpol'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.cepol.europa.eu/', target: '_blank' },
                                                'Cepol'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            } else if (this.state.verified == 1 && this.state.admin == 1) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { src: 'logo.png', style: { width: 10 + '%', marginLeft: 15 + '%', marginTop: 2 + '%' } })
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'navigation' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'contact.php' },
                                'Contact'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'admin.php' },
                                'Admin Panel'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'content.php' },
                                'Reincarca panoul'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'includes/logout.php' },
                                'Logout'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'list', style: { fontFamily: 'Roboto' } },
                            'Bine ai venit ',
                            this.state.name,
                            ' !'
                        ),
                        _react2.default.createElement(_ReadProductsComponent2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'footer' },
                        _react2.default.createElement(
                            'div',
                            { className: 'midle_footer' },
                            _react2.default.createElement(
                                'div',
                                { className: 'left_footer' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'footer_nav_adr', style: { textAlign: 'left' } },
                                    _react2.default.createElement(
                                        'p',
                                        { style: { fontSize: 1.3 + 'em' } },
                                        'Contact'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'adressList' },
                                        _react2.default.createElement(
                                            'li',
                                            { style: { marginBottom: 5 + 'px', width: 98 + '%' } },
                                            'Adresa: Pia\u0163a Revolu\u0163iei nr.1 A, sector 1,Bucure\u015Fti'
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { style: { marginBottom: 5 + 'px', width: 98 + '%' } },
                                            'Telefon:021/264.87.05'
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { style: { marginBottom: 5 + 'px', width: 98 + '%' } },
                                            'Fax: 021/264.86.77'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'footer_nav_adr', style: { marginTop: 7 + 'px', width: 300 + 'px', textAlign: 'left' } },
                                    'Social media',
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://twitter.com/maigov', target: '_blank' },
                                        _react2.default.createElement('img', { src: 'icon-twitter.png',
                                            style: {
                                                marginLeft: 5 + 'px',
                                                marginRight: 5 + 'px',
                                                textAlign: 'left',
                                                width: 30 + 'px',
                                                height: 30 + 'px'
                                            },
                                            title: 'Pagina MAI pe twitter' })
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://www.facebook.com/pages/Ministerul-Afacerilor-Interne-Romania/438338142903249',
                                            target: '_blank' },
                                        _react2.default.createElement('img', { src: 'icon-facebook.png',
                                            title: 'Vizita\u0163i pagina de facebook',
                                            style: {
                                                textAlign: 'left',
                                                width: 30 + 'px',
                                                height: 30 + 'px'
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://www.instagram.com/ministerul_afacerilor_interne/', target: '_blank' },
                                        _react2.default.createElement('img', {
                                            src: 'icon-google.png',
                                            style: {
                                                marginLeft: 5 + 'px',
                                                marginRight: 5 + 'px',
                                                textAlign: 'left',
                                                width: 30 + 'px',
                                                height: 30 + 'px'
                                            },
                                            title: 'Vizita\u0163i pagina de Instagram' })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'left_footer_link' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'footer_nav_2', style: { textAlign: 'left' } },
                                    _react2.default.createElement(
                                        'p',
                                        { style: { fontSize: 1.3 + 'em' } },
                                        'Legaturi utile'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { style: { textAlign: 'left' }, className: 'anchorIdentifier' },
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.presidency.ro/', target: '_blank', style: {} },
                                                'Pre\u015Fedintele Rom\xE2niei'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.gov.ro/', target: '_blank' },
                                                'Guvernul Rom\xE2niei'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.cnpromania.ro/', target: '_blank' },
                                                'Corpul Na\u0163ional al Poli\u0163i\u015Ftilor'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'https://www.europol.europa.eu/', target: '_blank' },
                                                'Europol'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.interpol.int/', target: '_blank' },
                                                'Interpol'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'http://www.cepol.europa.eu/', target: '_blank' },
                                                'Cepol'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            }
        }
    });

    //make sure to export the component
    //imports
    exports.default = Content;
});