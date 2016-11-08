import externalUrlCheck   from "../helpers/externalUrlCheck.js";

export default function (window,document,$,undefined) {

  $('.js-ma-rich-text table').wrap( "<div class='ma__rich-text__table-wrapper'></div>" );

  // get the external SVG link code
  fetch('/assets/images/svg-sprite/external-link.svg', {
    method: 'get',
    headers: new Headers({
      'Content-Type': 'text/plain'
    })
  }).then(function(response) {
    return response.text();
  }).then(function(data) {
    // find all external links that need an icon
    $('.js-ma-rich-text a').each(function(){
      let $el = $(this),
          href = $el.attr('href');

      if(externalUrlCheck(href) && !$el.has('svg')) {
        // wrap the link in a span tag
        $link.wrap('<span class="ma__decorative-link"></span>');
        // append the SVG to the link
        $link.append('&nbsp;' + data);
      }
    });
  }).catch(function(e){
    console.error('external link svg not found');
  });

}(window,document,jQuery);