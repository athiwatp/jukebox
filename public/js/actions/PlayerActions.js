'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var PlayerConstants = require('../constants/PlayerConstants');

var PlayerActions = {
  play: function () {
    AppDispatcher.handleViewAction({
      actionType: PlayerConstants.PLAYER_PLAY
    });
  },

  pause: function () {
    AppDispatcher.handleViewAction({
      actionType: PlayerConstants.PLAYER_PAUSE
    });
  },

  volume: function (perc) {
    AppDispatcher.handleViewAction({
      actionType: PlayerConstants.PLAYER_SET_VOLUME,
      data: perc
    });
  },

  reset: function (streamUrl) {
    AppDispatcher.handleViewAction({
      actionType: PlayerConstants.PLAYER_RESET,
      data: streamUrl
    });
  }
};

module.exports = PlayerActions;