function check(f) {
  if (f.id.value == "") {
    alert("아이디를 입력해주세요.");
    location.href = "https://login.ykm-dev.site";
  }
  else if (f.pass.value == "") {
    alert("비밀번호를 입력해주세요.");
    location.href = "https://login.ykm-dev.site";
  }
  else if (f.id.value != "Lukim9" || f.id.value != "yanga0800") {
    alert("아이디 또는 비밀번호가 잘못되었습니다.");
    location.href = "https://login.ykm-dev.site";
  }
  else {
    alert("로그인에 성공하였습니다.");
    location.href = "https://ykm-dev.site";
  }
}
if (window.event.keyCode==13) {
  check();
}
