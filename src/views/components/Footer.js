let Footer = {
  render: async () => {
    const currentPage = window.location.href;
    const path = currentPage.split('/').slice(-1)[0];
    const show = path === '#' || path === 'login' ? 'absolute' : 'relative';

    let view = `
                <div class="footer-component container-fluid text-center bg-dark p-3" style="position: ${show}">
                  <p class="text-white m-0">Lucas Villarim 2021.</p>
                </div>   
              `
    return view;
  },
  after_render: async () => {
  }
}

export default Footer;