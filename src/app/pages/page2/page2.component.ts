import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})

export class Page2Component {
  // ID sous format string 
  id:string; 
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

}
