$('#semangat').append(
  "<audio controls autoplay hidden> <source src='../css/semangat.mp3' type='audio/mpeg' /></audio>"
);
// lengkapi jquery untuk menlist hasil dari todolist yang di inputkan
$('ul').on('click', 'li', function() {
  //  code Here...
  if ($(this).css('color') === 'rgb(128, 128, 128)') {
    $(this).css({
      color: 'black',
      textDecoration: 'none'
    });
  } else {
    $(this).css({
      color: 'gray',
      textDecoration: 'line-through'
    });
  }
});

// buatlah jquery untuk menekan tombol akan menjadikan data sebagai list
//  code Here...
$('#plus').click(function() {
  var add = $('input[type=text]').val();
  $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + add + '</li>');
});
