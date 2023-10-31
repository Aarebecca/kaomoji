export class Environment {
  variables: Map<string, any> = new Map();
  functions: Map<string, Fn> = new Map();

  constructor(private parent?: Environment) {}

  lookup(name: string): any {
    if (this.variables.has(name)) {
      return this.variables.get(name);
    }
    if (this.parent) {
      return this.parent.lookup(name);
    }
    throw new Error(`Undefined variable ${name}`);
  }
}

export class Fn {
  constructor(public parameters: string[], public body: any) {}
}
