import { join } from "path";
import { file, fileContent } from "yeoman-assert";
import helpers from "yeoman-test";

const basePath = join(__dirname, "../../generators/client");
const { run: runHelpers } = helpers;

const run = () => runHelpers(basePath);
const runWithArgs = (args: string | string[]) =>
  runHelpers(basePath).withArguments(args);

describe("generator-vtex-service:client", () => {
  beforeAll(run);

  it("creates the file whith the default name", () => {
    file(["node/clients/myClient.ts"]);
  });

  it("sets the default className", () => {
    fileContent("node/clients/myClient.ts", /class MyClient/g);
  });

  it("sets the default baseUrl", () => {
    fileContent(
      "node/clients/myClient.ts",
      /super\("http:\/\/httpstat.us", context, options\)/g
    );
  });
});

describe("generator-vtex-service:client status", () => {
  beforeAll(() => runWithArgs(["status"]));

  it("creates the file whith the default name", () => {
    file(["node/clients/status.ts"]);
  });

  it("sets the default client name correctly", () => {
    fileContent("node/clients/status.ts", /class Status/g);
  });
});

describe("generator-vtex-service:client FancyClientName", () => {
  beforeAll(() => runWithArgs(["FancyClientName"]));

  it("creates the file whith the default name", () => {
    file(["node/clients/fancyClientName.ts"]);
  });

  it("sets the default client name correctly", () => {
    fileContent("node/clients/fancyClientName.ts", /class FancyClientName/g);
  });
});

describe("generator-vtex-service:client withBaseURL --baseURL=http://foo.bar", () => {
  beforeAll(() => runWithArgs(["withBaseURL", "--baseURL=http://foo.bar"]));

  it("sets the client baseURL", () => {
    fileContent(
      "node/clients/withBaseURL.ts",
      /super\("http:\/\/foo.bar", context, options\)/g
    );
  });
});
