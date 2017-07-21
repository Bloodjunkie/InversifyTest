import TYPES from './Types';
import { inject, injectable, Container } from 'inversify';
import container from './declarations';

import getDecorators from 'inversify-inject-decorators';
let { lazyInject } = getDecorators(new Container());

// @injectable()
export class ModuleA extends Object implements IModuleA {

    @lazyInject(TYPES.MODULEB) public moduleB: IModuleB;

}