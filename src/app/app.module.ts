import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PersonalAreaComponent } from './pages/personal-area/personal-area.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ProcessingDataService } from './service/processing-data/processing-data.service';
import { ReceivingDataService } from './service/receiving-data/receiving-data.service';
import { MixElementsPipe } from './pipe/mix-elements/mix-elements.pipe';
import { CatalogProductsComponent } from './pages/catalog-products/catalog-products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductService } from './service/product/product.service';
import { BuyComponent } from './components/buy/buy.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { FormsModule } from '@angular/forms';
import { CounterPipe } from './pipe/counter/counter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    NotFoundComponent,
    PersonalAreaComponent,
    ShoppingListComponent,
    MixElementsPipe,
    CatalogProductsComponent,
    ProductItemComponent,
    BuyComponent,
    CounterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"online-clothing-store-34e45","appId":"1:980902698741:web:5c0088fb542be270442fbc","databaseURL":"https://online-clothing-store-34e45-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"online-clothing-store-34e45.appspot.com","apiKey":"AIzaSyA6z52TNDyl9Ry5STozAqQ2D2wmu1vBxpQ","authDomain":"online-clothing-store-34e45.firebaseapp.com","messagingSenderId":"980902698741","measurementId":"G-NMG8ZNYM6M"})),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    NgbModule
  ],
  exports: [
    BuyComponent
  ],
  providers: [
    ReceivingDataService,
    ProcessingDataService,
    MixElementsPipe,
    CounterPipe,
    ProductService,
    BuyComponent,
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
