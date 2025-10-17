(() => {
  const captchaImage = document.getElementById('captchaImage');
  const solution = document.getElementById('solution');

  async function solveCaptcha() {
    const response = await fetch('/api/solve', {
      method: 'POST',
      body: new FormData(),
      headers: {
        'X-Captcha-Image': captchaImage.src
      }
    });

    const text = await response.text();
    solution.innerHTML = text;
  }

  captchaImage.addEventListener('load', solveCaptcha);
})();
