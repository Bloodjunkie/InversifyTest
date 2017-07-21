
import { injectable } from "inversify";

@injectable()
export class ModuleB implements IModuleB {
    constructor() {
        
    }

    init(): void {
        alert("test ModuleB");
    }
}