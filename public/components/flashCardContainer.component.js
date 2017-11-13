angular.module('App')


.component('flashCardContainer', {

  bindings: {
    characters: '<',
    userPrefs: '<',
    savedLetters: '<'

  },

  controller: function() {

    // this.charsLeft = this.savedLetters || [];
    this.currentChar = 'B';
    this.showingAnswer = false;

    this.showAnswer = () => {
      this.showingAnswer = true;
    };

    this.getNextChar = () => {

      var index = Math.floor(Math.random() * this.savedLetters.length);
      this.currentChar = this.savedLetters[index];
      console.log('this.currentChar', this.currentChar);
      
      // this.charsLeft.splice(index, 1);
      this.showingAnswer = false;
    };




  },

  templateUrl: './templates/flash-card-container.html'

})
