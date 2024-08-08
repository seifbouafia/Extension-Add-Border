function injectLastPassIcon() {
  const lastPassIconUrl = 'https://example.com/lastpass-icon.svg'; // Replace with the actual URL to the LastPass icon SVG

  fetch(lastPassIconUrl)
    .then(response => response.text())
    .then(svgTemplate => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgTemplate, 'image/svg+xml');
      const lastPassIcon = doc.documentElement as HTMLElement;

      if (!lastPassIcon) {
        console.error('Failed to load the LastPass icon.');
        return;
      }

      function injectIcon(inputElement: HTMLInputElement) {
        const iconClone = lastPassIcon.cloneNode(true);
        inputElement.parentNode?.insertBefore(iconClone, inputElement.nextSibling);
      }

      const passwordInputs = document.querySelectorAll<HTMLInputElement>('input[type="password"], input[name="password"], input[type="name"], input[name="name"]');
      passwordInputs.forEach(injectIcon);

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            const newPasswordInputs = document.querySelectorAll<HTMLInputElement>('input[type="password"], input[name="password"], input[type="name"], input[name="name"]');
            newPasswordInputs.forEach(injectIcon);
          }
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
    })
    .catch(error => console.error('Error fetching the LastPass icon:', error));
}
