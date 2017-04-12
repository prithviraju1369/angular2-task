"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CardComponent = (function () {
    function CardComponent() {
        this.isClicked = new core_1.EventEmitter();
    }
    CardComponent.prototype.editName = function () {
        this.toggle = !this.toggle;
        this.isClicked.emit(this.toggle);
        this.card.nameClicked = !this.card.nameClicked;
    };
    CardComponent.prototype.onNameEnter = function (evt) {
        this.card.name = event.target.value;
        this.card.nameClicked = !this.card.nameClicked;
    };
    CardComponent.prototype.editAddress = function () {
        this.toggle = !this.toggle;
        this.isClicked.emit(this.toggle);
        this.card.addressClicked = !this.card.addressClicked;
    };
    CardComponent.prototype.onAddressEnter = function (evt) {
        this.card.address = event.target.value;
        this.card.addressClicked = !this.card.addressClicked;
    };
    CardComponent.prototype.editEmailid = function () {
        this.toggle = !this.toggle;
        this.isClicked.emit(this.toggle);
        this.card.emailidClicked = !this.card.emailidClicked;
    };
    CardComponent.prototype.onEmailidEnter = function (evt) {
        this.card.emailid = event.target.value;
        this.card.emailidClicked = !this.card.emailidClicked;
    };
    CardComponent.prototype.editPhone = function () {
        this.toggle = !this.toggle;
        this.isClicked.emit(this.toggle);
        this.card.phoneClicked = !this.card.phoneClicked;
    };
    CardComponent.prototype.onPhoneEnter = function (evt) {
        this.card.phone = event.target.value;
        this.card.phoneClicked = !this.card.phoneClicked;
    };
    return CardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CardComponent.prototype, "card", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CardComponent.prototype, "isClicked", void 0);
CardComponent = __decorate([
    core_1.Component({
        selector: 'card',
        templateUrl: "./card.component.html",
        styleUrls: ['./card.component.css']
    }),
    __metadata("design:paramtypes", [])
], CardComponent);
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map