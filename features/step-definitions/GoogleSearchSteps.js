const { Given, When, Then } = require('@cucumber/cucumber');

const googleSearchPage = require('../../pageobjects/GoogleSearchPage');



Given(/^I am on the google search page$/, async () => {
    await googleSearchPage.open()
});

When(/^I perform search for (.*)$/, async (searchText) => {
    await googleSearchPage.performSearch(searchText)
});

