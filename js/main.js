"use strict";

$(document).ready(function(){
  var rootObj = $('html');

  var t=!1;
  $(".js-menu").on("click",function(){
    t?($(this).removeClass("active"),$(".navigation").removeClass("show-nav"),$('.menu-opened').removeClass('menu-opened'),$('.city-opened').removeClass('city-opened')):($(this).addClass("active"),$(".navigation").addClass("show-nav")),t=!t});
  document.querySelector("#filter")&&document.querySelector("#filter").addEventListener("click",function(t){this.classList.toggle("opened"),document.querySelector("#filters").classList.toggle("opened")},!1),document.querySelectorAll(".bttn-sort").forEach(function(t,e){return t.addEventListener("click",function(t){var e=this.firstChild.classList;e.contains("far")?(e.remove("far"),e.add("fas")):(e.remove("fas"),e.add("far"))})});var e=document.querySelectorAll(".popup-show"),s=document.querySelector(".shadow");e.forEach(function(t){return t.addEventListener("click",function(t){s.classList.toggle("opened"),this.dataset.blocksize?s.classList.add(this.dataset.blocksize):s.classList.remove("full"),this.classList.contains("close")?document.querySelectorAll(".popup-cont").forEach(function(t){return t.classList.remove("opened")}):document.getElementById(this.dataset.shadow).classList.toggle("opened")})}),$(".cart-pharmacy .material-icons").click(function(){$(this).hasClass("arrow_right")&&($(this).hide(),$(this).next().show(),$(this).closest(".cart-pharmacy").next().show()),$(this).hasClass("arrow_drop_down")&&($(this).hide(),$(this).prev().show(),$(this).closest(".cart-pharmacy").next().hide())}),$(".product-qnty a").click(function(t){var e=$(this).closest(".cart-pharmacy-product"),s=e.find(".summ"),a=e.find("input"),i=a.val(),n=e.find(".item-price").html();$(this).hasClass("plus")&&i++,$(this).hasClass("minus")&&0!=i&&i--,a.val(i),s.text((i*n).toFixed(2))}),$(".send").click(function(t){t.preventDefault();var e,o,s=$(this).closest("form");o=!0,(e=s).find(".requiredField").each(function(){var t,e,s,a,i=$(this).find("input"),n=i.attr("type");!1===(t=$(this),e=i,(a="text"===(s=n)||"phone"===s?""!==e.val():"email"===s&&/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.val()))?t.removeClass("wrong-inp"):t.addClass("wrong-inp"),a)&&(o=!1)}),e.find(".agree input").prop("checked")||(o=!1),o&&alert("Заказ № 10517976 от 27.11.2018 принят к исполнеюю \nСпециалист ЛекМос свяжется с Вами 28.11.2018 с 10:00 до 12:00")})

  $('.plus').click(function(){
    var plus = $(this)
    var menu = plus.closest('.parent')
    var opened = $('.menu-opened')

    if(menu.hasClass('menu-opened')){
      menu.removeClass('menu-opened')
    }else{
      if(opened) opened.removeClass('menu-opened');
      menu.addClass('menu-opened')
    };
  })

  $('.city-list span').click(function(){
    $(this).closest('.city-list').toggleClass('city-opened')
  })
  $('.city-list li').click(function(){
    var cityList = $(this).closest('.city-list')
    cityList.find('span').text($(this).text())
    cityList.toggleClass('city-opened')
  })

});
