import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LastPassIconComponent} from "./last-pass-icon/last-pass-icon.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LastPassIconComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
}

function addBorder() {
  document.body.style.border = "5px solid red";
}
