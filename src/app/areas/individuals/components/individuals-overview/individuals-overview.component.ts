import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { ColumnDefinitionsContainer, MatTableComponent } from '@drmueller/ng-material-extensions';

import { IndividualOverviewDto } from '../../dtos';
import {
  IndividualColDefBuilderService, IndividualsNavigationService, IndividualsOverviewService
} from '../../services';
import { RelayCommand } from '@drmueller/ng-base-directives';

@Component({
  selector: 'app-individuals-overview',
  templateUrl: './individuals-overview.component.html',
  styleUrls: ['./individuals-overview.component.scss']
})
export class IndividualsOverviewComponent implements OnInit {

  public editIndividualCommand: RelayCommand;
  @ViewChild(MatTableComponent) public table: MatTableComponent<IndividualOverviewDto>;
  public columnDefinitions: ColumnDefinitionsContainer<IndividualOverviewDto>;
  public createIndividualCommand: RelayCommand;
  public deleteIndividualCommand: RelayCommand;
  public individuals: IndividualOverviewDto[] = [];
  public selectedIndividuals: IndividualOverviewDto[] = [];

  public constructor(
    private individualColDefBuilder: IndividualColDefBuilderService,
    private individualOverviewService: IndividualsOverviewService,
    private navigationService: IndividualsNavigationService,
    private snackBar: MatSnackBar) {
  }

  public createIndividual(): void {
    this.navigationService.navigateToCreateIndividual();
  }

  public ngOnInit(): void {
    this.columnDefinitions = this.individualColDefBuilder.buildDefinitions();

    this.deleteIndividualCommand = new RelayCommand(() => this.deleteIndividualAsync(), () => this.areIndividualsSelected);
    this.editIndividualCommand = new RelayCommand(() => this.editIndividual(), () => this.areIndividualsSelected);
    this.createIndividualCommand = new RelayCommand(() => this.navigationService.navigateToCreateIndividual(), () => true);

    setTimeout(() => {
      this.snackBar.open('Loading Individuals..', null, <MatSnackBarConfig<any>>{
        duration: 2500
      });
    });

    this.individualOverviewService.loadAllAsync().then(dtos => {
      this.individuals = dtos;

      this.snackBar.open('Individuals loaded.', null, <MatSnackBarConfig<any>>{
        duration: 2500
      });
    });
  }

  public rowSelectionChanged(selectedItems: IndividualOverviewDto[]): void {
    this.selectedIndividuals = selectedItems;
  }

  private async deleteIndividualAsync(): Promise<void> {
    await this.individualOverviewService.deleteIndividualsAsync(this.selectedIndividuals.map(ind => ind.individualId));
    this.table.deleteEntris(this.selectedIndividuals);
  }

  private editIndividual(): void {
    const selectedIndividualId = this.selectedIndividuals[0].individualId;
    this.navigationService.navigateToEditIndividual(selectedIndividualId);
  }

  private get areIndividualsSelected(): boolean {
    return this.selectedIndividuals && this.selectedIndividuals.length > 0;
  }
}
