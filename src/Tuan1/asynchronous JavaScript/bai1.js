const whereAmI = async function (lat, lng) {
    try {
      // Part 1: Reverse Geocoding
      const geoRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
      // Check if the response was OK
      if (!geoRes.ok) {
        // Check for rate limiting
        if (geoRes.status === 403) throw new Error('Rate limit exceeded. Try again later.');
        // For other errors
        throw new Error('Unable to fetch location data.');
      }
      const geoData = await geoRes.json();
      
      // Log the received data
      console.log(geoData);
  
      // Extract city and country information
      const city = geoData.city;
      const country = geoData.country;
  
      // Log location
      console.log(`You are in ${city}, ${country}`);
  
      // Part 2: Render Country Information
      // Use the countries API to get additional details
      const countryRes = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      if (!countryRes.ok) throw new Error('Unable to fetch country data.');
      const countryData = await countryRes.json();
      console.log(countryData);
  
      // Render country information
      const countryName = countryData[0].name.common;
      const countryCapital = countryData[0].capital[0];
      console.log(`The country is ${countryName}. The capital is ${countryCapital}.`);
  
    } catch (err) {
      // Part 1: Handle errors
      console.error(`Error: ${err.message}`);
    }
  };
  
  // Test data
  whereAmI(52.508, 13.381);  // Coordinates for Berlin
  whereAmI(19.037, 72.873);  // Coordinates for Mumbai
  whereAmI(-33.933, 18.474); // Coordinates for Cape Town
  