import {Directive, Input, ElementRef, OnInit} from '@angular/core';

declare var $: any;


@Directive({
    selector: '[saMaskedInput]'
})
export class MaskedInput implements OnInit{

    @Input() saMaskedInput: string;
    @Input() saMaskedPlaceholder: string;

    constructor(private el: ElementRef) {}

    ngOnInit(){
            let options = this.saMaskedPlaceholder ? {placeholder: this.saMaskedPlaceholder} : '';
            $(this.el.nativeElement).mask(this.saMaskedInput, options)
        
    }

}
