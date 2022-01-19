/*----newsletter_cancelar----*/
/* Insert placeholder input newsletter */
function addEmailNewsletter() {
    var emailNewsletter = "endereço@email.com";
    inputMail = jQryIter(".advanced-cancelar.newsletterportlet-portlet .newsletter_email_div").find("value");
    //inputMail.attr("placeholder", emailNewsletter);
    inputMail.attr("value", emailNewsletter);
}
jQuery(document).ready(addEmailNewsletter);