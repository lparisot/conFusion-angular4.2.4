import { trigger, state, style, animate, transition } from '@angular/animations';

// grow when appears, shrink when disappear
export function visibility() {
  return trigger('visibilityTrigger', [
    state('shown', style({
      transform: 'scale(1.0)',
      opacity: 1
    })),
    state('hidden', style({
      transform: 'scale(0.5)',
      opacity: 0
    })),
    transition('* => *', animate('0.5s ease-in-out'))
  ]);
}

// comes from left to right
export function flyInOut() {
  return trigger('flyInOutTrigger',[
    state('*', style({ transform: 'translateX(0)', opacity: 1 })),
    transition(':enter', [
      style({ transform: 'translateX(-100%)', opacity: 0 }),
      animate('500ms ease-in')
    ]),
    transition(':leave', [
      animate('500ms ease-out', style({ transform: 'translateX(100%)', opacity: 0}))
    ])
  ]);
}

// comes from top to bottom
export function expand() {
  return trigger('expandTrigger', [
    state('*', style({ transform: 'translateX(0)', opacity: 1 })),
    transition(':enter', [
      style({ transform: 'translateY(-50%)', opacity: 0 }),
      animate('200ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
    ])
  ]);
}
