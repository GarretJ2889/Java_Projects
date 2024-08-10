function updateImage() {
    const imgUrl = document.getElementById('imgUrl').value;
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;
    const imageContainer = document.getElementById('imageContainer');

    // Ensure the image URL is not empty
    if (imgUrl.trim() === '') {
        alert("Please enter a valid image URL.");
        return;
    }

    // Create a new image item container
    const imageItem = document.createElement('div');
    imageItem.className = 'image-item';

    // Create the image element and set the URL
    const img = document.createElement('img');
    img.src = imgUrl;
    img.className = 'meme-image';

    // Create the top text element
    const topTextDiv = document.createElement('div');
    topTextDiv.className = 'top-text';
    topTextDiv.textContent = topText;

    // Create the bottom text element
    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.className = 'bottom-text';
    bottomTextDiv.textContent = bottomText;

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    // Add delete functionality
    deleteBtn.addEventListener('click', function() {
        imageContainer.removeChild(imageItem);
    });

    // Append the elements to the image item container
    imageItem.appendChild(img);
    imageItem.appendChild(topTextDiv);
    imageItem.appendChild(bottomTextDiv);
    imageItem.appendChild(deleteBtn);

    // Append the image item container to the image container
    imageContainer.appendChild(imageItem);

    // Clear the form inputs
    document.getElementById('imgUrl').value = '';
    document.getElementById('topText').value = '';
    document.getElementById('bottomText').value = '';
}