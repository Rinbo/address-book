const { Given, Then, When, After } = require("cucumber");

After(async function(){
  return await this.closeHomePage()
});

Given("I visit the site", async function() {
  return await this.openHomePage();
});

Then("I should see {string}", async function(content) {
  return await this.pageHasTextContent(content)
});

Then("and I should see {string}", async function(content) {
  return await this.pageHasTextContent(content)
});

When('I click {string}', async function(string) {
  return await this.clickOnButton(string)
})

Then('I fill in {string} with {string}', async function(field, content) {
  return await this.fillFormField(field.toLowerCase(), content)
})

Then('and I click {string}', async function(string) {
  return await this.clickOnButton(string)
})

Then('I should have {int} contact in my address book', async function(contactCount) {
  return await this.checkContactStorageCount(contactCount)
})

Then('I should not see {string}', async function(string) {
  return 'pending'
})