$(document).ready(function () {

	function navbar() {
		if ($(this).scrollTop() >= $(window).height()/2) {
			$('.page-navbar').addClass("fixed-top");
		} else {
			$('.page-navbar').removeClass("fixed-top");
		};
	};
	navbar();
	$(window).on("scroll", navbar);

	$(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
		e.stopPropagation();
	});

	$(".sandwich").on("click", function() {
	$("body").toggleClass("menubar-in");
	});

	$("#sandwich-dashboard").on("click", function(){
	$(this).toggleClass("active");
	$("body").toggleClass("menubar-dashboard");
	$("html").toggleClass("o-hidden");
	window.dispatchEvent(new Event('resize'));
	});

  $(function () {
    $(".switcher").change(function() {
    if ($(this).is(":checked")) {
      $(this).parent('.form-check-label').siblings('.block-tags').show();

    } else {
      $(this).parent('.form-check-label').siblings('.block-tags').hide();

    }
    });
  });

  Waves.attach('.btn-pitch, .btn-subscribe, .a-pitch');
  Waves.attach('.btn',  ['waves-light']);
  Waves.init();

var start = moment("05/12/2021"),
    end   = moment("06/11/2028");

function cb(start, end) {
    $('#reportrange').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
};

$('#reportrange').daterangepicker({
    startDate: start,
    endDate: end,
}, cb);

cb(start, end);

$('input[name="birthday1"], input[name="birthday2"]').daterangepicker({
  singleDatePicker: true,
  showDropdowns: true,
  minYear: 2000,
  maxYear: parseInt(moment().format('YYYY'),10)
});

 var placeholder;
  $(document).on('change', '.uploader-input', function() {
    var input = $(this),
        profilePicValue = input.val(),
        fileNameStart = profilePicValue.lastIndexOf('\\'); /* finds the end of the filepath */
    profilePicValue = profilePicValue.substr(fileNameStart + 1).substring(0, 20); /* isolates the filename */
    placeholder = input.siblings('.form-control').find('.image').attr('src');
    if (profilePicValue != '') {
      input.siblings('.form-control').children('.uploader-text').html(profilePicValue);
      input.closest('.koine-uploader').addClass('uploaded');
    };
    let file = this.files[0]; 
    var reader = new FileReader();
    reader.onload = function (e) {
      input.siblings('.form-control').find('.image').attr('src', e.target.result);
    };
    reader.readAsDataURL(file);
  }).on('click', '.delete', function() {
    $(this).closest('.koine-uploader').removeClass('uploaded').find('input[type="file"]').val('').siblings('.form-control').children('.uploader-text').html('Upload your auction license certificate');
    $(this).closest('.koine-uploader').find('.image').attr('src', placeholder);
  });

});