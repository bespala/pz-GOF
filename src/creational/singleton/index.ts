class Config {
  private static instance: Config;

  private constructor() {}

  static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }

    return Config.instance;
  }

  getAppName(): string {
    return "GOF Patterns App";
  }
}

export function runSingletonExample(): void {
  console.log("\nSingleton:");

  const config1 = Config.getInstance();
  const config2 = Config.getInstance();

  console.log(config1.getAppName());
  console.log("Same instance:", config1 === config2);
}