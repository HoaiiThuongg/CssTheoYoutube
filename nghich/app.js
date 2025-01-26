const button = document.querySelector("#product_btn");
const image1 = document.querySelector("#product1");
const image2 = document.querySelector("#product2");
const image3 = document.querySelector("#product3");
const image4 = document.querySelector("#product4");

button.addEventListener("click", (e) => {
  console.log(e.target);
  image1.classList.add("toProduct");
  image2.classList.add("toProduct");
  image3.classList.add("toProduct");
  image4.classList.add("toProduct");
  image1.addEventListener("transitionend", () => {
    // Khi transition hoàn tất, chuyển hướng tới trang mới
    window.location.href = "thuong.html";
  });
});
