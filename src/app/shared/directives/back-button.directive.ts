import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackButton]',
  standalone: true
})
export class BackButtonDirective {
  public constructor(private readonly location: Location) { }

  @HostListener('click')
  protected onClick(): void {
    this.location.back();
  }
}
