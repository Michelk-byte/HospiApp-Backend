$("form[name=changepassword_form]").submit(function(e) {

  var form = $(this);
  var url = document.location.href.split('/')
  var id = url[url.length - 1]
  var $error = form.find(".error");
  var data = form.serialize();
  data = data + '&id=' + id
  console.log(data);

  $.ajax({
    url: "/user/reset/password",
    type: "POST",
    data: data,
    dataType: "json",
    success: function(resp) {
      $error.text(resp.message).removeClass("error--hidden");
    },
    error: function(resp) {
      $error.text(resp.responseJSON.error).removeClass("error--hidden");
    }
  });

  e.preventDefault();
});

// $("form[name=login_form").submit(function(e) {
//
//   var $form = $(this);
//   var $error = $form.find(".error");
//   var data = $form.serialize();
//
//   $.ajax({
//     url: "/user/login",
//     type: "POST",
//     data: data,
//     dataType: "json",
//     success: function(resp) {
//       window.location.href = "/dashboard/";
//     },
//     error: function(resp) {
//       $error.text(resp.responseJSON.error).removeClass("error--hidden");
//     }
//   });
//
//   e.preventDefault();
// });