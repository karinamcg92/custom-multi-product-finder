<script>
$(document).ready(function(){
    $('#open-fair').click(function() {
      $('.fair-content').fadeToggle("slide");
    });
});

$(document).ready(function(){
    $('#fair-warm').click(function() {
      $('#fair-warm').fadeToggle("slide");
    });
});

$(document).ready(function(){
    $('#fair-neutral').click(function() {
      $('#fair-neutral').fadeToggle("slide");
    });
});

$(document).ready(function(){
    $('#fair-cool').click(function() {
      $('#fair-cool').fadeToggle("slide");
    });
});

$('.cd-modal-toggle').on('click', function(e) {
  e.preventDefault();
  $('.cd-modal').toggleClass('is-visible');
});

$('.cd-light-modal-toggle').on('click', function(e) {
  e.preventDefault();
  $('.cd-light-modal').toggleClass('is-visible');
});

$(document).ready(function(){
    $('#open-light').click(function() {
      $('.light-content').fadeToggle("slide");
    });
});

$(document).ready(function(){
    $('#light-warm').click(function() {
      $('#light-warm').fadeToggle("slide");
    });
});

$(document).ready(function(){
    $('#light-neutral').click(function() {
      $('#light-neutral').fadeToggle("slide");
    });
});

$(document).ready(function(){
    $('#light-cool').click(function() {
      $('#light-cool').fadeToggle("slide");
    });
});
</script>