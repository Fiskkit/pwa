<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
  $(".nav-toggle,.navbar-account").on("click", function(e) {
  if(e && e.preventDefault)  {
  e.preventDefault();
  }
  $(".page-wrapper").toggleClass("open");
  });

  $(".sidebar-overlay").on("click", function(e) {
  $(".page-wrapper").removeClass("open");
  });

  //
  $(".select-tag-link").on("click", function(e) {
    if(e && e.preventDefault)  {
    e.preventDefault();
    }
    $(".select-tag").toggleClass("open");
    });
  });
</script>
