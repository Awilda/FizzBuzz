$(document).ready(function() {
	$('#go').click(function() {
      
		var num;

    		num=$("#text-box").val();
    		
    		if (num < 101 && num >= 1 && num % 1===0){
				for(i=1; i<=num; i++){
    				if(i%15===0){
        				$('#items').append("<p class='items'>'FizzBuzz'</p>");
    				}
    				else if(i%3===0){
    					$('#items').append("<p class='items'>'Fizz'</p>");
					}
					else if(i%5===0){
    					$('#items').append("<p class='items'>'Buzz'</p>");
					}
					else{
    					$('#items').append("<p class='items'>" + i + "</p>");
    				}
    				if(i>=101){
    				alert("A number from 1-100, please!");
    				}
    			}
			}
	});

$("#text-box").val();


});
