// Product section control

const productImage = [
 {
  id: 1,
  img: src = "./unnamed.jpg",
  title: "Impedit sed dicta",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sequi neque nostrum, maxime eveniet optio atque? Sequi iste reiciendis corporis provident quisquam alias repudiandae earum exercitationem debitis autem excepturi maxime voluptas magni, tenetur aperiam assumenda illum qui praesentium harum at beatae eveniet veritatis, perferendis blanditiis? Maiores repellendus accusamus placeat debitis aut sed facilis sint, cum sequi nemo! Vel sed amet, natus, at blanditiis reiciendis vitae ex ducimus atque alias nam temporibus, obcaecati culpa consectetur fugiat eligendi facere veniam iure adipisci impedit veritatis? Impedit sed dicta, consequatur temporibus ipsam quae hic, dolorem assumenda repudiandae expedita omnis ducimus modi aspernatur maiores? Illum officiis officia velit! Veniam quibusdam sapiente, quis exercitationem molestias quaerat enim necessitatibus? Fugit, alias! Dolore vel nostrum obcaecati numquam facilis quaerat eius aut explicabo? Perspiciatis mollitia quo necessitatibus fuga maiores tempore illo fugiat quasi, corporis dolores a cupiditate reiciendis, optio consectetur earum eum! Nobis autem, accusantium dolorem tenetur omnis similique blanditiis tempora, fugit quis, eaque cum. Veritatis, quod tempore nobis fuga cupiditate illum. Delectus quam neque pariatur blanditiis ducimus necessitatibus ipsa, cumque, adipisci deleniti natus fugit itaque aliquid mollitia molestias debitis hic consequatur quo? Assumenda, quo possimus. Tenetur voluptatem, consectetur, minus odio, adipisci non accusamus commodi magnam reprehenderit placeat suscipit!"
 },
 {
  id: 2,
  img: src = "./home-06-400x371.jpg",
  title: "Lorem ipsum",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint temporibus a exercitationem suscipit officiis esse dignissimos deleniti atque voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint temporibus a exercitationem suscipit officiis esse dignissimos deleniti atque voluptatem."
 }];



// select product image

const productImg = document.querySelector(".product-img");
const productTitle = document.querySelector(".product-title");
const productText = document.querySelector(".product-txt");
const prodPrevBtn = document.querySelector(".product-prev-btn");
const prodNextBtn = document.querySelector(".product-next-btn");

let currentProductItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
 const item = productImage[currentProductItem];
 productImg.src = item.img;
 productTitle.textContent = item.title;
 productText.textContent = item.text;
});

function showProduct() {
 const item = productImage[currentProductItem];
 productImg.src = item.img;
 productTitle.textContent = item.title;
 productText.textContent = item.text;
};

prodNextBtn.addEventListener("click", function () {
 currentProductItem++;
 if (currentProductItem > productImage.length - 1) {
  currentProductItem = 0;
 }
 showProduct(currentProductItem);
});

//show prev hero image
prodPrevBtn.addEventListener("click", function () {
 currentProductItem--;
 if (currentProductItem < 0) {
  currentProductItem = productImage.length - 1;
 }
 showProduct(currentProductItem);
});
