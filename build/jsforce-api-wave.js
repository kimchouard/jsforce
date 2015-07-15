(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.jsforce||(g.jsforce = {}));g=(g.modules||(g.modules = {}));g=(g.api||(g.api = {}));g.Wave = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @file Manages Salesforce Wave API
 * @author Kim Chouard <kim.chouard@gmail.com>
 */

var _        = jsforce.require('underscore'),
    Promise  = jsforce.require('./promise');

/**
 * API class for Wave API
 *
 * @class
 * @param {Connection} conn Connection
 */
var Wave = function(conn) {
  this._conn = conn;
};

/**
 * Run a SAQL query
 *
 * @method Wave#query
 * @param {Object} [SAQLquery] - Query string
 * @param {Callback.<Wave~QueryResult>} [callback] - Callback function
 * @returns {Promise.<Wave~QueryResult>}
 */
Wave.prototype.query = function(SAQLquery, callback) {
  var options = {};
  var url = [ this._conn._baseUrl(), "wave", "query" ].join('/');
  var params = {
    method : 'POST',
    url : url,
    headers: { "Content-Type" : "application/json" },
    body: JSON.stringify({ query: SAQLquery })
  };

  return this._conn.request(params).thenCall(callback);
};

module.exports = Wave;

},{}]},{},[1])(1)
});