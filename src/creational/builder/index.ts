class User {
  constructor(
    public name: string,
    public email: string
  ) {}
}

class UserBuilder {
  private name = "";
  private email = "";

  setName(name: string): UserBuilder {
    this.name = name;
    return this;
  }

  setEmail(email: string): UserBuilder {
    this.email = email;
    return this;
  }

  build(): User {
    return new User(this.name, this.email);
  }
}

export function runBuilderExample(): void {
  console.log("\nBuilder:");

  const user = new UserBuilder()
    .setName("Ivan")
    .setEmail("ivan@example.com")
    .build();

  console.log(user);
}