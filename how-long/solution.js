function reachDestination(distance, speed) {
  let timeToTrav = Math.round((distance/speed)*2)/2;
  let returnedString = (timeToTrav === 1) ? 'hour' : 'hours';
  return(`The train will be there in ${timeToTrav} ${returnedString}.`);
}