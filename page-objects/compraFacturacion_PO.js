module.exports = {
    elements: {
        firstName: {
            selector: '#firstName'
        },
        lastName: {
            selector: '#lastName'
        },
        documento: {
            selector: '#id_value'
        },
        diaNacimiento: {
            selector: '#day_select'
        },
        mesNacimiento: {
            selector: '#month_select'
        },
        anioNacimiento: {
            selector: '#year_select'
        },
        selectGenero: {
            selector: '.item-genero'
        },
        codigoArea: {
            selector: '#codphone'
        },
        numeroTelefono: {
            selector: '#phone'
        },
        email: {
            selector: '#email'
        },
        calle: {
            selector: '#street_name'
        },
        altura: {
            selector: '#street_number'
        },
        piso: {
            selector: '#floor'
        },
        apartamento: {
            selector: '#room'
        },
        codigoPostal: {
            selector: '#zip_code'
        },
        aceptoTerminos: {
            selector: '.acepto-terminos'
        },
        buttonContinue: {
            selector: '#continue'
        }
    },
    commands: [{
        clickSelectGenero() {
            return this
                .click('@selectGenero');
        },
        clickAceptoTerminos() {
            return this
                .click('@aceptoTerminos')
        },
        clickButtonContinue() {
            return this
                .click('@buttonContinue')
        }
    }]
}