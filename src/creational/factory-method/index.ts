interface Transport {
  deliver(): void;
}

class Car implements Transport {
  deliver(): void {
    console.log("Delivery by car");
  }
}

class Ship implements Transport {
  deliver(): void {
    console.log("Delivery by ship");
  }
}

class TransportFactory {
  static createTransport(type: string): Transport {
    if (type === "car") {
      return new Car();
    }

    return new Ship();
  }
}

export function runFactoryMethodExample(): void {
  console.log("\nFactory Method:");

  const car = TransportFactory.createTransport("car");
  const ship = TransportFactory.createTransport("ship");

  car.deliver();
  ship.deliver();
}