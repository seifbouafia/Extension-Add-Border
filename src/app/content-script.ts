import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {enableProdMode} from "@angular/core";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.querySelectorAll<HTMLInputElement>('input[type="password"], input[name="password"], input[type="name"], input[name="name"]').forEach((inputElement) => {
  const lastPassIconContainer = document.createElement('div');
  inputElement.parentNode?.insertBefore(lastPassIconContainer, inputElement.nextSibling);

  // Bootstrap Angular inside the created div
  platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
    const appRoot = document.createElement('app-last-pass-icon');
    lastPassIconContainer.appendChild(appRoot);
  }).catch(err => console.error(err));
});
