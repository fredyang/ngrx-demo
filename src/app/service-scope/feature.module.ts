import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { DoubletonService } from './doubleton.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  // unlike the app module, we don't provide singleton service here
  // but we do provide doubleton service, which will be a new instance
  // for each feature module
  providers: [DoubletonService],
})
export class FeatureModule {}
