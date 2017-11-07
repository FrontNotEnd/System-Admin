import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { HomeComponent } from './page/home/home.component';
import { FormsComponent } from './page/forms/forms.component';
import { InputsComponent } from './page/forms/inputs/inputs.component';
import { FormGroupComponent } from './page/forms/form-group/form-group.component';
import { MapsComponent } from './page/maps/maps.component';
import { GoogleComponent } from './page/maps/google/google.component';
import { LeafletComponent } from './page/maps/leaflet/leaflet.component';
import { AmapComponent } from './page/maps/amap/amap.component';
import { ChartsComponent } from './page/charts/charts.component';
import { ChartComponent } from './page/charts/chart/chart.component';
import { EchartsComponent } from './page/charts/echarts/echarts.component';
import { D3Component } from './page/charts/d3/d3.component';
import { PaneleComponent } from './page/panele/panele.component';
import { GitCommentComponent } from './page/panele/git-comment/git-comment.component';
import { EditorsComponent } from './page/panele/editors/editors.component';
import { TableComponent } from './page/table/table.component';
import { AllUiComponent } from './all-ui/all-ui.component';
import { ButtonsComponent } from './all-ui/buttons/buttons.component';
import { GridsComponent } from './all-ui/grids/grids.component';
import { ModalsComponent } from './all-ui/modals/modals.component';
import { AnimationsComponent } from './all-ui/animations/animations.component';
import { TabsComponent } from './all-ui/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LayoutsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FormsComponent,
    InputsComponent,
    FormGroupComponent,
    MapsComponent,
    GoogleComponent,
    LeafletComponent,
    AmapComponent,
    ChartsComponent,
    ChartComponent,
    EchartsComponent,
    D3Component,
    PaneleComponent,
    GitCommentComponent,
    EditorsComponent,
    TableComponent,
    AllUiComponent,
    ButtonsComponent,
    GridsComponent,
    ModalsComponent,
    AnimationsComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
