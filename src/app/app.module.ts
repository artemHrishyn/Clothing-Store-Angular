import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './service/product/product.service';
import { ProcessingDataService } from './service/processing-data/processing-data.service';
import { ReceivingDataService } from './service/receiving-data/receiving-data.service';
import { GoToUrlService } from './service/goToUrl/go-to-url.service';
import { PipeModule } from './pipe/pipe.module';
import { MainBlockModule } from './components/main-block/main-block.module';
import { PagesModule } from './pages/pages.module';
import { FirebaseDataModule } from './service/receiving-data/firebase-data.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    PipeModule,
    MainBlockModule,
    FirebaseDataModule
  ],
  exports: [],
  providers: [
    ReceivingDataService,
    ProcessingDataService,
    ProductService,
    GoToUrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
