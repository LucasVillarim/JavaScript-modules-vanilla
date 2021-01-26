let Error404 = {
  render: async () => {
    let view = `<div class="area">
      <h1>Houve um erro!</h1>
    </div>`;

    return view;
  },
  after_render: async () => {}
}

export default Error404;
    