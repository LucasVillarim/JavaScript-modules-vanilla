// Pages
import Home from './views/pages/Home.js';
import Login from './views/pages/Login.js';
import SignUp from './views/pages/SignUp.js';
import Dash from './views/pages/Dash.js';
import Error404 from './views/pages/Error404.js';
// Components
import Header from './views/components/Nav.js';
import Footer from './views/components/Footer.js';

import Utils from './services/Utils.js';

let routes = {
  '/': Home,
  '/signup': SignUp,
  '/login': Login,
  '/dashboard': Dash
}

const router = async () => {

  // Select
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('container');
  const footer = null || document.getElementById('footer');

  header.innerHTML = await Header.render();
  await Header.after_render();
  content.innerHTML = await Home.render();
  await Home.after_render();
  footer.innerHTML = await Footer.render();


  let request = Utils.parseRequestURL();
  let parseURL = (request.resource ? '/' + request.resource : '/') + (request.verb ? '/' + request.verb : '')
  let page = routes[parseURL] ? routes[parseURL] : Error404;
  content.innerHTML = await page.render();
  await page.after_render();

}

// Observar as mudanças na URL
window.addEventListener('hashchange', router);

// carregamento da página
window.addEventListener('load', router);
