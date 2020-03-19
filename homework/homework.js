// function del() {
//   $("#del_btn").click($("#info").empty();
// }

function btn() {
  let nameBox = $("#name-box").val();
  let countBox = $("#inputGroupSelect01").val();
  let addressBox = $("#address-box").val();
  let phoneNumber = $("#phone-number").val();

  if (nameBox == "") {
    alert("이름을 입력해주세요.");
    $("#name-box").css("border", "solid red");
    $("#name-box").focus();
    $("#name-box").keydown(function() {
      $("#name-box").removeAttr("style");
    });
    return;
  } else if (countBox == "수량을 선택하세요.") {
    alert("수량을 확인해주세요.");
    $("#inputGroupSelect01").css("border", "solid red");
    $("#inputGroupSelect01").focus();
    $("#inputGroupSelect01").click(function() {
      $("#inputGroupSelect01").removeAttr("style");
    });
    return;
  } else if (addressBox == "") {
    alert("주소를 입력해주세요.");
    $("#address-box").css("border", "solid red");
    $("#address-box").focus();
    $("#address-box").keydown(function() {
      $("#address-box").removeAttr("style");
    });
    return;
  } else if (phoneNumber == "") {
    alert("전화번호를 입력해주세요");
    $("#phone-number").css("border", "solid red");
    $("#phone-number").focus();
    $("#phone-number").keydown(function() {
      $("#phone-number").removeAttr("style");
    });
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

    $("#info-table").show();
    $("#info").append(
      "<tr>" +
        "<th>" +
        nameBox +
        "</th>" +
        "<th>" +
        countBox +
        "</th>" +
        "<th>" +
        addressBox +
        "</th>" +
        "<th>" +
        phoneNumber +
        "</th>" +
        "</tr>"
      // "<th>" +
      // "<button id = 'del_btn' onclick = 'del()'>" +
      // "삭제" +
      // "</button>" +
      // "</th>"
    );

    $("#name-box").val("");
    $("#inputGroupSelect01 option:first").prop("selected", true);
    $("#address-box").val("");
    $("#phone-number").val("");
  }
}
