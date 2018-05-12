$(function() {
  $('.main_content__footer__form').on('submit', function(e) {
    e.preventDafault();
    var fromData = new FormData(this);
    console.log(this);
  })
})
