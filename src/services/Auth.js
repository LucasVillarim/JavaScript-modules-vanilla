const isAuth = async (auth, route) => {
  if ( !auth ) {
    location.replace(`/#/${route}`);
  }
  return auth;
}

const clearStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
}

const redirectTo = (path) => {
  location.replace(`/#/${path}`);
}

const storeData = (userData) => {
  const {token, conta, usuario} = userData.data;
  Object.entries(usuario).map(element => {
    localStorage.setItem(element[0], element[1]);
    sessionStorage.setItem(element[0], element[1]);

    localStorage.setItem('@token', token);
    sessionStorage.setItem('@token', token);
  })
  Object.entries(conta).map(element => {
    localStorage.setItem(element[0], element[1]);
    sessionStorage.setItem(element[0], element[1]);
  })
  
}

export { isAuth, clearStorage, redirectTo, storeData };