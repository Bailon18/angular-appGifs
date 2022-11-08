import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {


  get historial(){
    return this.gifservice.historial;
  }

  constructor(private gifservice: GifsService) {}
  ngOnInit(): void {
  }

}
