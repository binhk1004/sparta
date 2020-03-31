// function del() {
//   $("#del_btn").click(function del1() {
//     $("#info").hide();
//   });
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

    $.ajax({
      type: "POST",
      url: "/order",
      data: {
        name_give: nameBox,
        count_give: countBox,
        address_give: addressBox,
        phone_give: phoneNumber
      },
      success: function(response) {
        if (response["result"] == "success") {
          alert(response["msg"]);
          $("#name-box").val("");
          $("#inputGroupSelect01").val("");
          $("#address-box").val("");
          $("#phone-number").val("");
          window.location.reload();
        }
      }
    });
  }
}

$(document).ready(function() {
  $("#info-table").html("");
  list_show();
});

function list_show() {
  $.ajax({
    type: "GET",
    url: "/order",
    data: {},
    success: function(response) {
      if (response["result"] == "success") {
        // 2. 성공했을 때 리뷰를 올바르게 화면에 나타내기
        let lists = response["lists"];
        for (let i = 0; i < lists.length; i++) {
          let current = lists[i];
          make_table(
            current["name"],
            current["count"],
            current["address"],
            current["phone"]
          );
        }
      } else {
        alert("저장에 실패 하였습니다.");
      }
    }
  });

  function make_table(nameBox, countBox, addressBox, phoneNumber) {
    let temp_html =
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
      // "<th>" +
      // "<button id = 'del_btn' onclick = 'del()' type = 'button'>" +
      // "삭제" +
      // "</button>" +
      // "</th>" +
      "</tr>";
    $("#info").append(temp_html);
  }
}
