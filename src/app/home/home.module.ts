import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from "@angular/core";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LayoutComponent,
        DashboardComponent,
        HeaderComponent,
        SidebarComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        DragDropModule,
        MatSidenavModule,
        MatButtonModule,
        ReactiveFormsModule

    ],


})
export class HomeModule { }
