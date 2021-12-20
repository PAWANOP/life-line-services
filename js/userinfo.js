

var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};


$(window).on("load", function(){

  $('.save-button').on('click', save_onclick);
  // $('.cancel-button').on('click', cancel_onclick);
  $('.edit-button').on('click', edit_onclick);

  $('.edit-button').hide();
  // $('.save-button').hide();
});

function edit_onclick(){
  setFormMode($(this).closest("form"), 'edit');

  // document.querySelector(".fullname-user").value = localStorage.getItem("fullname-user");
  // document.querySelector(".number-user").value = localStorage.getItem("number-user");
  // document.querySelector(".email-user").value = localStorage.getItem("email-user");
  //  document.getElementById("gender-user").value = localStorage.getItem("gender-user");
  //  document.getElementById("dateofbirth-user").value = localStorage.getItem("dateofbirth-user");
}


function save_onclick(){
  setFormMode($(this).closest("form"), 'view');


  // localStorage.setItem("fullname-user", u);
  // localStorage.setItem("number-user", v);
  // localStorage.setItem("email-user", x);
  // localStorage.setItem("gender-user", y);
  // localStorage.setItem("dateofbirth-user", z);
}


function setFormMode($form, mode){
  switch(mode){
      case 'view':
          $form.find('.save-button').hide();
          $form.find('.edit-button').show();
          $form.find("input, select").prop("disabled", true);
          break;
      case 'edit':
          $form.find('.save-button').show();
          $form.find('.edit-button').hide();
          $form.find("input, select").prop("disabled", false);
          break;
  }
}









var app = {};

app.tabs = (function() {
    var module = {};

    module.init = function() {

        var $tabs            = $('.tabs');
        var $tabList         = $('.tabs__list');
        var $tabItem         = $('.tabs__item');
        var $tabItemActive   = $('.tabs__item--active');
        var $tabLink         = $('.tabs__link');
        
        var width            = $(window).width();

        var tabSwitcher = function() {
            $tabLink.on('click', function(e) {
                var currentAttrValue = jQuery(this).attr('href');

               
                $('.tabs ' + currentAttrValue).addClass('tabs__area--active').siblings().removeClass('tabs__area--active')

               
                $(this).parent('li').addClass('tabs__item--active').siblings().removeClass('tabs__item--active');

                e.preventDefault();
            });
        }

        var tabToggle = function() {
            $tabItem.on('click', function(e) {
                $(this).parent($tabList).toggleClass('tabs__list--open');
            });
        }

        var tabController = function() {
            tabToggle();
        }
        
        $(window).resize(function() {
            var width = $(window).width();
            if ($(window).width() != width) {
                width = $(window).width();
                tabController();
            }
        });

        tabController();
        tabSwitcher();

    };
    return module;
})();

app.tabs.init();