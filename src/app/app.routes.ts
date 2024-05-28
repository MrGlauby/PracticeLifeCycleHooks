import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EdmontonOilersComponent } from './pages/edmonton-oilers/edmonton-oilers.component';
import { TorontoMapleLeafsComponent } from './pages/toronto-maple-leafs/toronto-maple-leafs.component';
import { TampaBayLightningComponent } from './pages/tampa-bay-lightning/tampa-bay-lightning.component';
import { ClientBoardPageComponent } from './pages/client.board.page/client.board.page.component';
import { ClientDetailPageComponent } from './pages/client-detail-page/client-detail-page.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'edmonton-oilers',
    component: EdmontonOilersComponent
  },

  {
    path: 'toronto-maple-leafs',
    component: TorontoMapleLeafsComponent
  },

  {
    path: 'tampa-bay-lightning',
    component: TampaBayLightningComponent
  },

  {
    path: 'client.board.page',
    component: ClientBoardPageComponent
  },

  {
    path: 'client-detail-page',
    component: ClientDetailPageComponent
  },

  {
    path: '**',
    redirectTo: '/home'
  },

];