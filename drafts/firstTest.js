module.exports = {
    'Validar el titulo de página'(browser) {
        browser
            .url('https://garbarino.com')
            .waitForElementVisible('.ellipsis-text')
            .assert.containsText(".ellipsis-text", "Pagá Crédito Garbarino desde tu casa");
    }
}