import {redirectTo, isAuth, clearStorage } from '../../services/Auth.js';

let Header = {
  render: async () => {
    const isLogged = sessionStorage.getItem('@token');
    const displayName = isLogged ? sessionStorage.getItem('nome') : 'Visitante';

    let view = `
    <header class="align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
      <nav class="navbar navbar-expand-lg navbar-white">
        <div class="container-fluid">
          <div class="d-flex align-items-center">
            <a class="navbar-brand text-dark" href="#"><h1>Olá ${displayName}!</h1></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse color-dark" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="navbar-link nav-link active text-dark" aria-current="page" href="#">Accenture</a>
              </li>
              <li class="nav-item">
                <a class="navbar-link nav-link text-dark" href="#">Gama Academy</a>
              </li>
              ${isLogged ? 
                `<li class="nav-item">
                  <a style="cursor: pointer;" class="navbar-link nav-link text-dark font-weight-bold" id="dashLink">DashBoard</a>
                </li>
                <li class="nav-item">
                <a style="cursor: pointer;" class="navbar-link nav-link text-dark font-weight-bold" id="logoutLink">Logout</a>`
                :
                ('<a style="cursor: pointer;" class="navbar-link nav-link text-dark font-weight-bold" id="loginLink">Login</a>')
              }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    `;

    return view;
  },
  after_render: async () => {
    const dashboardButton = null || document.getElementById('dashLink');
    const logoutButton = null || document.getElementById('logoutLink');
    const loginButton = null || document.getElementById('loginLink');

    if (logoutButton) {
      dashboardButton.addEventListener('click', () => {
        redirectTo('dashboard');
      }),
      logoutButton.addEventListener('click', () => {
        clearStorage();
        redirectTo('');
      })
    } 
    if (loginButton) {
      loginButton.addEventListener('click', () => {
        redirectTo('login');
      })
    }
  }
}

export default Header;

