import baseURL from '../../services/baseURL.js';

let Login = {
  render: async () => {
    let view = `
  <section class="container h-100 my-5">
    <div class="row mt-5 mb-5">
      <div class="col-md-6 m-auto">
        <div class="fluid text-center pt-5">
          <h2>Bem-Vindo(a)! Faça o login</h2>
        </div>
        <img class="img-fluid m-auto" width="100%" style="transform: scale(0.6)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="imagem bootstrap">
      </div>
      <div class="col-md-6 m-auto">
        <div class="card w-100 p-5" style="width: 18rem;">
          <h2 class="mt-5 mb-4 text-center">Informe aqui seu usuário e senha</h2>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label text-success">Email</label>
              <input type="email" class="form-control" id="usuario" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">Seu E-mail não será divulgado.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label text-success">Senha</label>
              <input type="password" class="form-control" id="password">
            </div>
            <button type="button" id="submit_login" class="btn btn-dark">Logar</button>
          </form>
        </div>
      </div>
    </div>
  </section>
    
    `;

    return view;
  },
  after_render: async () => {
    document.getElementById('submit_login').addEventListener('click', () => {

      let nameValue = document.getElementById('usuario').value,
          passwordValue = document.getElementById('password').value

      axios.post(`${baseURL}login`, {
        usuario: nameValue, 
        senha: passwordValue
      })
      .then( res => {
        if (res.status === 200) {
          sessionStorage.setItem('name', res.data.usuario.nome);
          Cookies.set('@token', res.data.usuario.token, { expires: 1 });
          location.replace('/#/dashboard');

          return res.status;

        } else {
          alert('algo de errado aconteceu!');
        }
          
        }
      );
    });


  }
}

export default Login;