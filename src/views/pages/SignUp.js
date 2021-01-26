import baseURL from '../../services/baseURL.js';

let SignUp = {
  render: async () => {
    let view = `
  <section class="container area h-100">
    <div class="row mt-5 mb-5">
      <div class="col-md-6 m-auto">
        <div class="fluid text-center pt-5">
          <h2>Bem-Vindo(a)! Faça o cadastro e acesse agora mesmo!</h2>
        </div>
        <img class="img-fluid m-auto" width="100%" style="transform: scale(0.6)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="imagem bootstrap">
      </div>
      <div class="col-md-6 m-auto">
        <div class="card w-100 p-5" style="width: 18rem;">
          <h2 class="mt-5 mb-4 text-center">Informe aqui seu usuário e senha</h2>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label text-success">CPF</label>
              <input type="text" class="form-control" id="cpf" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label text-success">Login</label>
              <input type="text" class="form-control" id="login">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label text-success">Nome</label>
              <input type="text" class="form-control" id="nome">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label text-success">Senha</label>
              <input type="password" class="form-control" id="password">
            </div>
            <button type="button" id="submit_new_register" class="btn btn-dark">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  </section>
    `;

    return view;
  },
  after_render: async () => {
    document.getElementById('submit_new_register').addEventListener('click', () => {
      let cpfValue = document.getElementById('cpf').value.replace(/[^\d]/g, ""),
          // idValue = document.getElementById('id').value,
          loginValue = document.getElementById('login').value,
          nameValue = document.getElementById('nome').value,
          passwordValue = document.getElementById('password').value
      
      axios.post(`${baseURL}usuarios`, {
        cpf: cpfValue, 
        // id: idValue, 
        login: loginValue, 
        nome: nameValue, 
        senha: passwordValue 
      }, {
        headers : {
          'Content-Type': 'application/json'
      }
      })
      .then((res) => {
        if (res.status === 200) {
          sessionStorage.setItem('name', nameValue);
          sessionStorage.setItem('email', loginValue);
          Cookies.set('@token', res.data.token, { expires: 1 });
          location.replace('/#/dashboard');
        }
        return console.log(res.status);
      });
      
    })
  }
}

export default SignUp;

