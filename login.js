function check() {
  var id = document.getElementById("id").value;
  var password = document.getElementById("pass").value;
  if (id != "Lukim9" || password != "yanga0800") {
    alert("아이디 또는 비밀번호가 잘못되었습니다." + id + ":" + password);
  }
  else {
    alert("로그인에 성공하였습니다.");
    location.href = "https://ykm-dev.site";
  }
}
