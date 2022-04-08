import { Component, OnInit } from '@angular/core';
import { MatheusDisciplinasServiceService } from '../matheus-disciplinas-service.service';

@Component({
  selector: 'app-matheus-lista-component',
  templateUrl: './matheus-lista-component.component.html',
  styleUrls: ['./matheus-lista-component.component.css'],
})
export class MatheusListaComponentComponent implements OnInit {
  constructor(public disciplinas: MatheusDisciplinasServiceService) {}

  ngOnInit() {}
}
