$(document).ready(function main()
{
    $('section').hide();
    $('#carousel-sect').show();
    $('#my-placement').show();

    $('.carousel-item .btn a').on('click', function()
    {
        var $toBeDisp = $(this).attr('rel');
        $('section').hide();
        $('#'+$toBeDisp).show();

        $('.btn a').on('click', function()
        {
            back();
        });

    function back()
    {
        $('section').hide();
        main();
    }
    });
});