interface Coffee {
  getCost(): number;
  getDescription(): string;
}

class SimpleCoffee implements Coffee {
  getCost(): number {
    return 30;
  }

  getDescription(): string {
    return "Simple coffee";
  }
}

class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getCost(): number {
    return this.coffee.getCost() + 10;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, milk`;
  }
}

export function runDecoratorExample(): void {
  console.log("\nDecorator:");

  const coffee = new SimpleCoffee();
  const coffeeWithMilk = new MilkDecorator(coffee);

  console.log(coffeeWithMilk.getDescription());
  console.log(`Cost: ${coffeeWithMilk.getCost()} UAH`);
}