import { print } from './helpers';

import { Observable } from 'rxjs';

// create the observale
const source$ = Observable.create( observer => {
	// trigger the values with .next
	observer.next('Value 1')
	observer.next('Value 2')
	observer.next('Value 3')
	observer.next('Value 4')
})

// subscribe to the observable and output the values
source$.subscribe(value => print(value))
