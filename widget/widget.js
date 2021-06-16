const createWidget = () => {
  let elem = document.createElement('div');
  elem.style.cssText = `
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: red;
    color: black;
  `;
  elem.addEventListener('click', (e) => {
    e.currentTarget.remove();
    widgetSetting();
  });
  document.body.appendChild(elem);
};

const widgetSetting = () => {
  let settings = document.createElement('div');
  settings.innerHTML = '<p>HI!</p>';
  settings.style.cssText = `
    height: 400px;
    width: 400px;
    background-color: pink;
  `;
  settings.addEventListener('click', (e) => {
    e.currentTarget.remove();
    createWidget();
  });
  document.body.appendChild(settings);
};

createWidget();
// console.log(window.spa.q[0][1]);
