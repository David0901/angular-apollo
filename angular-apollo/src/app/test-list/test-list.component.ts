import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { PastLaunchesListGQL } from '../services/spacexGraphql.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestListComponent {

  constructor(private readonly pastLaunchesService: PastLaunchesListGQL) {}

  // Please be careful to not fetch too much, but this amount lets us see lazy loading imgs in action
  pastLaunches$ = this.pastLaunchesService
    .fetch({ limit: 30 })
    // Here we extract our query data, we can also get info like errors or loading state from res
    .pipe(map((res) => res.data.launchesPast));

}
