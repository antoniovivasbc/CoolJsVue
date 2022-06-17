import jQuery from "jquery";
const $ = jQuery;
window.$ = $;
$('.form-inactive').each(function(){
    $(this).submit(function(e){
        e.preventDefault();
    })
})
