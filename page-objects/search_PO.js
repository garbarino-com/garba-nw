module.exports = {
    elements: {
        firstItem: {
            selector: '.itemBox'
        }
    },
    commands: [{
        clickFirstItem() {
            return this
                .click('@firstItem');
        }
    }]
}