const DSD = artifacts.require("DSD");

contract("DSD", (accounts) => {
  let dsdInstance;

  beforeEach(async () => {
    dsdInstance = await DSD.new();
  });

  it("should register a provider", async () => {
    const providerAddress = accounts[0];
    const username = "provider1";
    const password = "password1";

    await dsdInstance.registerProvider(username, password, { from: providerAddress });

    const provider = await dsdInstance.providers(providerAddress);
    assert.equal(provider.username, username, "Provider username is incorrect");
    assert.equal(provider.password, password, "Provider password is incorrect");
  });

  it("should sign in a provider", async () => {
    const providerAddress = accounts[0];
    const password = "password1";

    await dsdInstance.registerProvider("provider1", password, { from: providerAddress });
    await dsdInstance.signIn(password, providerAddress);

    const provider = await dsdInstance.providers(providerAddress);
    assert.equal(provider.loggedIn, true, "Provider should be signed in");
  });

  it("should publish a description", async () => {
    const providerAddress = accounts[0];
    const name = "Description 1";
    const description = "Description 1 details";
    const category = "Category 1";
    const security = "Security 1";
    const legal = "Legal 1";
    const gasConsumption = 100;

    await dsdInstance.registerProvider("provider1", "password1", { from: providerAddress });
    await dsdInstance.signIn("password1", providerAddress);

    await dsdInstance.PublishDesc(name, description, category, security, legal, gasConsumption, { from: providerAddress });

    const descriptionData = await dsdInstance.Descriptions(1);
    assert.equal(descriptionData.provider, providerAddress, "Provider address is incorrect");
    assert.equal(descriptionData.name, name, "Description name is incorrect");
    assert.equal(descriptionData.description, description, "Description details are incorrect");
    assert.equal(descriptionData.category, category, "Description category is incorrect");
    assert.equal(descriptionData.security, security, "Description security is incorrect");
    assert.equal(descriptionData.legal, legal, "Description legal is incorrect");
    assert.equal(descriptionData.gasConsumption, gasConsumption, "Description gas consumption is incorrect");
  });

  it("should search for all descriptions", async () => {
    const providerAddress = accounts[0];
    const name = "Description 1";
    const description = "Description 1 details";
    const category = "Category 1";
    const security = "Security 1";
    const legal = "Legal 1";
    const gasConsumption = 100;

    await dsdInstance.registerProvider("provider1", "password1", { from: providerAddress });
    await dsdInstance.signIn("password1", providerAddress);
    await dsdInstance.PublishDesc(name, description, category, security, legal, gasConsumption, { from: providerAddress });

    const searchResults = await dsdInstance.SearchForAllDescription(name, description, category, security, legal, gasConsumption);
    assert.equal(searchResults.length, 1, "Number of matching descriptions should be 1");
  });

  it("should search descriptions by provider address", async () => {
    const providerAddress = accounts[0];
    const name = "Description 1";
    const description = "Description 1 details";
    const category = "Category 1";
    const security = "Security 1";
    const legal = "Legal 1";
    const gasConsumption = 100;

    await dsdInstance.registerProvider("provider1", "password1", { from: providerAddress });
    await dsdInstance.signIn("password1", providerAddress);
    await dsdInstance.PublishDesc(name, description, category, security, legal, gasConsumption, { from: providerAddress });

    const searchResults = await dsdInstance.searchByProvider(providerAddress);
    assert.equal(searchResults.length, 1, "Number of descriptions by provider should be 1");
  });

  it("should log out a provider", async () => {
    const providerAddress = accounts[0];

    await dsdInstance.registerProvider("provider1", "password1", { from: providerAddress });
    await dsdInstance.signIn("password1", providerAddress);

    await dsdInstance.logOut({ from: providerAddress });

    const provider = await dsdInstance.providers(providerAddress);
    assert.equal(provider.loggedIn, false, "Provider should be signed out");
  });
});
