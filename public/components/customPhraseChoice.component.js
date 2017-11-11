angular.module('App')

.component('customPhraseChoice', {

  bindings: {
    onKeypress: '<'
  },

  controller: function() {
    this.customPhrase = '';
  },

  templateUrl: './templates/custom-phrase-choice.html'


});