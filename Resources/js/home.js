$(document).ready(function()
{
    $('header').hide();
    $('#about').hide();
    $('#placement').hide();
    $('#reflection').hide();

    $('#home #hdr-btn').on('click', function()
    {
        $('#home').hide();
        $('#about').show();
        $('header').show();
    });

    $('nav li').on('click', function()
   {
        var $toBeDisp = $(this).attr('rel');
        $('section').hide();
        $('#'+$toBeDisp).show();

        if($toBeDisp === 'home')
        {
            $('header').hide();
        }
   });
});