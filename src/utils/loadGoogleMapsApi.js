const loadGoogleMapsApi = (apiKey, libraries = []) => {
  return new Promise((resolve, reject) => {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
      resolve(window.google.maps);
      return;
    }

    const callbackName = 'initGoogleMaps';
    window[callbackName] = () => {
      resolve(window.google.maps);
    };

    const script = document.createElement('script');
    const params = {
      key: apiKey,  
      callback: callbackName,
      libraries: libraries.join(','),
    };
    const queryString = new URLSearchParams(params).toString();

    script.src = `https://maps.googleapis.com/maps/api/js?${queryString}`;
    script.async = true;
    script.onerror = (error) => reject(error);

    document.head.appendChild(script);
  });
};

export default loadGoogleMapsApi;
