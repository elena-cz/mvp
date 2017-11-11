angular.module('App')

.component('customPhraseChoice', {

  bindings: {
    onKeypress: '<'
  },

  controller: function() {
    this.customPhrase = 'Write your own';
  },


});