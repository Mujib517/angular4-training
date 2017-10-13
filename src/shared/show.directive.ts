import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[dlShow]',
    inputs: ['dlShow']
})
export class ShowDirective {

    constructor(private template: ElementRef, private render: Renderer) { }

    set dlShow(val: boolean) {
        if (val) {
            // this.template.nativeElement.style.display = "inline";
            this.render.setElementStyle(this.template.nativeElement, 'display', 'inline');
        }
        else {
            this.render.setElementStyle(this.template.nativeElement, 'display', 'none');
        }
    }
}