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


for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function (x) {

        var index = $(x.currentTarget).index();
        var n = index * -300;

        $('#image').css({
            transform:'translate(' + n + 'px)'
        })
    })
}


















