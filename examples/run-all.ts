import { runFactoryMethodExample } from "../src/creational/factory-method";
import { runBuilderExample } from "../src/creational/builder";
import { runSingletonExample } from "../src/creational/singleton";

import { runAdapterExample } from "../src/structural/adapter";
import { runFacadeExample } from "../src/structural/facade";
import { runDecoratorExample } from "../src/structural/decorator";

import { runStrategyExample } from "../src/behavioral/strategy";
import { runObserverExample } from "../src/behavioral/observer";

console.log("GOF Design Patterns Examples");

runFactoryMethodExample();
runBuilderExample();
runSingletonExample();

runAdapterExample();
runFacadeExample();
runDecoratorExample();

runStrategyExample();
runObserverExample();