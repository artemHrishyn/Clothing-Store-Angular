import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { ProcessingDataService } from './service/processing-data/processing-data.service';
import { ReceivingDataService } from './service/receiving-data/receiving-data.service';
import { ProductService } from './service/product/product.service';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { PagesModule } from './pages/pages.module';
import { HeaderModule } from './components/header/header.module';
import { GoToUrlService } from './service/goToUrl/go-to-url.service';
import { PipeModule } from './pipe/pipe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"online-clothing-store-34e45","appId":"1:980902698741:web:5c0088fb542be270442fbc","databaseURL":"https://online-clothing-store-34e45-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"online-clothing-store-34e45.appspot.com","apiKey":"AIzaSyA6z52TNDyl9Ry5STozAqQ2D2wmu1vBxpQ","authDomain":"online-clothing-store-34e45.firebaseapp.com","messagingSenderId":"980902698741","measurementId":"G-NMG8ZNYM6M"})),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideStorage(() => getStorage()),
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HeaderModule,
    PipeModule
  ],
  exports: [],
  providers: [
    ReceivingDataService,
    ProcessingDataService,
    ProductService,
    ScreenTrackingService,
    UserTrackingService,
    GoToUrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
