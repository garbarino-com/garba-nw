module.exports = {
    elements: {
        city: {
            selector: '//input[@id="c1ty"]',
            locateStrategy: 'xpath'
        },
        suggestionCity: {
            selector: '.gb-suggestion'
        },
        retiroSucursal: {
            selector: '.gb-checkout-delivery-popup-success'
        },
        seleccionarSucursal: {
            selector: '.sucursal-ul-list'
        },
        continuarPickUpButton: {
            selector: '#continue-pickup'
        }

    },
    commands: [{
        clickSuggestionCity() {
            return this
                .click('@suggestionCity');
        },
        clickRetiroSucursal() {
            return this
                .click('@retiroSucursal');
        },
        clickSeleccionarSucursal() {
            return this
                .click('@seleccionarSucursal');
        },
        clickContinuarPickUpButton() {
            return this
                .click('@continuarPickUpButton')
        }

    }]
}