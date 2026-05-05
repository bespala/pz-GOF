interface PaymentStrategy {
  pay(amount: number): void;
}

class CardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} UAH by card`);
  }
}

class CashPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} UAH by cash`);
  }
}

class Order {
  constructor(private paymentStrategy: PaymentStrategy) {}

  payOrder(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

export function runStrategyExample(): void {
  console.log("\nStrategy:");

  const cardOrder = new Order(new CardPayment());
  cardOrder.payOrder(1000);

  const cashOrder = new Order(new CashPayment());
  cashOrder.payOrder(700);
}