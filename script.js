var locations = []; // this array will hold your objects

// object constructor
function State(data) {
  // destructuring assignment of data
  [state, revenue, locationCount] = data;
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;
  this.averageRevenue = function() {
    return this.revenue / this.locationCount;
  }
}

// object instances
var il = new State(["IL", 5000, 12]);
var mn = new State(["MN", 300, 3]);
var nv = new State(["NV", 25000, 1]);

// push object instances to locations array
locations.push(il, mn, nv);

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
