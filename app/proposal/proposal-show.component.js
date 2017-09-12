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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var proposal_service_1 = require("./proposal.service");
var ProposalShowComponent = /** @class */ (function () {
    // Dependentcy injection with route
    function ProposalShowComponent(route, proposalService, http) {
        this.route = route;
        this.proposalService = proposalService;
        this.http = http;
    }
    // +params['id'] converts the STRING id from the URL of our post to a number
    ProposalShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        var proposalRequest = this.route.params
            .flatMap(function (params) {
            return _this.proposalService.getProposal(+params['id']);
        });
        proposalRequest.subscribe(function (response) { return _this.proposal = response.json(); });
    };
    ProposalShowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'proposal-show',
            templateUrl: 'proposal-show.component.html',
            styleUrls: ['proposal-show.component.css'],
            providers: [proposal_service_1.ProposalService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            proposal_service_1.ProposalService,
            http_1.Http])
    ], ProposalShowComponent);
    return ProposalShowComponent;
}());
exports.ProposalShowComponent = ProposalShowComponent;
// ngOnInit(): void {
//   this.routeId = this.route.params.subscribe(
//     params => {
//       this.id = +params['id'];
//     }
//   )
// }
//# sourceMappingURL=proposal-show.component.js.map