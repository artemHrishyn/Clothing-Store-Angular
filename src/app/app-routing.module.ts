import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PersonalAreaComponent } from './pages/personal-area/personal-area.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CatalogProductsComponent } from './pages/catalog-products/catalog-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: "main", component: HomeComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "personal-area", component: PersonalAreaComponent },
  { path: "shopping-list", component: ShoppingListComponent },
  { path: "catalog-products", component: CatalogProductsComponent },
  { path: "**", component: NotFoundComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
