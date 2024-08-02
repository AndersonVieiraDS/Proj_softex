document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    alert('Token não fornecido');
    window.location.href = '/';
    return;
  }

  const response = await fetch('/', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data = await response.json();

  if (response.ok) {
    document.getElementById('message').innerText = data.message;
  } else {
    alert(data.message);
    window.location.href = '/';
  }
});
