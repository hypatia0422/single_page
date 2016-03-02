
//js to create a slider for the main interface page

$(function(){
    var $group = this.find('.slide-group');
    var $slides =this.find('.slide');
    var buttonArray = [10];
    var currentIndex = 0;
    var timeout;

alert('after var message');
    function move(newIndex) {
        var animateLeft, slideLeft;

        advance();

        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }

        buttonArray[currentIndex].removeClass('active');
        buttonArray[newIndex].addClass('active');

        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%'
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }
        $slides.eq(newIndex).css({left: 'slideLeft', display: 'block'});
        $group.animate({left: animateLeft}, function () {
            $slides.eq(currentIndex).css({display: 'none'});
            $slides.eq(newIndex).css({left: 0});
            $group.css({left: 0});
            currentIndex = newIndex;
        });
    }
alert('after 1st function');
    function advance(){
        clearTimeout(timeout);
        timeout= setTimeout(function(){

            if(currentIndex < ($slides.length - 1)){
                move(currentIndex + 1);
            }else{
                move(0);
            }
        }, 4000);
    }
alert('after 2nd function');
    $each($slides, function(index){
        var $button= $('<button type="button" class="slide-buttons"> * </button>');
        if(index === currentIndex){
            $button.addClass('active');
        }
        $button.on('click', function(){
            move(index);
        }).appendTo($this.find('.slide-buttons'));
        buttonArray.push($button);
    });
alert('after last $each conditional');
});


//js to interact with the selection box
(function(){
  var contactType = document.getElementById('contact');
  var emailAd ={

  };

}());