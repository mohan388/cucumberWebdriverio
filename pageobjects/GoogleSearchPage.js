
class GoogleSearchPage {
    get inputUsername () { return $('[name="q"]') }
    get btnSubmit () { return $('[name="btnK"]') }

    async performSearch (username) {
        await (await this.inputUsername).setValue(username);
        await browser.pause(1000);
        await (await this.btnSubmit).click();
        await browser.pause(2000);
    }

    async open () {
       await browser.url(`https://www.google.com`)
    }
}

module.exports = new GoogleSearchPage();
