angular.module('App')

.component('customPhraseChoice', {

  bindings: {
    onKeypress: '<',
    selectedPhrase: '<'
  },

  controller: function() {
    this.customPhrase = this.selectedPhrase;
  },

  templateUrl: './templates/custom-phrase-choice.html'


});