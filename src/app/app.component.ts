import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  onAddBorderClick() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0].id !== undefined) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: addBorder,
        });
      }
    });
  }

}

fetch(chrome.runtime.getURL('assets/lastpass-icon.html'))
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
      const iconClone = lastPassIcon.cloneNode(true) as HTMLElement;
      inputElement.parentNode?.insertBefore(iconClone, inputElement.nextSibling);
    }

    document.querySelectorAll<HTMLInputElement>('input[type="password"], input[name="password"], input[type="name"], input[name="name"]').forEach(injectIcon);
  })
  .catch(error => console.error('Error fetching the LastPass icon:', error));





function addBorder() {
  document.body.style.border = "5px solid red";
}


