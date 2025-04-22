let page = 1;
const settings = {};

const app = document.getElementById("app");

const pages = {
  1: () => {
    app.innerHTML = `
      <h1>Welcome to Asa's Dyslexia Tool!</h1>
      <p>This tool helps you create a reading view that works better for your eyes.</p>
      <button onclick="next()">Start</button>
    `;
  },

  2: () => {
    app.innerHTML = `<h2>Which font is easiest to read?</h2>`;
    ['Arial', 'Georgia', 'Verdana', 'Times New Roman'].forEach(font => {
      const btn = createButton(font, () => saveAndNext('font', font));
      btn.style.fontFamily = font;
      app.appendChild(btn);
    });
  },

  3: () => {
    app.innerHTML = `<h2>What size text feels best?</h2>`;
    [
      ['Small', '14px'],
      ['Medium', '18px'],
      ['Large', '22px'],
      ['Extra Large', '28px']
    ].forEach(([label, value]) => {
      app.appendChild(createButton(label, () => saveAndNext('textSize', value)));
    });
  },

  4: () => {
    app.innerHTML = `<h2>Do you want extra space between lines?</h2>`;
    [
      ['Normal', '1.5'],
      ['A little more', '1.75'],
      ['Double spaced', '2']
    ].forEach(([label, value]) => {
      app.appendChild(createButton(label, () => saveAndNext('lineSpacing', value)));
    });
  },

  5: () => {
    app.innerHTML = `<h2>Which background helps your eyes the most?</h2>`;
    [
      ['White', 'white'],
      ['Light Yellow', '#fff9c4'],
      ['Soft Gray', '#f0f0f0'],
      ['Dark (Black with light text)', 'black']
    ].forEach(([label, value]) => {
      app.appendChild(createButton(label, () => saveAndNext('backgroundColor', value)));
    });
  },

  6: () => {
    app.innerHTML = `<h2>Do you want more space between words?</h2>`;
    [
      ['Normal', 'normal'],
      ['A little more', '0.3em'],
      ['Lots more', '0.6em']
    ].forEach(([label, value]) => {
      app.appendChild(createButton(label, () => saveAndNext('wordSpacing', value)));
    });
  },

  7: () => {
    app.innerHTML = `<h2>Do you want more space between letters?</h2>`;
    [
      ['Normal', 'normal'],
      ['A little more', '0.05em'],
      ['Lots more', '0.1em']
    ].forEach(([label, value]) => {
      app.appendChild(createButton(label, () => saveAndNext('letterSpacing', value)));
    });
  },

  8: () => {
    app.innerHTML = `<h2>Do you prefer bold text?</h2>`;
    [
      ['Normal weight', 'normal'],
      ['Bold', 'bold']
    ].forEach(([label, value]) => {
      app.appendChild(createButton(label, () => saveAndNext('bold', value)));
    });
  },

  9: () => {
    app.innerHTML = `<h2>Do you want underlined text?</h2>`;
    [
      ['No underline', 'none'],
      ['Underline all text', 'underline']
    ].forEach(([label, value]) => {
      app.appendChild(createButton(label, () => saveAndNext('underline', value)));
    });
  },

  10: () => {
    const style = applyStyles();
    app.innerHTML = `
      <div style="${style}">
        <h2>Your Reading View</h2>
        <p>This is your custom reading view! You can use this layout to help reduce stress and make reading easier.</p>
      </div>
    `;
  }
};

function next() {
  page++;
  render();
}

function saveAndNext(key, value) {
  settings[key] = value;
  next();
}

function createButton(label, onClick) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.onclick = onClick;
  return btn;
}

function applyStyles() {
  const s = settings;
  const fontMap = {
    'Arial': 'Arial, sans-serif',
    'Georgia': 'Georgia, serif',
    'Verdana': 'Verdana, sans-serif',
    'Times New Roman': '"Times New Roman", serif',
  };

  const color = s.backgroundColor === 'black' ? 'white' : 'black';

  return `
    font-family: ${fontMap[s.font] || 'inherit'};
    font-size: ${s.textSize};
    line-height: ${s.lineSpacing};
    background-color: ${s.backgroundColor};
    color: ${color};
    word-spacing: ${s.wordSpacing};
    letter-spacing: ${s.letterSpacing};
    font-weight: ${s.bold};
    text-decoration: ${s.underline};
    padding: 30px;
    border-radius: 10px;
    max-width: 700px;
    margin: auto;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
  `;
}

function render() {
  pages[page]();
}

// Start
render();
