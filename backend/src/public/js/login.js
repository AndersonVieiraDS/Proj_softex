document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ login, senha })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      window.location.href = '/home';
    } else {
      alert('Credenciais inválidas');
    }
  });
});
