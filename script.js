function addNote() {
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;
  
    if (title && content) {
      const note = document.createElement('div');
      note.className = 'note';
      note.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button onclick="deleteNote(this)">Delete</button>
      `;
      document.getElementById('notes-list').appendChild(note);
  
      document.getElementById('note-title').value = '';
      document.getElementById('note-content').value = '';
    } else {
      alert('Please fill in both fields.');
    }
  }
  
  function deleteNote(button) {
    const note = button.parentElement;
    note.remove();
  }

  document.getElementById('toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  