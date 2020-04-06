module.exports = {
    'Buscar Heledera': function (browser) {

        let home = browser.page.home_PO();
        let search = browser.page.search_PO();
        let producto = browser.page.producto_PO();
        let compraEntrega = browser.page.compraEntrega_PO();
        let compraFinanciacion = browser.page.compraFinanciacion_PO();
        let compraFacturacion = browser.page.compraFacturacion_PO();

        home.navigate()
            //.assert.title('Google')
            .assert.visible('@searchInput')
            .setValue('@searchInput', 'Heladeras')
            .clickSearchButton()
        
            search.clickFirstItem()
            .pause(5000)
            
            producto.clickPurchaseButton()
            .pause(5000)
            producto.clickContinuarCarritoButton()
            .pause(5000)

            compraEntrega.setValue('@city', 'Villa Crespo, Buenos Aires, Ciudad de Buenos Aires')
            compraEntrega.clickSuggestionCity()
            .pause(8000)
            compraEntrega.clickRetiroSucursal()
            .pause(5000)
            compraEntrega.clickSeleccionarSucursal()
            .pause(5000)
            compraEntrega.clickContinuarPickUpButton()
            .pause(5000)
            compraFinanciacion.clickFormMetodosPago()
            .pause(5000)
            compraFinanciacion.clickSeleccionarTarjetaDebito()
            .pause(5000)
            compraFinanciacion.clickPresionarContinuarButtonMedioPago()
            .pause(5000)
            compraFacturacion.setValue('@firstName', 'Jonathan')
            compraFacturacion.setValue('@lastName', 'Rojas')
            compraFacturacion.setValue('@documento', '9556097')
            //compraFacturacion.setValue('select[id="@diaNacimiento"]', '01')
            compraFacturacion.clickSelectGenero()
            .pause(5000)
            // compraFinanciacion.clickAceptoTerminos()
            // .pause(5000)
            // compraFinanciacion.clickButtonContinue()
            // .pause(5000)
    }
}