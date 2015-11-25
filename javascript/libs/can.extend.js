/* global can, define */

define(['canjs'], function(can) {
    can.ArrayList = can.List.extend({
        shuffle: function () {
            var counter = this.length, temp, index;
            // While there are elements in the array
            while (counter > 0) {
                // Pick a random index
                index = Math.floor(Math.random() * counter);
                // Decrease counter by 1
                counter--;
                // And swap the last element with it
                temp = this[counter];
                this[counter] = this[index];
                this[index] = temp;
            }

            return this;
        }
    })
});