$("document").ready(function() {
  var time = moment();
  $('.current-day section').html(time.format("dddd, MMMM Do YYYY"));

  calculateCalorieSums();
})

function calculateCalorieSums() {
  calorieSum(400, 'breakfast');
  calorieSum(200, 'snack');
  calorieSum(600, 'lunch');
  calorieSum(800, 'dinner');
}

function calorieSum(goal, meal) {
  var tag = '#' + meal + '-list';
  var sum = sumColumn(tag)
  $(tag + ' .calorie-count').html(sum);
  $(tag + ' .remaining-count').html(goal - sum);
}

function sumColumn(tag) {
  var sum = 0;
  $(tag + ' .food-calories').each(function() {
    var value = $(this).text();
    if(!isNaN(value) && value.length != 0) {
      sum += parseFloat(value);
    }
  });
  return sum
}
