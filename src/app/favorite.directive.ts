<<<<<<< HEAD
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[lzFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;

  @HostBinding('class.is-favorite-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }

  @Input() set lzFavorite(value) {
    this.isFavorite = value;
  }
}
=======
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[lzFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;

  @HostBinding('class.is-favorite-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }

  @Input() set lzFavorite(value) {
    this.isFavorite = value;
  }
}
>>>>>>> 01744e80458bd71127097f3467752037aad862fd
