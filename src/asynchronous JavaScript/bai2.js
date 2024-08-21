// Function to create and return an image promise
const createImage = imgPath => {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.src = imgPath;
      
      img.addEventListener('load', () => {
        document.querySelector('.images').appendChild(img);
        resolve(img);
      });
      
      img.addEventListener('error', () => {
        reject(new Error('Image could not be loaded'));
      });
    });
  };
// Function to pause execution for a given number of milliseconds
const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

// Variable to keep track of the current image
let currentImage;

// Start the image loading sequence
createImage('img/img1.jpg')  // First image path
  .then(img => {
    currentImage = img;
    return wait(2000); // Wait for 2 seconds
  })
  .then(() => {
    if (currentImage) currentImage.style.display = 'none'; // Hide the current image
    return createImage('img/img2.jpg'); // Load the second image
  })
  .then(img => {
    currentImage = img;
    return wait(2000); // Wait for 2 seconds
  })
  .then(() => {
    if (currentImage) currentImage.style.display = 'none'; // Hide the current image
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
  