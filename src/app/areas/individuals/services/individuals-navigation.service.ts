import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class IndividualsNavigationService {
  constructor(private router: Router) { }

  public navigateToOverview(): void {
    this.router.navigate(['individuals']);
  }

  public navigateToCreateIndividual(): void {
    this.router.navigate(['individuals', '-1']);
  }

  public navigateToEditIndividual(id: string): void {
    this.router.navigate(['individuals', id]);
  }
}
