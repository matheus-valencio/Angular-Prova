import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { MatheusComponentComponent } from './matheus-component/matheus-component.component';
import { MatheusListaComponentComponent } from './matheus-lista-component/matheus-lista-component.component';
import { MatheusDetalhesComponentComponent } from './matheus-detalhes-component/matheus-detalhes-component.component';
import { MatheusDisciplinasServiceService } from './matheus-disciplinas-service.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MatheusComponentComponent },
      { path: 'lista', component: MatheusListaComponentComponent },
      { path: 'lista/:index', component: MatheusDetalhesComponentComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MatheusComponentComponent,
    MatheusListaComponentComponent,
    MatheusDetalhesComponentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [MatheusDisciplinasServiceService],
})
export class AppModule {}
