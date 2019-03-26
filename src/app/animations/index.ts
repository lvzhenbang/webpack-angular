import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
// for nested-route, using in scoend.component
export const flipIn = trigger('flipIn', [
  transition(':enter', [
    style({opacity: 0, transform: 'translateY(-20px)'}),
    animate('1s ease-in-out')
  ])
]);
// zoomIn for newscenter -> newslist.component
export const zoomIn = trigger('zoomIn', [
  transition(':enter', [
    style({opacity: 0, transform: 'scale(0.6)'}),
    animate('1s ease-in-out')
  ])
]);
// rightIn for styleus.component
export const rightIn = trigger('rightIn', [
  transition(':enter', [
    query(':enter', style({opacity: 0}), {optional: true}),
    query(':enter', stagger('300ms', [
      style({opacity: 0, transform: 'translateX(20px)'}),
      animate('300ms 300ms ease-in-out')
    ]), {optional: true}),
  ])
]);
// indexIn for index.component
export const indexIn = trigger('indexIn', [
  transition(':enter', [
    query(':enter', style({opacity: 0, transform: 'translateX(20px)'})),
    query(':enter', stagger('300ms', [
      animate('300ms ease-in-out', style({opacity: 1, transform: 'translateX(0)'}))
    ])),
  ])
]);
