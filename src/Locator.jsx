import React from 'react';

export default class Locator extends React.Component {
// function Locator(props) {
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    }
  }

  displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;

    const url =
      "http://www.adamoakes.xyz/pizzaNow/coordsToZipAPI.php?latlng=" +
      lat + ',' + lng;

    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
  }

  render() {
    return (
      <div type="hidden">
      </div>
      // <div>{lat}</div>
    );
  }
}
