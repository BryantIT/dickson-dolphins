// utils/dateUtils.js

import { DateTime } from 'luxon'

export function dateConversion(seconds, nanoseconds) {
  // Correctly converts nanoseconds to milliseconds for Luxon compatibility
  return DateTime.fromSeconds(seconds).plus({ milliseconds: nanoseconds / 1e6 })
}
