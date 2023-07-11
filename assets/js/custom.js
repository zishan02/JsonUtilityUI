jQuery(function() { 
   
    $('#submit-button').click(function(){
        var message = $('#floatingTextarea2').val();
        $.post('http://localhost:8080/validate', 
        // url
       { myData: message }, 
       
       function(data, status, jqXHR) {// success callback
                $('p').append('status: ' + status + ', data: ' + data);
        })
       console.log(message);
      });


})

