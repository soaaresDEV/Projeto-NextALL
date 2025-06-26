function toggleSearchBar() {
  const searchBar = document.getElementById('searchBar');
  if (searchBar.style.display === 'block') {
      searchBar.style.display = 'none'; // Oculta a barra de pesquisa
  } else {
      searchBar.style.display = 'block'; // Exibe a barra de pesquisa
  }
}

function toggleUserMenu() {
  const userMenu = document.getElementById('userMenu');
  if (userMenu.style.display === 'block') {
      userMenu.style.display = 'none'; // Oculta o menu do usuário
  } else {
      userMenu.style.display = 'block'; // Exibe o menu do usuário
  }
}

function cadastrar(event) {
  event.preventDefault();
  fetch('http://localhost:8080/usuarios',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: document.getElementById('email' ).value,
        senha: document.getElementById('senha').value
      })
    }) 
    .then(response => {
      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        window.location.href = '/Login.html'; 
      } else {
        alert('Erro ao cadastrar. Verifique os dados e tente novamente.');
      }
    })
    .catch(error => {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar. Tente novamente mais tarde.');
    });
}


function fazerLogin(event) {
  event.preventDefault();
  fetch('http://localhost:8080/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: document.getElementById('email').value,
      senha: document.getElementById('senha').value
    })
  })
  .then(response => {
    if (response.ok) {
      alert('Login realizado com sucesso!');
      window.location.href = '/index.html'; 
    } else if (response.status === 401) {
      alert('Email ou senha incorretos. Tente novamente.');
    } else {
      alert('Erro ao fazer login. Tente novamente mais tarde.');
    }
  })
  .catch(error => {
    console.error('Erro na requisição de login:', error);
    alert('Erro na requisição de login. Verifique sua conexão.');
  });
}

