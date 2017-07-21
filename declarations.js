define(["require", "exports", "inversify", "./Types", "./ModuleB", "./ModuleA", "./FileView", "reflect_metadata"], function (require, exports, inversify_1, Types_1, ModuleB_1, ModuleA_1, FileView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var container = new inversify_1.Container();
    container.bind(Types_1.default.MODULEB).to(ModuleB_1.ModuleB);
    container.bind(Types_1.default.MODULEA).to(ModuleA_1.ModuleA);
    container.bind(Types_1.default.FILEVIEW).to(FileView_1.FileView);
    exports.default = container;
});
