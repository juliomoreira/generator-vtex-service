import Generator from "yeoman-generator";

interface ClientGeneratorOptions {
  baseURL: string;
}

interface ClientGeneratorArguments {
  name: string;
}

interface ClientGenerator {
  options: ClientGeneratorOptions & ClientGeneratorArguments;
}

class ClientGenerator extends Generator {
  constructor(args: string | string[], options: {}) {
    super(args, options);
    this.argument("name", {
      description: "Name you want to give to your client.",
      type: String,
      required: false,
      default: "MyClient"
    });
    this.option("baseURL", {
      description: "Specifies a baseURL for your client.",
      type: String,
      default: "http://httpstat.us"
    });
  }

  writing() {
    const { name, baseURL } = this.options;
    const fileName = name.charAt(0).toLowerCase() + name.substr(1);
    const className = name.charAt(0).toUpperCase() + name.substr(1);
    const filePath = `node/clients/${fileName}.ts`;
    const source = this.templatePath("client.template.ts");
    const destination = this.destinationPath(filePath);
    this.fs.copyTpl(source, destination, { className, baseURL });
    return this;
  }

  install() {
    this.yarnInstall("@vtex/api", { dev: true });
  }
}

export default ClientGenerator;
