// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ProjectsComponent } from './components/projects/projects.component';


const appRoutes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'sobre-mi', component: AboutComponent },
    { path: 'proyectos', component: ProjectsComponent },
    { path: 'crear-proyecto', component: CreateComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'proyecto/:id', component: DetailComponent },
    { path: 'editar-proyecto/:id', component: EditComponent },
    { path: '**', redirectTo: '' }
];

// Exportar el módulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);