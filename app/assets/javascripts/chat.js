$(function() {
  function buildHTML(message) {
    var img = "";
    if (message.image) {
      var img = `<img src=${message.image}>`
    }
    var posted_time = "";
    posted_time = message.created_at.replace('T', ' '); // 'T' を半角スペースで置換
    posted_time = posted_time.replace('.000Z', ''); // '.000Z' を削除 
    posted_time = posted_time.replace(/-/g, '/'); // 全ての '-' を '/' で置換 
    posted_time = posted_time.replace(/\+.*/g, ' '); // 全ての '-' を '/' で置換
    var html = `<div class="main_content__chat_space__user_name">
                  ${message.name}
                  <span class="main_content__chat_space__created_at">
                    ${posted_time}
                  </span>
                </div>
                <div class="main_content__chat_space__comment">
                  ${message.text}
                  ${img}
                </div>`
    return html
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.main_content__chat_space').append(html)
      $('.main_content__footer__form__chat_input').val('')
      $('.main_content__footer__form__send_button').prop("disabled", false)
      $('.main_content__chat_space').animate({ scrollTop: $('.main_content__chat_space')[0].scrollHeight }, 450)
    })
    .fail(function() {
      alert('エラーが発生しました');
    })
  })
})
