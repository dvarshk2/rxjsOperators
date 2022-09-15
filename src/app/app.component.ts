import { Component, OnInit } from '@angular/core';
import { interval, map, tap, Observable, filter, fromEvent, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 0;
  obs$! : Observable<number>;

  ngOnInit(): void {
    // this.obs$ = interval(1000);
    // // this.obs$
    // //     .subscribe(console.log)
    // this.obs$.pipe(
    //   // tap(val => console.log(`Value in tap Operator ${val}`)),
    //   // map(val => val * 10),
    //   // filter(val => val <= 50)
    // )

// tap , map, filter >> Rxjs Operators in pipe

    // const click$ = fromEvent<PointerEvent>(document, 'click')
    // click$.pipe(
    //   map(val => val.clientX)
    // )
    // .subscribe(console.log)



    // from([
    //   {name: 'Varsh', age : 30},
    //   {name :'ketu', age : 32},
    //   {name : 'Hari', age : 22}
    // ]).pipe(
    //   // tap(val => console.log(val)),
    //   filter(({age})=> age > 25)
    // )
    // .subscribe(console.log)
    let count = 0;
    let myInterval = new Observable(
      observer => {
        setInterval(()=>{
          observer.next(count);
          if(count == 13){
            observer.error(new Error(`No one Use this number`))
          }
          count++  
        },1000)
      }
    )
    myInterval.subscribe(
      val => console.log(val),
      // err => console.log(err)
      
      
      
    )
  }

}
