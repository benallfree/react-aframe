export class GpsLocation {
  lat: number
  lng: number
  constructor(lat: number, lng: number) {
    this.lat = lat
    this.lng = lng
  }
  toString() {
    return `latitude: ${this.lat}; longitude: ${this.lng}`
  }
}
