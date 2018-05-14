$(function() {
  function removeResult() {
    $('.user-search-result').find('.chat-group-user').remove();
  }

  function appendUsers(users) {
    users.forEach(user => {
      var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                  </div>`
      $('.user-search-result').append(html)
    });
  }

  $('#user-search-field').on('keyup', function(e) {
    e.preventDefault();
    var input = $.trim($("#user-search-field").val());
    $.ajax({
      url: '/users',
      type: "GET",
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      if ($("#user-search-field").val() === "") {
        removeResult();
      }
      else {
        removeResult();
        appendUsers(users);
      }
    })
    .fail(function() {
      alert('エラーが発生しました');
    })
  })
})
