module.exports = {
    elements: {
        formMetodosPago: {
            selector: '#metodos-pago'
        },
        seleccionarTarjetaDebito: {
            selector: '#gb-tarjeta-visa-debito'
        },
        presionarContinuarButtonMedioPago: {
            selector: '#continue'
        }
    },
    commands: [{
        clickFormMetodosPago() {
            return this
                .click('@formMetodosPago');
        },
        clickSeleccionarTarjetaDebito() {
            return this
                .click('@seleccionarTarjetaDebito')
        },
        clickPresionarContinuarButtonMedioPago() {
            return this
                .click('@presionarContinuarButtonMedioPago')
        }
    }]
}