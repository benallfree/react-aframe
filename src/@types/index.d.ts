export type Width = number
export type Height = number

export enum ColorNames {
  'yellow'
}
export type Color = ColorNames | string
export interface GpsLocation {
  lat: number
  lng: number
}

export interface Position {
  x: number
  y: number
  z: number
}

export type Radius = number

export interface Rotation {
  roll: number
  pitch: number
  yaw: number
}

export interface GpsLocation {
  lat: number
  lng: number
}
