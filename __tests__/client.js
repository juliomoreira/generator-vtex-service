"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

const basePath = path.join(__dirname, "../generators/client");

describe("generator-vtex-service:client", () => {
  beforeAll(() => helpers.run(basePath));

  it("creates the file whith the default name", () => {
    assert.file(["node/clients/myClient.ts"]);
  });

  it("sets the default className", () => {
    assert.fileContent("node/clients/myClient.ts", /class MyClient/g);
  });

  it("sets the default baseUrl", () => {
    assert.fileContent(
      "node/clients/myClient.ts",
      /super\("http:\/\/httpstat.us", context, options\)/g
    );
  });
});

describe("generator-vtex-service:client status", () => {
  beforeAll(() => helpers.run(basePath).withArguments(["status"]));

  it("creates the file whith the default name", () => {
    assert.file(["node/clients/status.ts"]);
  });

  it("sets the default client name correctly", () => {
    assert.fileContent("node/clients/status.ts", /class Status/g);
  });
});

describe("generator-vtex-service:client FancyClientName", () => {
  beforeAll(() => helpers.run(basePath).withArguments(["FancyClientName"]));

  it("creates the file whith the default name", () => {
    assert.file(["node/clients/fancyClientName.ts"]);
  });

  it("sets the default client name correctly", () => {
    assert.fileContent(
      "node/clients/fancyClientName.ts",
      /class FancyClientName/g
    );
  });
});

describe("generator-vtex-service:client withBaseURL --baseURL=http://foo.bar", () => {
  beforeAll(() =>
    helpers
      .run(basePath)
      .withArguments(["withBaseURL", "--baseURL=http://foo.bar"])
  );

  it("sets the client baseURL", () => {
    assert.fileContent(
      "node/clients/withBaseURL.ts",
      /super\("http:\/\/foo.bar", context, options\)/g
    );
  });
});
