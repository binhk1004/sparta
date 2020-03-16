function btn() {
  let nameBox = $("#name-box").val();
  let countBox = $("#inputGroupSelect01").val();
  let addressBox = $("#address-box").val();
  let phoneNumber = $("#phone-number").val();

  if (nameBox == "") {
    alert("이름을 입력해주세요.");
    $("#name-box").css("background", "red");
    $("#name-box").focus();
    return;
  } else if (countBox == "수량을 선택하세요.") {
    alert("수량을 확인해주세요.");
    $("#inputGroupSelect01").css("background", "red");
    $("#inputGroupSelect01").focus();
    return;
  } else if (addressBox == "") {
    alert("주소를 입력해주세요.");
    $("#address-box").css("background", "red");
    $("#address-box").focus();
    return;
  } else if (phoneNumber == "") {
    alert("전화번호를 입력해주세요");
    $("#phone-number").css("background", "red");
    $("#phone-number").focus();
    return;
  } else {
    alert(
      "아래 최종 정보를 확인해주세요.\n\n" +
        "이름 : " +
        nameBox +
        "\n" +
        "수량 : " +
        countBox +
        "\n" +
        "주소 : " +
        addressBox +
        "\n" +
        "전화번호 : " +
        phoneNumber
    );
  }
}
