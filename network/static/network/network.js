document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('post-form').addEventListener('submit', savePost);
});

async function savePost(event) {
  
  event.preventDefault();
  
  await fetch('/posts', {
    method: 'POST',
    headers: {
      'X-CSRFToken': Cookies.get('csrftoken'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      postMsg: document.getElementById('post-msg').value
    })
  });
  document.getElementById('post-msg').value = '';
}