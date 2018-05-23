import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  // template: ``,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [
      state('false', style({
        background: '#fff'
      })),
      state('true', style({
        background: '#ffcc00'
      })),
      transition('true <=> false', [
        animate('500ms ease-in-out', keyframes([
          style({ transform: 'translateX(0)', offset: 0 }),
          style({ transform: 'translateX(50px) translateY(-10px)', offset: 0.4 }),
          style({ transform: 'translateX(0)', offset: 1 })
        ]))
      ]),
      // transition('true <=> false', [
      //   style({
      //     transform: 'translate(20px, 40px)'
      //   }),
      //   animate('1500ms ease-in')
      // ]),

    ])
  ] 
})
export class AppComponent implements OnInit{
  
  title = 'Try-Angular-App';

  query: string;
  artists: object;
  currentArtist: object;

  animationState = false;

  constructor(private http: HttpClient){
    this.query = "";
  }

  showArtist(e, item){
    console.log(e);
    this.query = "";


    // item.highlight = !item.highlight;
    this.currentArtist = item;
  }

  ngOnInit(): void {
    this.http
      .get<Object>("https://gist.githubusercontent.com/shibli049/4f5c275eea52ac115935e7de1745df99/raw/27d4811f120b784ca9e35182419cffea377439b7/data.json")
      .subscribe(
        data => {
          this.artists = data;
        });
  }


  animate(){
    this.animationState = !this.animationState;
  }

}