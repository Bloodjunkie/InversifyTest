interface IModuleB {
    init(): void;
}
interface IModuleA {
    moduleB: IModuleB;
    // init(): void;
}
interface IFileView {
    init(): void;
}