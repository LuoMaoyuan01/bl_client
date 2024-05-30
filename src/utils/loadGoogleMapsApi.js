const loadGoogleMapsApi = (apiKey, libraries = []) => {
  return new Promise((resolve, reject) => {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
      resolve(window.google.maps);
      return;
    }

    const callbackName = 'initMap';
    window[callbackName] = () => {  
      resolve(window.google.maps);
    };

    const script = document.createElement('script');

    // Ensure consistent version and easy modifications
    const params = {
      key: apiKey,
      loading: "async",
      callback: callbackName,
      v: '3.57',
      libraries: libraries.join(','),
      region: 'sg',
      map_ids: process.env.REACT_APP_MAP_ID,
    };
    const queryString = new URLSearchParams(params).toString();

    console.log(`Loading Google Maps API with URL: https://maps.googleapis.com/maps/api/js?${queryString}`);
    script.src = `https://maps.googleapis.com/maps/api/js?${queryString}`;
    script.async = true;
    script.onerror = (error) => reject(error);  

    document.head.appendChild(script);
  });
};

export default loadGoogleMapsApi;
