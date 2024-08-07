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

    function injectIcon(inputElement : HTMLInputElement) {
      const iconClone = lastPassIcon.cloneNode(true)
      inputElement.parentNode?.insertBefore(iconClone, inputElement.nextSibling);
    }

    document.querySelectorAll<HTMLInputElement>('input[type="password"], input[name="password"], input[type="name"], input[name="name"]').forEach(injectIcon);
  })
  .catch(error => console.error('Error fetching the LastPass icon:', error));
