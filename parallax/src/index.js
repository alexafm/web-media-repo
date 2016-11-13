/**
 * Chapter 4. Parallax.
 *
 * Parallax from center of container.
 */

/* globals $ */
'use strict';


function onMouseMove ( evt ) {

  // Get the dimension of the container
  var w = $('div#main-container').width();
  var h = $('div#main-container').height();

  // Get the difference from the mouse to the center of the container
  var mX = evt.offsetX - (w / 2.0);
  var mY = evt.offsetY - (h / 2.0);

  // Iterate through all the layers getting node array with jQuery
  var layers = $('div.layer');
  for (var i = 0, len = layers.length; i < len; i++) {

    // Convert raw element: layers[i], to jQuery element
    var layer = $(layers[i]);

    // Get the amount of movement of the layer, the or ( || ) operator help
    // us to set 0 if the attr is undefined
    var amtX = parseFloat(layer.attr('data-x') || 0);
    var amtY = parseFloat(layer.attr('data-y') || 0);

    // Multiply and assign the translate
    var x = mX * amtX;
    var y = mY * amtY;
    layer.css({
      'transform' : 'translate3d(' + x + 'px, ' + y + 'px, 0px)'
    });
  }
}

/***************
 * Main script *
 ***************/

$(document).ready(function () {
  $('div#main-container').on('mousemove', onMouseMove);
});
