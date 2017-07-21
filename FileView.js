var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "inversify", "./Types", "inversify-inject-decorators"], function (require, exports, inversify_1, Types_1, inversify_inject_decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var lazyInject = inversify_inject_decorators_1.default(new inversify_1.Container()).lazyInject;
    var FileView = (function () {
        function FileView() {
        }
        FileView.prototype.init = function () {
            this.moduleA.moduleB.init();
        };
        __decorate([
            lazyInject(Types_1.default.MODULEA),
            __metadata("design:type", Object)
        ], FileView.prototype, "moduleA", void 0);
        FileView = __decorate([
            inversify_1.injectable(),
            __metadata("design:paramtypes", [])
        ], FileView);
        return FileView;
    }());
    exports.FileView = FileView;
});
