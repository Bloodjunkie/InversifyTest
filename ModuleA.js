var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "./Types", "inversify", "inversify-inject-decorators"], function (require, exports, Types_1, inversify_1, inversify_inject_decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var lazyInject = inversify_inject_decorators_1.default(new inversify_1.Container()).lazyInject;
    // @injectable()
    var ModuleA = (function (_super) {
        __extends(ModuleA, _super);
        function ModuleA() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            lazyInject(Types_1.default.MODULEB),
            __metadata("design:type", Object)
        ], ModuleA.prototype, "moduleB", void 0);
        return ModuleA;
    }(Object));
    exports.ModuleA = ModuleA;
});
