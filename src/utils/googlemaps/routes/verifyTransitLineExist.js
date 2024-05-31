
// Verifies that entry bus number and route bus number are equivalent, returning that route's index
const verifyTransitLineExists = (data, busNumber) => {
  if (data.routes && data.routes.length > 0) {
    for (let routeIndex = 0; routeIndex < data.routes.length; routeIndex++) {
      const route = data.routes[routeIndex];
      console.log(route);
      if (route.legs && route.legs.length > 0) {
        for (let legIndex = 0; legIndex < route.legs.length; legIndex++) {
          const leg = route.legs[legIndex];
          console.log(leg);
          if (leg.steps && leg.steps.length > 0) {
            for (let stepIndex = 0; stepIndex < leg.steps.length; stepIndex++) {
              const step = leg.steps[stepIndex];
              if (step.transitDetails && step.transitDetails.transitLine) {
                const lineName = step.transitDetails.transitLine.name;
                if (lineName === busNumber) {
                  console.log("Route index: "+ routeIndex);
                  return true;
                }
              }
            }
          }
        }
      }
    }
  }
  return false; // If no matching routeIndex is found
}

export default verifyTransitLineExists;