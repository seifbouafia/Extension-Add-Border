import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-last-pass-icon',
  standalone: true,
  imports: [],
  template: '<div data-lastpass-icon-root style="position: relative !important; height: 0 !important; width: 0 !important; float: left !important;">\n' +
    '  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-lastpass-icon="true" style="position: absolute; cursor: pointer; height: 22px; max-height: 22px; width: 22px; max-width: 22px; top: 15px; left: 321px; z-index: auto; color: rgb(215, 64, 58);">\n' +
    '    <rect x="-0.680176" y="0.763062" width="22.6392" height="22.4737" rx="4" fill="currentColor"></rect>\n' +
    '    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7935 7.9516C19.7935 7.6444 20.0427 7.3949 20.3502 7.3949C20.6576 7.3949 20.9069 7.6444 20.9069 7.9516V16.0487C20.9069 16.3562 20.6576 16.6054 20.3502 16.6054C20.0427 16.6054 19.7935 16.3562 19.7935 16.0487V7.9516ZM15.8964 7.9516C15.8964 7.6444 16.1487 7.3949 16.405 7.3949C16.6613 7.3949 16.9136 7.6444 16.9136 7.9516V16.0487C16.9136 16.3562 16.6613 16.6054 16.405 16.6054C16.1487 16.6054 15.8964 16.3562 15.8964 16.0487V7.9516ZM11.9993 7.9516C11.9993 7.6444 12.2521 7.3949 12.5096 7.3949C12.7671 7.3949 13.0198 7.6444 13.0198 7.9516V16.0487C13.0198 16.3562 12.7671 16.6054 12.5096 16.6054C12.2521 16.6054 11.9993 16.3562 11.9993 16.0487V7.9516ZM8.1029 7.9516C8.1029 7.6444 8.3557 7.3949 8.6131 7.3949C8.8706 7.3949 9.1233 7.6444 9.1233 7.9516V16.0487C9.1233 16.3562 8.8706 16.6054 8.6131 16.6054C8.3557 16.6054 8.1029 16.3562 8.1029 16.0487V7.9516ZM4.2058 7.9516C4.2058 7.6444 4.4585 7.3949 4.716 7.3949C4.9735 7.3949 5.2262 7.6444 5.2262 7.9516V16.0487C5.2262 16.3562 4.9735 16.6054 4.716 16.6054C4.4585 16.6054 4.2058 16.3562 4.2058 16.0487V7.9516Z" fill="white"></path>\n' +
    '  </svg>\n' +
    '</div>',
  styleUrl: './last-pass-icon.component.css'
})
export class LastPassIconComponent implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    this.injectIcon();
  }

  injectIcon() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'absolute');
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.elementRef.nativeElement, 'top', '15px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'left', '321px');
  }

}
