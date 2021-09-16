import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [

  { path: '', component: IndexComponent },
  { path: 'weather', component: WeatherComponent },
  //{ path: '**', component:  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
