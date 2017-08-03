var $iframe = $('iframe').first();

$iframe.on('load', function(){
  $iframe.contents().find('head').append(
    $('<link/>', { rel: 'stylesheet', type: 'text/css', href: 'assets/css/main.css' }),
    $('<link/>', { rel: 'stylesheet', type: 'text/css', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }),
  );
});
