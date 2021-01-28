import {redirectTo, isAuth, clearStorage } from '../../services/Auth.js';

let Header = {
  render: async () => {
    const isLogged =      localStorage.getItem('@token');
    const { saldo } =     isLogged ? JSON.parse(localStorage.getItem('conta')) : '';
    const { nome, id } =  isLogged ? JSON.parse(localStorage.getItem('usuario')) : '';
    const displayName =   isLogged ? nome : 'Visitante';
    const displaySaldo =  isLogged ? saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) : 'R$ 0,00';

    let view = `
                ${isLogged ? `
                  <span class="saldo fw-bold">Saldo: ${displaySaldo}</span>
                ` : ''}
                <header class="header">
                  <div class="logo d-flex align-items-center justify-content-between">
                    <h1>Olá ${displayName}!</h1>
                  </div>
                  <div class="navigation">
                    <div class="navbar-buttons">
                      <a class="navbar-link" href="/#/" id="homeLink">Home</a>
                      ${isLogged 
                        ? 
                          `
                          <a class="navbar-link" id="dashLink">DashBoard</a>
                          <a class="navbar-link" id="logoutLink">Logout</a>
                          ` 
                        : 
                          `<a class="navbar-link" id="loginLink">Login</a>
                          <a class="navbar-link" id="registerLink">Cadastrar</a>
                          `
                        }
                    </div>
                  </div>
                </header>
                `
    return view;
  },
  after_render: async () => {
    const dashboardButton = '' || document.getElementById('dashLink');
    const registerButton =  '' || document.getElementById('registerLink');
    const logoutButton =    '' || document.getElementById('logoutLink');
    const loginButton =     '' || document.getElementById('loginLink');

    logoutButton && dashboardButton.addEventListener('click', () => {
      redirectTo('dashboard');
    }),

    logoutButton && logoutButton.addEventListener('click', () => {
      clearStorage();
      redirectTo('');
      window.location.reload();
    })

    loginButton && registerButton.addEventListener('click', () => {
      redirectTo('signup');
    })

    loginButton && loginButton.addEventListener('click', () => {
      redirectTo('login');
    })
  }
}

export default Header;

