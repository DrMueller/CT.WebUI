import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { MatTableComponent, ColumnDefinitionsContainer } from '@drmueller/ng-material-extensions';
import { IndividualOverviewDto } from '../../dtos';
import { IndividualsOverviewService, IndividualsNavigationService } from '../../services';
import { IndividualColDefBuilderService } from '../../services';
import { AppSettingsProviderService } from 'src/app/infrastructure/core-services';

@Component({
  selector: 'app-individuals-overview',
  templateUrl: './individuals-overview.component.html',
  styleUrls: ['./individuals-overview.component.scss']
})
export class IndividualsOverviewComponent implements OnInit {
  @ViewChild(MatTableComponent) public table: MatTableComponent<IndividualOverviewDto>;
  public columnDefinitions: ColumnDefinitionsContainer<IndividualOverviewDto>;
  public individuals: IndividualOverviewDto[] = [];
  public selectedIndividuals: IndividualOverviewDto[] = [];

  public constructor(
    private individualColDefBuilder: IndividualColDefBuilderService,
    private individualOverviewService: IndividualsOverviewService,
    private navigationService: IndividualsNavigationService,
    private apSettingsProvider: AppSettingsProviderService,
    private snackBar: MatSnackBar) {
  }

  public createIndividual(): void {
    this.navigationService.navigateToCreateIndividual();
  }

  public async deleteSelectedIndividuals(): Promise<void> {
    await this.individualOverviewService.deleteIndividualsAsync(this.selectedIndividuals.map(ind => ind.individualId));
    this.table.deleteEntris(this.selectedIndividuals);
  }

  public editSelectedIndividual(): void {
    const selectedIndividualId = this.selectedIndividuals[0].individualId;
    this.navigationService.navigateToEditIndividual(selectedIndividualId);
  }

  public get areIndividualsSelected(): boolean {
    return this.selectedIndividuals && this.selectedIndividuals.length > 0;
  }

  public ngOnInit(): void {
    this.columnDefinitions = this.individualColDefBuilder.buildDefinitions();

    this.apSettingsProvider.provideAppSettingsAsync().then(tra => {

    });

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
}
