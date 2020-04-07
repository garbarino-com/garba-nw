describe('Realizar la compra de una heladera con retiro en sucursal y tarjeta de débito', function() {
    before(function(browser) {
      homepage = browser.page.home_PO();
      search =  browser.page.search_PO();
      producto = browser.page.producto_PO();
      compraEntrega = browser.page.compraEntrega_PO();
      compraFinanciacion = browser.page.compraFinanciacion_PO();
      compraFacturacion = browser.page.compraFacturacion_PO();
    });
  
    test('Ingreamos a la web de garbarino.com', () => {
        homepage.navigate()
    });

    test('Realizamos la búsqueda de heladeras', () => {
        homepage.assert.visible('@searchInput')
        homepage.setValue('@searchInput', 'Heladeras')
        homepage.clickSearchButton()
    })
    
    test('Seleccionamos la primera heladera del listado', () => {
        search.clickFirstItem()
        .pause(2000)
    })

    test('Procedemos a realizar la compra de la heladera', () => {
        producto.clickPurchaseButton()
        .pause(2000)
        producto.clickContinuarCarritoButton()
    })
    
    test('Seleccionamos el barrio y/o localidad', () => {
        compraEntrega.assert.visible('@city')
        compraEntrega.setValue('@city', 'Villa Crespo, Buenos Aires, Ciudad de Buenos Aires')
        compraEntrega.clickSuggestionCity()
        .pause(5000)
        compraEntrega.clickRetiroSucursal()
        .pause(1000)
        compraEntrega.clickSeleccionarSucursal()
        compraEntrega.clickContinuarPickUpButton()
        .pause(5000)
    })

    test('Seleccionamos los métodos de pago', () => {
        compraFinanciacion.clickFormMetodosPago()
        .pause(2000)
        compraFinanciacion.clickSeleccionarTarjetaDebito()
        .pause(1000)
        compraFinanciacion.clickPresionarContinuarButtonMedioPago()
    })

    test('Completamos el formulario con los datos del cliente', () => {
        compraFacturacion.setValue('@firstName', 'Jonathan')
        compraFacturacion.setValue('@lastName', 'Rojas')
        compraFacturacion.setValue('@documento', '9556097')
        .click('select[id="month_select"] option[value="01"]')
        compraFacturacion.click("@diaNacimiento",()=>{
            compraFacturacion.click("option[value='31']");
          });
        compraFacturacion.click("@anioNacimiento",()=>{
            compraFacturacion.click("option[value='1990']");
          });
        compraFacturacion.clickSelectGenero()
        
        compraFacturacion.setValue('@codigoArea', '11')
        compraFacturacion.setValue('@numeroTelefono', '69068083')
        compraFacturacion.setValue('@email', 'jonathanrojas31@gmail.com')
        compraFacturacion.setValue('@calle', 'Cuenca')
        compraFacturacion.setValue('@altura', '3446')
        compraFacturacion.setValue('@piso', '2')
        compraFacturacion.setValue('@apartamento', 'D')
        compraFacturacion.setValue('@codigoPostal', '1417')
        
        compraFacturacion.clickAceptoTerminos()
        compraFacturacion.clickButtonContinue()
        .pause(5000)
    })
  });