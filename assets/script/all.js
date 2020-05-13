// 漢堡選單 jQuery
$(document).ready(function(){
    // click ham-icon
    $('.ham-icon').click(function(e) {
        // 取消預設 event
        e.preventDefault();
        // 在 .dropdown 上加 toggle .active
        $('.dropdown').toggleClass('active');
    });
   
    // 隱藏 .answer li
    $('.answer').hide();
    // 預設讓第一個 li 加上 active
    $('.faq-item').eq(0).addClass('show');
    // 預設讓第一個 li 內文 顯示
    $('.answer').eq(0).show();

    $('.faq-item').click(function (e) { 
        e.preventDefault();
        // click 自己的時候顯示自己的 li，關掉其他 li 
        $(this).toggleClass('show').siblings().removeClass('show');
        // 讓自己的 li  切換收合
        $(this).children().next().slideToggle();
        // 讓其他 li  收合
        $(this).siblings().children().next().slideUp();
    });

    



});
