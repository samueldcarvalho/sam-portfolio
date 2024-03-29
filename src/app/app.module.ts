import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomTranslateLoader } from './services/custom-translate-loader';
import { register } from 'swiper/element/bundle';
import { ProjectInfoModalComponent } from './components/project-info-modal/project-info-modal.component';
import { DialogService } from './services/dialog-service';

register();

@NgModule({
  declarations: [AppComponent, HomeComponent, ProjectInfoModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    TranslateModule.forRoot({
      defaultLanguage: "ptbr",
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader
      }
    }),
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
