import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css'],
  providers: [ ProposalService ]
})
export class ProposalShowComponent implements OnInit {
  id: number;
  routeId: any;

  // Dependentcy injection with route
  constructor(
    private route: ActivatedRoute,
    private proposalService: ProposalService,
    private http: Http
  ){}

  // @Input()
  proposal: Proposal;

  // +params['id'] converts the STRING id from the URL of our post to a number
  ngOnInit(): void {
    let proposalRequest = this.route.params
        .flatMap((params: Params) =>
          this.proposalService.getProposal(+params['id'])
      );
    proposalRequest.subscribe(response => this.proposal = response.json())
  }
}


// ngOnInit(): void {
//   this.routeId = this.route.params.subscribe(
//     params => {
//       this.id = +params['id'];
//     }
//   )
// }
