class CPU {
  start(): void {
    console.log("CPU started");
  }
}

class Memory {
  load(): void {
    console.log("Memory loaded");
  }
}

class HardDrive {
  read(): void {
    console.log("Hard drive read data");
  }
}

class ComputerFacade {
  private cpu = new CPU();
  private memory = new Memory();
  private hardDrive = new HardDrive();

  startComputer(): void {
    this.cpu.start();
    this.memory.load();
    this.hardDrive.read();

    console.log("Computer started successfully");
  }
}

export function runFacadeExample(): void {
  console.log("\nFacade:");

  const computer = new ComputerFacade();

  computer.startComputer();
}