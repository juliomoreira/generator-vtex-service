import { Project, Scope } from "ts-morph";

const fileName = "status";
const className = "Status";

const sourceFile = "node/clients/index.ts";
const sourceClass = "Clients";

const tsConfigFilePath = "node/tsconfig.json";

const project = new Project({ tsConfigFilePath });

const clientsSourceFile = project.getSourceFileOrThrow(sourceFile);

clientsSourceFile.getImportDeclaration(`./${fileName}`) ||
  clientsSourceFile.addImportDeclaration({
    defaultImport: className,
    moduleSpecifier: `./${fileName}`
  });

const clientsClass = clientsSourceFile.getClassOrThrow(sourceClass);

clientsClass.getGetAccessor(fileName) ||
  clientsClass.addGetAccessor({
    name: fileName,
    statements: [`return this.getOrSet(${fileName}, ${className})`],
    scope: Scope.Public
  });

project.save();
