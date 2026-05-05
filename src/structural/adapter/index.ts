class OldPaymentSystem {
  makePayment(amount: number): void {
    console.log(`Old payment system paid ${amount} UAH`);
  }
}

interface NewPaymentSystem {
  pay(amount: number): void;
}

class PaymentAdapter implements NewPaymentSystem {
  constructor(private oldSystem: OldPaymentSystem) {}

  pay(amount: number): void {
    this.oldSystem.makePayment(amount);
  }
}

export function runAdapterExample(): void {
  console.log("\nAdapter:");

  const oldPayment = new OldPaymentSystem();
  const adapter = new PaymentAdapter(oldPayment);

  adapter.pay(500);
}