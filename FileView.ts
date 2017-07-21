import { ModuleA } from './ModuleA'
import { injectable, Container } from "inversify";
import TYPES from './Types';
import container from './declarations';

import getDecorators from 'inversify-inject-decorators';
let { lazyInject } = getDecorators(new Container());

@injectable()
export class FileView implements IFileView {

    @lazyInject(TYPES.MODULEA) public moduleA: IModuleA;

    constructor() {
        
    }

    init(): void {
        this.moduleA.moduleB.init();
    }
}