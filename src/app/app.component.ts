import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.detectPasswordInputs();
      }
    });
  }

  onAddBorderClick() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id !== undefined) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: addBorder,
        });
      }
    });
  }

  detectPasswordInputs() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id !== undefined) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: injectLastPassIcon,
        });
      }
    });
  }
}

function addBorder() {
  document.body.style.border = "5px solid red";
}

function injectLastPassIcon() {
  fetch(chrome.runtime.getURL('assets/app.component.html'))
    .then(response => response.text())
    .then(template => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(template, 'text/html');
      const lastPassIcon = doc.body.firstChild as HTMLElement;

      if (!lastPassIcon) {
        console.error('Failed to load the LastPass icon.');
        return;
      }

      function injectIcon(inputElement: HTMLInputElement) {
        const iconClone = lastPassIcon.cloneNode(true);
        inputElement.parentNode?.insertBefore(iconClone, inputElement.nextSibling);
      }

      document.querySelectorAll<HTMLInputElement>('input[type="password"], input[name="password"], input[type="name"], input[name="name"]').forEach(injectIcon);
    })
    .catch(error => console.error('Error fetching the LastPass icon:', error));
}
