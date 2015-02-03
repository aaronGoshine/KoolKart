import AppDispatcher  from '../dispatcher/AppDispatcher' ;
import {EventEmitter} from 'events';
import KartConstants from '../constants/KartConstants';
import merge from 'react/lib/merge';

var CHANGE_EVENT = 'change';

var _Items = {};

function init() {

}

var KartStore = merge(EventEmitter.prototype, {

  getAll: function() {
    return _Items;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {
    case KartConstants.INIT:
      console.log("Application has initialized");
      break;
    default:
      return true;
  }

  KartStore.emitChange();
  return true; 
});

module.exports = KartStore;
