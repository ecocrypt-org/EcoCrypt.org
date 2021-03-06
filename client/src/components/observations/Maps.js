import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { relative } from "path";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    console.log(props);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container" style={{position: "relative"}}>
        <Map
          style={{ 
            position: "relative",
            padding: "0",
            margin: "0 auto",
            width: "100%", 
            height: "500px"
          }}
          google={this.props.google}
          // initialCenter={{
          //   lat: 17.17277,
          //   lng: -89.11276
          // }}  
          zoom={15}
        >
          <Marker
            onClick={this.onMarkerClick}
            
            name={"Current location"}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyB8bvWH9i9DeTwaVEHqOGIb9S1CqURrPM0",
  v: "3"
})(MapContainer);
