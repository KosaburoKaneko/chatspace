$(document).on("turbolinks:load", function() {
  $(function() {
    function removeResult() {
      $('#user-search-result').children().remove();
    }

    function appendUsers(users) {
      users.forEach(user => {
        var html = `<div class="chat-group-user clearfix">
                      <p class="chat-group-user__name">${user.name}</p>
                      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                    </div>`
        $('#user-search-result').append(html)
      });
    }

    function addNewUser(id, name) {
      var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${id}'>
                    <input name='group[user_ids][]' type='hidden' value='${id}'>
                    <p class='chat-group-user__name'>${name}</p>
                    <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                  </div>`
      $('.chat-group-users').append(html)
    }

    $('#user-search-field').on('keyup', function(e) {
      var input = $.trim($("#user-search-field").val());
      $.ajax({
        url: '/users',
        type: "GET",
        data: { keyword: input },
        dataType: 'json'
      })
      .done(function(users) {
        removeResult();
        
        if (!($("#user-search-field").val() === "")) {
          appendUsers(users);
        }
      })
      .fail(function() {
        alert('エラーが発生しました');
      })
    })

    $('body').on('click', '.chat-group-user__btn--add', function() {
      var id = $(this).data('user-id');
      var name = $(this).data('user-name');
      addNewUser(id, name);
      $(this).parent('.chat-group-user').remove()
    })

    $('body').on('click', '.js-remove-btn', function() {
      $(this).parent().remove()
    })
  })
})
