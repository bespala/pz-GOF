interface Observer {
  update(message: string): void;
}

class User implements Observer {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(`${this.name} received message: ${message}`);
  }
}

class NewsChannel {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  notify(message: string): void {
    this.observers.forEach((observer) => observer.update(message));
  }
}

export function runObserverExample(): void {
  console.log("\nObserver:");

  const channel = new NewsChannel();

  const user1 = new User("Ivan");
  const user2 = new User("Olena");

  channel.subscribe(user1);
  channel.subscribe(user2);

  channel.notify("New article published");
}