import { trigger, transition, style, animate } from '@angular/animations';

export const flipIn = trigger('flipIn', [
  transition(':enter', [
    style({opacity: 0, transform: 'translateY(-20px)'}),
    animate(1000)
  ])
]);

export const zoomIn = trigger('zoomIn', [
  transition(':enter', [
    style({opacity: 0, transform: 'scale(0.6)'}),
    animate(1000)
  ])
]);
