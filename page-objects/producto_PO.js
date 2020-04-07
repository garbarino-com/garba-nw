module.exports = {
    elements: {
        purchaseButton: {
            selector: '//button[@id="purchaseButton"]',
            locateStrategy: 'xpath'
        },
        continuarCarritoButton: {
            selector: '//button[@id="cart-buy-btn"]',
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        clickPurchaseButton() {
            return this
                .waitForElementVisible('@purchaseButton', 50000)
                .click('@purchaseButton')
                //.click('@purchaseButton');
        },
        clickContinuarCarritoButton() {
            return this
                .waitForElementVisible('@continuarCarritoButton', 50000)
                .click('@continuarCarritoButton');
        }
    }]
}