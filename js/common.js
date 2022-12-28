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

});