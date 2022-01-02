import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'red';
  @Input() highlightColor = 'pink';
  @HostBinding('style.backgroundColor') backgroundColor = 'blue';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','pink');
  }

  @HostListener('mouseenter') mouseover(eventData: Event): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'pink'
    );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event): void {
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }
}
