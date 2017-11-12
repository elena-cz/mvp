angular.module('App')


.component('phraseChooser', {

  bindings: {
    characters: '<'

  },

  controller: function(Characters) {
    this.username = 'elena-cz';

    this.currentChar = "A";
    this.selectedPhrase = '';
    
    this.saveAndNext = (char) => {
      Characters.savePhrase(this.username, this.currentChar, this.selectedPhrase);
      this.currentChar = char;
      this.selectedPhrase = '';

    };

    this.updatePhrase = ($event, phrase) => {
      this.selectedPhrase = phrase;
      console.log('phrase update to', this.selectedPhrase);
    };

    this.savePhrase = () => {
      // Go to helper that saves database
    };

},

  templateUrl: './templates/phrase-chooser.html'

})
