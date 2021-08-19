'use strict';

var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'alert displayed') {
     alert("Welcome to my poetry album, Dreamer's Descent! \nThe list at the bottom of this page directs you to a poem. \nFeatures of each poem page: \n\nThe Home button redirects you to this main page. \nClicking the title of the poem opens the original post in a new tab. \nHovering over the image displayed allows you to read the date the poem was posted and its significance. \nScroll to the bottom and the View Songs button directs you to the main account, where you can listen to excerpts of the songs associated with each poem. \nThe Previous and Next buttons open the respective poem in the album. \n\nHappy/Sad reading!");
     localStorage.setItem('alerted','alert displayed');
    }
