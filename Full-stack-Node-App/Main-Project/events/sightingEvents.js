import { EventEmitter } from 'node:events'
import { createAlerts } from '../utils/createAlerts.js'

export const sightingEventEmitter = new EventEmitter()

sightingEventEmitter.on("sighting-added", createAlerts)