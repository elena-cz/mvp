angular.module('App')


.component('flashCard', {

  bindings: {
    char: '<',
    code: '<',
    phrase: '<',
    showingAnswer: '<',
    showAnswer: '<',
    getNext: '<'

  },

  controller: function() {


  },

  templateUrl: './templates/flash-card.html'

})
