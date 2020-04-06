module.exports = {
    url: 'http://www.garbarino.com',
    elements: {
        searchInput: {
            selector: 'input[id="autocomplete-input"]'
        },
        searchButton: {
            selector: '.gb-search-button > img'
        }
    },
    commands: [{
        clickSearchButton() {
            return this
                .click('@searchButton');
        }
    }]
}