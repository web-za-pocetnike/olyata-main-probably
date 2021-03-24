// Product section control

const productImage = [
 {
  id: 1,
  img: src = "./unnamed.jpg",
  title: "1",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sequi neque nostrum, maxime eveniet optio atque? Sequi iste reiciendis corporis provident quisquam alias repudiandae earum exercitationem debitis autem excepturi maxime voluptas magni, tenetur aperiam assumenda illum qui praesentium harum at beatae eveniet veritatis, perferendis blanditiis? Maiores repellendus accusamus placeat debitis aut sed facilis sint, cum sequi nemo! Vel sed amet, natus, at blanditiis reiciendis vitae ex ducimus atque alias nam temporibus, obcaecati culpa consectetur fugiat eligendi facere veniam iure adipisci impedit veritatis? Impedit sed dicta, "
 },
 {
  id: 2,
  img: src = "./home-06-400x371.jpg",
  title: "2",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint temporibus a exercitationem suscipit officiis esse dignissimos deleniti atque voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint temporibus a exercitationem suscipit officiis esse dignissimos deleniti atque voluptatem."
 },
 {
  id: 3,
  img: src = "./home-06-400x371.jpg",
  title: "3",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint temporibus a exercitationem suscipit officiis esse dignissimos deleniti atque voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint temporibus a exercitationem suscipit officiis esse dignissimos deleniti atque voluptatem."
 },
 {
  id: 4,
  img: src = "./home-06-400x371.jpg",
  title: "4",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint temporibus a exercitationem suscipit officiis esse dignissimos deleniti atque voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint temporibus a exercitationem suscipit officiis esse dignissimos deleniti atque voluptatem."
 },
 {
  id: 5,
  img: src = "./home-06-400x371.jpg",
  title: "5",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint temporibus a exercitationem suscipit officiis esse dignissimos deleniti atque voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint temporibus a exercitationem suscipit officiis esse dignissimos deleniti atque voluptatem."
 },
];



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


$('#button-toggle').click(function() {
   $(this).toggleClass('active');
  
  });

// nav-hamb

$('.navlink').on('click', function(){
    $("#overlay").hide();
    $("#button-toggle").removeClass("active");
    $('#overlay').toggleClass('open').show();
});


// end of nav-hamb