import { Component, OnInit } from '@angular/core';
import { ScriptService } from '@app/shared/services/script.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public scriptService:ScriptService
  ) { }

  ngOnInit(): void {
  }

}
