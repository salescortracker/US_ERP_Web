import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlphabetOnly]'
})

export class AlphabetOnlyDirective {
    @HostListener('input', ['$event'])
    onInputChange(event: KeyboardEvent) {
      const input = event.target as HTMLInputElement;
      const sanitized = input.value.replace(/[^a-zA-Z]*/g, '');
  
      input.value = sanitized;
    }
  
    @HostListener('paste', ['$event'])
    onPaste(event: ClipboardEvent) {
      event.preventDefault();
      const input = event.target as HTMLInputElement;
      input.value = '';
    }
}
