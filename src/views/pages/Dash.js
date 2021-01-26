import { isAuth } from '../../services/Auth.js';

let Dash = {
  render: async () => {
    const isLogged = sessionStorage.getItem('@token');
    const routeRedirect = 'login';
    const auth = await isAuth(isLogged, routeRedirect);

    let view = `
<div class="container area">
  <div class="container d-flex justify-content-center">
    <div class="card m-3" style="width: 18rem;">
      <img class="card-img-top" style="transform: scale(0.7)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div class="card m-3" style="width: 18rem;">
      <img class="card-img-top mt-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Card image cap">
      <div class="card-body">
        <p class="card-text mt-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div class="card m-3" style="width: 18rem;">
      <img class="card-img-top mt-4" style="transform: scale(0.6);" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>

  <div class="container text-center my-5 py-5">
    <div class="card text-center p-5">
      <h2>Conteúdo da Semana!</h2>
      <p class="text-start">  
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus fugiat aspernatur rem quia velit! Blanditiis cupiditate ducimus quo, voluptates, rerum accusantium hic nulla odit nisi qui repudiandae ab earum distinctio.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus fugiat aspernatur rem quia velit! Blanditiis cupiditate ducimus quo, voluptates, rerum accusantium hic nulla odit nisi qui repudiandae ab earum distinctio.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus fugiat aspernatur rem quia velit! Blanditiis cupiditate ducimus quo, voluptates, rerum accusantium hic nulla odit nisi qui repudiandae ab earum distinctio.
      </p>
      </div>
      <button class="btn btn-dark mt-2">Estudar</button>
  </div>

  <div class="container my-5 py-5">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `;

    return view;
  },
  after_render: async () => {
    const focusDashButton = document.getElementById('dashLink');
    const logoutBtn = document.getElementById('loginLink');
    focusDashButton.classList.add('focus-bg');

    function logout() {
      clearStorage();
      redirectTo('');
    }

    logoutBtn.addEventListener('click', () => logout())

  }
}

export default Dash;
    