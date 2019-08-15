//Check whether the user has scrolled from the top of the page
$(window).on('scroll', function()
{
  //An if else statement to excecute certain functions depending on the scroll position of the page
  if ($(window).scrollTop())
  {
//If the user has scrolled from the top of the page, the script removes the css class "navbar-dark" & "bg-dark" and adds "navbar-light" and "bg-light"
//This gives the navbar a light theme
    $('nav').removeClass('navbar-dark bg-dark');
    $('nav').addClass('navbar-light bg-light');
  } 

  else
  {
//If the user has not scrolled from the top of the page, the script adds the css class "navbar-dark" & "bg-dark" and removes "navbar-light" and "bg-light"
//This gives the navbar a dark theme    
      $('nav').addClass('navbar-dark bg-dark');
      $('nav').removeClass('navbar-light bg-light');
  }
});