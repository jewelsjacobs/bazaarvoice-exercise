module.exports.register = function(handlebars) {
  var rows = [{
    row: [
      {class: "column-3", span: 3},
      {class: "column-3", span: 3},
      {class: "column-6", span: 6}
    ],
    row: [
      {class: "column-4", span: 3},
      {class: "column-3", span: 3},
      {class: "column-6", span: 6}
    ],
    row: [
      {class: "column-2", span: 2},
      {class: "column-2", span: 2},
      {class: "column-1", span: 1},
      {class: "column-4", span: 4},
      {class: "column-1", span: 1},
      {class: "column-1", span: 1},
      {class: "column-1", span: 1}
    ],
    row: [
      {class: "column-12", span: 12}
    ]
  }];
  var columns = function(row) {
    var out = '<div class="row">';

    for (var column in row) {
      out = out + '<div class="' + row[column].class + '"><span>' + + row[column].span + '</span>';
    }
    return out + '</div>';
  };

  handlebars.registerHelper('div', function(items, options) {
    var out = '<section class="wrapper">';

    for(var i=0, l=items.length; i<l; i++) {
      out = out + '<div class="row">' + options.fn(items[i]) + "</div>";
    }

    return out + '</section>';
  });
};
