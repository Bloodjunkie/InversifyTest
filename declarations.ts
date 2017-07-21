import 'reflect_metadata';
import { Container } from 'inversify';


import TYPES from './Types';
import { ModuleB } from './ModuleB'
import { ModuleA } from './ModuleA'
import { FileView } from './FileView';

let container = new Container();

container.bind<IModuleB>(TYPES.MODULEB).to(ModuleB);
container.bind<IModuleA>(TYPES.MODULEA).to(ModuleA);
container.bind<IFileView>(TYPES.FILEVIEW).to(FileView);

export default container;



