


  //api call to server to get the photos
  fetch('photo', {
    method: 'get',
    headers: {'Content-Type': 'application/json'},
  })
  .then(response => {
    response.json().then(photos => { //photos is the array of photos
      const imageContainer = document.getElementById('imageContainer');
      imageContainer.innerHTML='' //clears out the table
        for(let i=0; i < photos.length; i++) {
          const photo = photos[i];
          const img = document.createElement('img');
          img.src = photo.file;
          imageContainer.appendChild(img);
        }

      })
  });
