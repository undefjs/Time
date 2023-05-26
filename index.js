'use strict';

function executeAt(ts, callback) {
  const now = Date.now();
  const delay = ts - now;

  if(delay <= 0) {
    callback();
  }
  else {
    setTimeout(callback, delay);
  }
}

function executeAfter(ms, callback) {
  setTimeout(callback, ms);
}

function waitUntil(ts) {
  return new Promise(resolve => {
    executeAt(ts, resolve);
  });
}

function wait(ms) {
  return new Promise(resolve => {
    executeAfter(ms, resolve);
  });
}

const Time = {
  executeAt,
  executeAfter,
  waitUntil,
  wait,
};

module.exports = Time;
