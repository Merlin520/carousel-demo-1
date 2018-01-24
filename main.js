// $(p1).on('click',function () {
//     $(image).css({
//         transform:'translateX(0px)'
//     })
// });
// $(p2).on('click',function () {
//     $(image).css({
//         transform:'translateX(-400px)'
//     })
// });
// $(p3).on('click',function () {
//     $(image).css({
//         transform:'translateX(-800px)'
//     })
// });


var allButtons = $('#buttons > span');


for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function(x) {
        var index = $(x.currentTarget).index(); //当前元素在所有元素中的顺序（从0开始）
        var n = index * -400;
        $('#image').css({
            transform: 'translate(' + n + 'px)'
        })
    })
}
//当前元素在所有元素中的顺序（从0开始）--DOM写法  当前元素为s
// var n ;
// var children = s.parentNode.children;
//     for(let i = 0;i<children.length;i++){
//         if(children[i] ===s ){
//             n = i;
//             break;
//         }
//     }

// 自动播放
var n = 0;
var size = allButtons.length
allButtons.eq(n % size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
    //siblings接受选择器，前面加.；removeClass接受类名

var timeId = setInterval(function() {
    n = n + 1;
    allButtons.eq(n % size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
}, 1000);

//关闭闹钟
$('.view').on('mouseenter',function(){
    window.clearInterval(timeId)
})

$('.view').on('mouseleave',function(){
    timeId = setInterval(function() {
        n = n + 1;
        allButtons.eq(n % size).trigger('click')
        .addClass('red')
        .siblings('.red').removeClass('red')
    }, 1000);
})









