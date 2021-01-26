{/* <span><div class="gama-academy-banner"><h2>Gama Academy</h2></div></span> */}
let Home = {
  render: async () => {
    const isLogged = localStorage.getItem('@token');
    let view = `
  <section class="home-component container area">
    <div class="d-flex mt-5 mb-5">
      <div class="col-md-6 m-auto text-center">
        <div class="home-card card w-100 p-5 mb-3" style="width: 18rem;">
          <h2 class="home-title mt-5 mb-4 text-center">Academia Accenture</h2>
          <p class="text-center">
            Treinamentos direcionados para o mercado de trabalho.
          </p>
        </div>
        ${ !isLogged ?
          `<a href="/#/signup">
            <button class="register-button btn btn-dark">Cadastre-se</button>
          </a>`
          :
          ``
        }
      </div>
      <div class="col-md-6 m-auto">
        <div class="fluid text-center pt-5">
          <h2></h2>
        </div>
        <img class="img-fluid m-auto" width="100%" style="transform: scale(0.6);" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="imagem bootstrap">
      </div>
    </div>
  </section>
    `

    return view;
  },
  after_render: async () => {
    // const focusHomeButton = document.getElementById('homeLink');
    // focusHomeButton.classList.add('focus-bg');
  }
}

export default Home;