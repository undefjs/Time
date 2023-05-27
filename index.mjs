// @ts-check
'use strict';

/**
 * Executes a callback function at a specified timestamp.
 *
 * @param {number} ts - The timestamp at which the callback should be executed.
 * @param {Function} callback - The callback function to be executed.
 */
function executeAt(ts, callback) {
  const now = Date.now();
  const delay = ts - now;

  if (delay <= 0) {
    callback();
  } else {
    setTimeout(callback, delay);
  }
}

/**
 * Executes a callback function after a specified delay in milliseconds.
 *
 * @param {number} ms - The delay in milliseconds after which the callback should be executed.
 * @param {Function} callback - The callback function to be executed.
 */
function executeAfter(ms, callback) {
  setTimeout(callback, ms);
}

/**
 * Returns a Promise that resolves at a specified timestamp.
 *
 * @param {number} ts - The timestamp at which the Promise should resolve.
 * @returns {Promise} A Promise that resolves when the specified timestamp is reached.
 */
function waitUntil(ts) {
  return new Promise(resolve => {
    executeAt(ts, resolve);
  });
}

/**
 * Returns a Promise that resolves after a specified delay in milliseconds.
 *
 * @param {number} ms - The delay in milliseconds after which the Promise should resolve.
 * @returns {Promise} A Promise that resolves after the specified delay.
 */
function wait(ms) {
  return new Promise(resolve => {
    executeAfter(ms, resolve);
  });
}

export default Time = {
  executeAt,
  executeAfter,
  waitUntil,
  wait,
};
