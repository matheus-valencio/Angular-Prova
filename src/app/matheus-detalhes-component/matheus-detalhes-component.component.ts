import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatheusDisciplinasServiceService } from '../matheus-disciplinas-service.service';

@Component({
  selector: 'app-matheus-detalhes-component',
  templateUrl: './matheus-detalhes-component.component.html',
  styleUrls: ['./matheus-detalhes-component.component.css'],
})
export class MatheusDetalhesComponentComponent implements OnInit {
  item;
  constructor(
    public disciplinas: MatheusDisciplinasServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.item = this.disciplinas.getLista()[params.get('index')];
    });
  }
}
