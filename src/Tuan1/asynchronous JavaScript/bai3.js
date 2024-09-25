const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

const loadNPause = async () => {
  try {
    // Load the first image
    let img = await createImage('img/img1.jpg');
    await wait(2000); // Wait for 2 seconds

    // Hide the first image
    img.style.display = 'none';

    // Load the second image
    img = await createImage('img/img2.jpg');
    await wait(2000); // Wait for 2 seconds

    // Hide the second image
    img.style.display = 'none';
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Call the async function to execute the image loading sequence
loadNPause();
const loadAll = async imgArr => {
    try {
      // Map image paths to promises returned by createImage
      const imgsPromises = imgArr.map(createImage);
      
      // Wait for all images to be loaded
      const imgs = await Promise.all(imgsPromises);
  
      // Check out the imgs array
      console.log(imgs);
  
      // Add 'parallel' class to all images
      imgs.forEach(img => img.classList.add('parallel'));
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  // Test data
  const imgPaths = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
  loadAll(imgPaths);
  