angular.module('App')


.component('phraseChooser', {

  bindings: {
    characters: '<'

  },

  controller: function() {

    this.currentChar = "A";
    
    this.updateCurrentChar = (char) => {
      this.currentChar = char;
    }

},

  templateUrl: './templates/phrase-chooser.html'

})
