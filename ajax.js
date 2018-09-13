
	function sendContactMsg(){
		
		$(function(){
					
				var name 		= $("#name").val();
				var email 		= $("#email").val();
				var message 	= $("#message").val();	
				
				if(!name){
					$("#contact_resp").html('<em class="err">Your name must be specified.</em>');	
				}
				else if(!email){
					$("#contact_resp").html('<em class="err">Your email must be specified.</em>');	
				}
				else if(!message){
					$("#contact_resp").html('<em class="err">Desired message must not be blank.</em>');	
				}
				else{
						$("#contact_resp").html('<div class="sending"><img src="assets/dist/images/loading.gif" /><p>Sending your message... Please wait!!!</p> <div class="clear"></div> </div>');	
						var formData = "name="+encodeURIComponent(name);
						formData = formData + "&email="+encodeURIComponent(email);
						formData = formData + "&message="+encodeURIComponent(message);
						
						$.ajax({
								method:		"POST",
								url:		"assets/dist/scripts/ajax.php?send_msg",
								dataType:	"html",
								data:		formData,
								cache:		false,
								contentType: "application/x-www-form-urlencoded;charset=utf-8",
								success:	function(result){
														$("#contact_resp").html(result);	
								}
							});
						
				}
			
		});	
		
	}