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
                .click('@purchaseButton');
        },
        clickContinuarCarritoButton() {
            return this
                .click('@continuarCarritoButton');
        }
    }]
}