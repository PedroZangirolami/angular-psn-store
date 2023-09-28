import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.css']
})
export class MenuLinksComponent implements OnInit {

  @Input()
  youtubeLink:string ="";
  @Input()
  linkedinLink:string ="";
  @Input()
  gitHubLink:string= "";

  constructor() { }

  ngOnInit(): void {
  }

}
