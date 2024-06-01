const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
yesBtn.addEventListener("click", yesClicked);
noBtn.addEventListener("click", noClicked);

// -------------- When yesBtn clicked --------------
function yesClicked() {
    // Change img url
    const img = document.getElementsByTagName("iframe")[0];
    img.src = "https://giphy.com/embed/kZqbBT64ECtjy";
    img.width = "400";
    img.height = "480";

    // Change title text
    document.getElementsByTagName("h1")[0].innerHTML = "chốt thế nghe =)))))))))";

    // Hide buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Redirect to bash.html after a longer delay
    setTimeout(function() {
        window.location.href = "thu.html";
    }, 3000); // Chuyển hướng sau 5 giây (5000 millisecond), bạn có thể thay đổi thời gian nếu muốn
};

// -------------- When noBtn clicked --------------
var i = 0;
function noClicked() {
    const btnMessage = [
        "chắc chưaa?",
        "bây chê à bây",
        "hoyyy màaaaaa",
        "eo lại nữa 😠",
        "nài nhá nghĩ lại i",
        "Hmm...",
        "thậc àaaaaa",
        "hoy, chọn cái khác i 😭",
        "nàooooo",
    ];

    // reset the message when they are all read
    if (i == btnMessage.length) {
        i = 0;
    };

    // Change the button text
    noBtn.innerHTML = btnMessage[i];
    i++;

    // ------ noBtn -------
    // Change the font-size
    var noBtnWinFontSize = window.getComputedStyle(noBtn, null).getPropertyValue('font-size');
    var noBtnFontSize = parseFloat(noBtnWinFontSize);
    noBtn.style.fontSize = (noBtnFontSize - 1) + 'px';

    // Change padding
    if (noBtnFontSize < 8) {
        // Hide the text when it gets too small
        noBtn.style.display = "none";
    } else if (noBtnFontSize < 10) {
        noBtn.style.padding = "0";
        noBtn.style.margin = "0";
    } else if (noBtnFontSize < 15) {
        noBtn.style.padding = "5px 10px";
    } else if (noBtnFontSize < 20) {
        noBtn.style.padding = "10px 20px";
    };

    // ------ yesBtn -------
    // Change the font-size
    var yesBtnWinFontSize = window.getComputedStyle(yesBtn, null).getPropertyValue('font-size');
    var yesBtnFontSize = parseFloat(yesBtnWinFontSize);
    yesBtn.style.fontSize = (yesBtnFontSize + 30) + 'px';

    // Change padding
    if (yesBtnFontSize >= 400) {
        yesBtn.style.padding = "200px 400px";
    } else if (yesBtnFontSize >= 300) {
        yesBtn.style.padding = "100px 200px";
    } else if (yesBtnFontSize >= 200) {
        yesBtn.style.padding = "50px 100px";
    } else if (yesBtnFontSize >= 100) {
        yesBtn.style.padding = "30px 60px";
    };
};