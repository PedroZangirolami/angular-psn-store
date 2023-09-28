import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input()
  logoCover:string = "";
  @Input()
  youtubeLink:string ="https://www.youtube.com/channel/UC1el-D6lCv9UpSIROdbFx4A";
  @Input()
  linkedinLink:string ="https://www.linkedin.com/in/pedro-zangirolami-a2aa721b7/";
  @Input()
  gitHubLink:string= "https://github.com/PedroZangirolami";
  

  constructor() { }

  ngOnInit(): void {
  }

}
