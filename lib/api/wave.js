/**
 * @file Manages Salesforce Wave API
 * @author Kim Chouard <kim.chouard@gmail.com>
 */

var _        = require('underscore'),
    Promise  = require('../promise');

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
