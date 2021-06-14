/* Insert placeholder input newsletter */
function addplaceHolderNewsletter(){
  var placeHolderText = "Endereço de e-mail";
  inputMail = jQryIter(".newsletterportlet-portlet .newsletter_email_div").find("input");
  inputMail.attr("placeholder", placeHolderText);
  inputMail.attr("type", "email");

  inputMail2 = jQryIter(".newsletterportlet-portlet .newsletters_check").find("input");
  var validate= "ValidateEmail()";
  inputMail2.attr("onclick", validate);
}
jQryIter(document).ready(addplaceHolderNewsletter);



function ValidateEmail() {
        var email = document.getElementById("newsletter_email_ctrl").value;
console.log("EMAIL SELECIONADO:"+email);

  inputMail2 = jQryIter(".newsletterportlet-portlet .newsletters_check").find("input");


      var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!expr.test(email)) {
            //lblError.innerHTML = "Invalid email address.";
$(':checkbox')
  inputMail2.off('change');
inputMail2.attr("onchange", "off");


var x = document.createElement("span");
x.setAttribute("id", "lblError");
  var t = document.createTextNode("Invalid email address!!!!");
  x.appendChild(t);
  document.body.appendChild(x);
console.log("Invalid email address.");

        }
	else {
  inputMail2.on('onchange');

ITER.newsletter.manageLightNewsletter(this.id, this.checked, 
									'Subscri\u00E7\u00E3o realizada', 
									'Subscri\u00E7\u00E3o desactivada', 
									'N\u00E3o se pode processar a peti\u00E7\u00E3o',
									'Existe um utilizador registrado com este email', 
									'Deve aceitar os t\u00E9rminos');
							
	}

}




/*


  inputMail2 = jQryIter(".newsletterportlet-portlet .newsletters_check").find("input");
  inputMail2.attr("type", "submit");


jQuery(".newsletterportlet-portlet .newsletters_check input[type='checkbox']").change(function() {
jQuery(this).submit();
});
jQuery(".newsletterportlet-portlet .newsletters_check").find("input").change(function() {
jQuery(this).submit();
});

*/




/*
  inputMail2 = jQryIter(".newsletterportlet-portlet .newsletters_check").find("input");
  var validate= "ValidateEmail()";
  inputMail2.attr("id", "lblError");
  inputMail2.attr("onclick", validate);
*/
