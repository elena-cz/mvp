angular.module('App')


.component('phraseChooser', {

  bindings: {
    characters: '<'

  },

  controller: function() {

    this.currentChar = "A";
    this.selectedPhrase = '';
    
    this.updateCurrentChar = (char) => {
      this.currentChar = char;
    };

    this.updatePhrase = (phrase) => {
      this.selectedPhrase = phrase;
      console.log('phrase update to', this.selectedPhrase);
    };

    this.savePhrase = () => {
      // Go to helper that saves database
    };

},

  templateUrl: './templates/phrase-chooser.html'

})
