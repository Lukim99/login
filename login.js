function check() {
  var id = document.getElementById("id").innerText;
  var password = document.getElementById("pass").innerText;
  if (id == "") {
    alert("아이디를 입력해주세요.");
  }
  else if (password == "") {
    alert("비밀번호를 입력해주세요.");
  }
  else if (id != "Lukim9" || password != "yanga0800") {
    alert("아이디 또는 비밀번호가 잘못되었습니다.");
  }
  else {
    alert("로그인에 성공하였습니다.");
    location.href = "https://ykm-dev.site";
  }
}
if (window.event.keyCode==13) {
  check();
}
