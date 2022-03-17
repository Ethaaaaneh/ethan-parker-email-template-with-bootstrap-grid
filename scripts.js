//i know this is coded weirdly im making this right before class hah
    function switchVisible() {
        if (document.getElementById('compose-area')) {
      
            if (document.getElementById('compose-area').style.display == 'flex') {
                document.getElementById('compose-area').style.display = 'none';
                document.getElementById('email').style.display = '';
                document.getElementById('back-button').style.display = 'none';
                document.getElementById('compose-button').style.display = '';
            }
            else {
                document.getElementById('compose-area').style.display = 'flex';
                document.getElementById('email').style.display = 'none';
                document.getElementById('back-button').style.display = 'block';
                document.getElementById('compose-button').style.display = 'none';
            }
        }
      }