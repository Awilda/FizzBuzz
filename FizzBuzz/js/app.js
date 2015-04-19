$(document).ready(function(){
	$('#go').click(function() {
      /*var toAdd = $("input[name=additems]").val();*/
       	/*$('#items').append("<p class='items'>"+toAdd+"</p>");*/
	var i, num;

    	var fizzBuzz = function(i) {
    		num=$("#text-box").val();
    		i=+num;
    		if (i < 101 && i >= 1 && i % 1===0){
    	/*$('.list').empty();*/
			for(i=1; i<=100; i++){
    			if(i%15===0){
        			$('.items').append("<p class='items'>'FizzBuzz'</p>");
    			}
    			else if(i%3===0){
    				$('.items').append("<p class='items'>'Fizz'</p>");
				}
				else if(i%5===0){
    				$('.items').append("<p class='items'>'Buzz'</p>");
				}
				else{
    				$('.items').append("<p class='items'> + i + </p>");
    			}
    		}
			}
		});
	});
});
$(#text-box).val();

