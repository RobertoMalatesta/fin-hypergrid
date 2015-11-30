'use strict';

var Feature = require('./Feature.js');

var commands = {
    PAGEDOWN: function(grid) { grid.pageDown(); },
    PAGEUP: function(grid) { grid.pageUp(); },
    PAGELEFT: function(grid) { grid.pageLeft(); },
    PAGERIGHT: function(grid) { grid.pageRight(); }
};

/**
 * @constructor
 */
var KeyPaging = Feature.extend('KeyPaging', {

    alias: 'KeyPaging',

    /**
     * @desc Handle this event down the feature chain of responsibility.
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @memberOf KeyPaging.prototype
     */
    handleKeyDown: function(grid, event) {
        var detail = event.detail.char;
        var func = commands[detail];
        if (func) {
            func(grid);
        } else if (this.next) {
            this.next.handleKeyDown(grid, event);
        }
    }

});

module.exports = KeyPaging;
