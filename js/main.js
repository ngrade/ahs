var oneButton = document.querySelector('.millie');

oneButton.addEventListener('click', function () {
  console.log('clicky!!!');
  document.querySelector ('body')
  .classList
  .toggle('details-open-millie');
});

var closeButton =
    document.querySelector('.close-icon');

closeButton.addEventListener('click',
    function () {
    console.log('close it!');
    document
      .querySelector('body')
    .classList
    .toggle('details-open-millie');
});

/* tried to make the second box functional but could figure out how to make it work?
when i clicked on the millie box it would open the right box, but then when i clicked the close icon, it would make the
giraffe box show up? im sure its because the close-icon is set to toggle details-giraffe-open as well.
i tried using the .add feature, but didnt have time to figure out how to impliment it oops,,
var twoButton = document.querySelector('.giraffe');

twoButton.addEventListener('click', function () {
  console.log('clicky!!!');
  document.querySelector ('body')
  .classList
  .toggle('details-open-giraffe');
});

var closeButton2 =
    document.querySelector('.close-icon');

closeButton2.addEventListener('click',
    function () {
    console.log('close it!');
    document
      .querySelector('body')
    .classList
    .toggle('');
});
*/
