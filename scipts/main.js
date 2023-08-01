$(function () {
  $(".typed").typed({
    strings: [
      "Thinkers.",
      "Innovaters.",
      "Visionaries.",
      "Change-makers.",
      "<span class='animate__animated animate__tada' style='color:#0ab3b3'>Euclid</span>.",
    ],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  });
});
function CopyToClipboard(containerId) {
  const range = document.createRange();
  range.selectNode(document.getElementById(containerId));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Signature copied to clipboard!");
}

// document
//   .getElementById("generateBtn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("phone").value;
//     const title = document.getElementById("title").value;

//     const outputName = document.getElementById("outputName");
//     const outputTitle = document.getElementById("outputTitle");
//     const outputEmail = document.getElementById("outputEmail");
//     const outputPhone = document.getElementById("outputPhone");

//     outputName.textContent = name;
//     outputTitle.textContent = title;
//     outputEmail.textContent = email;
//     outputPhone.textContent = phone;

//     document.getElementById("signaturePreview").style.display = "block";
//   });

// const textToBeCopied = document.querySelector(".textToBeCopied");
// const copyButton = document.querySelector(".copyButton");

// textToBeCopied.addEventListener("blur", function () {
//   copyButton.classList.remove("active");
//   copyButton.innerHTML = "Copy";
// });

// copyButton.addEventListener("click", function () {
//   copyButton.classList.add("active");
//   textToBeCopied.focus();
//   textToBeCopied.select();
//   document.execCommand("copy");
//   if ((this.innerHTML = "Copy")) {
//     this.innerHTML = "Copied!";
//   }
// });

// function CopyToClipboard(containerid) {
//   if (document.selection) {
//     var range = document.body.createTextRange();
//     range.moveToElementText(document.getElementById(containerid));
//     range.select().createTextRange();
//     document.execCommand("copy");
//   } else if (window.getSelection) {
//     var range = document.createRange();
//     range.selectNode(document.getElementById(containerid));
//     window.getSelection().addRange(range);
//     document.execCommand("copy");
//     alert("Text has been copied, now paste in the text-area");
//   }
// }
