// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require ../shared/jquery.autosize.js

// check this - https://wowjs.uk/docs.html

WebFontConfig = {
  google: {
    families: ['Lato:400,700']
  }
};
(function () {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

function makeTextareaResizable() {
  $('textarea').autosize();
}

function bindCollapse() {
  $('.collapse').on('shown.bs.collapse', function (e) {
    var $card = $(this).closest('.card');
    ajustedPosition = $card.offset().top - 80
    $('html,body').animate({
      scrollTop: ajustedPosition
    }, 100);
  });
}

function scrollReset() {
  // (window).scrollTo(0, 0);
}

function modalContent(options) {
  defaults = {
    title: '',
    content: ''
  }
  options = Object.assign({}, defaults, options)
  modal_content = $('.templates.fedena-templates #modal-content-template').clone(true).html()
  modal_content = modal_content.replace("{{title}}", options.title).replace("{{content}}", options.content)
  $('#fedenaWebModal .modal-content').html(modal_content)
  $('#fedenaWebModal').modal('show').on('hidden.bs.modal', function (e) {
    $('#fedenaWebModal .modal-content').html('')
  })
}

function ytIframeModal(event) {
  origin = window.location.href
  // video_id = 'hiz8q6SK5Yo'
  video_id = $(event.currentTarget).data('video-id')
  title = $(event.currentTarget).data('video-title')
  // iframe_content = $('.templates.fedena-templates #youtube-iframe-template').clone(true).html()
  // iframe_content = iframe_content.replace("{{VideoId}}", VideoId).replace("{{Origin}}", origin)
  iframe_src = `"https://youtube.com/embed/${video_id}?autoplay=1&origin=${origin}"`
  iframe_options = 'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen'
  iframe_content = `<div class='iframe-yt-container' ><iframe class='iframe-yt-frame' id="ytplayer" type="text/html" width="640" height="360" src=${iframe_src} ${iframe_options} /></div>`
  modalContent({
    title: title,
    content: iframe_content
  })
}

function initYouTubeIframeLinks() {
  $('.yt-iframe-link').click(function (e) {
    ytIframeModal(e);
  })
}

function initPopOver() {
  $('.popoverTarget').html('');
  // $('[data-toggle="popover"]').popover('hide')
  $('[data-toggle="popover"]').popover({
    container: '.popoverTarget'
  })
  $('[data-toggle="tooltip"]').tooltip()
}

function initCarousel() {
  $('.carousel').carousel({});
}

function enableNavbar(e) {
  $('body').addClass('navbarOpen');
  $('.navbar-contents').show('slide');
}

function disableNavbar(e) {
  $('body').removeClass('navbarOpen');
  $('.navbar-contents').hide('slide');
}

function navbarToggle(e) {
  if ($('body').hasClass('navbarOpen')) {
    // console.log('hide navbar');
    disableNavbar();
  } else {
    // console.log('show navbar');
    enableNavbar();
  }
}

function initNavToggle() {
  // $('.fedena-navbar-toggler').on('click', function (e) {
  //     e.stopPropagation();
  //     // console.log('clickToggler')
  //     navbarToggle();
  // });

  // $('.fedena-website-content').on('click', function (e) {
  //     if ($('body').hasClass('navbarOpen')) {
  //         e.stopPropagation();
  //         // console.log('clickbody')
  //         disableNavbar();
  //     }
  // });
  $('.fedena-navbar-toggler').click(function (e) {
    e.stopImmediatePropagation();
    // console.log('clickToggler')
    navbarToggle();
  })

  $('.fedena-website-content').click(function (e) {
    if ($('body').hasClass('navbarOpen')) {
      e.stopImmediatePropagation();
      // console.log('clickbody')
      disableNavbar();
    }
  })

  $('.fedena-navbar .nav-link').click(function (e) {
    disableNavbar();
  })
}



function navbarThemeHandler() {
  const fedena_nav = document.querySelector('#fedena-navbar');
  const fedena_content = document.querySelector('#fedena-website-content');
  //   if(window.scrollY == 0) fedena_nav.dataset.theme='prefilled';
  //   if(window.scrollY == 0) fedena_nav.dataset.theme='filled';
  window.onscroll = () => {
    if (this.scrollY <= 20) {
      if (window.location.pathname == '/')
        fedena_nav.dataset.theme = 'filled';
      fedena_content.classList.remove('scroll-revealed');
    } else {
      if (window.location.pathname == '/')
        fedena_nav.dataset.theme = '';
      fedena_content.classList.add('scroll-revealed');
    }
  };
}

function scrollLinkedEvents() {
  // if (window.location.pathname == '/') 
  navbarThemeHandler()
}

function activeLinkHighlighter() {
  links = document.querySelectorAll('.navbar a[href="' + window.location.pathname + '"]');
  for (var i = 0; i < links.length; i++) {
    links[i].classList.add('current-page');
  }
}

activeLinkHighlighter()

// (window).bind("load", makeTextareaResizable);

// function onLoadScripts() {
//     makeTextareaResizable();
//     bindCollapse();
//     scrollReset();
//     initYouTubeIframeLinks();
//     initPopOver();
//     initNavToggle();
//     startScreenSlider();
// }
onTurboLinksLoadScripts = function () {}

$(document).on('turbolinks:load', function () {
  // console.log('loadeds')
  onLoadScripts();
  onGeoLoadScripts();
});

// console.log('loaded')
(function () {
  console.log('loaded')
  // onLoadScripts();
  // onGeoLoadScripts();
});