import { Observable, Subject } from 'rxjs';

let o = Observable.from([1,2,3,4]).pairwise();

o.subscribe(x => console.log(x));

let o1 = new Observable((observer) => {
  console.log('start obsersable');
  observer.next('pushed');
  observer.next('pushed');
  setTimeout(() => observer.next('pushed async'));
});

console.log('start subscribe');
o1.subscribe(x => console.log('subscriber received: ' + x));
console.log('end subscribe');

