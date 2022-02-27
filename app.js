'use strict';

var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'alert displayed') {
     alert("Welcome to my poetry album, Dreamer's Descent! \nThe list at the bottom of this page directs you to a poem. \n\nFeatures of each poem page: \n• Clicking the title of the poem opens the original post in a new tab where you can read the caption. \n• Hovering over the image displayed allows you to read the date the poem was posted and its significance. \n\nHappy/Sad reading!");
     alert("Also make sure to follow my insta account @hapless.romantic from the top of this page.");
     localStorage.setItem('alerted','alert displayed');
    }


