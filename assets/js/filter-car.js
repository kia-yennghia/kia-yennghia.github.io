    // filterbox
    function filterCategory(val) {
      var activeFilter;
      if (activeFilter != val) {
        //reset
        $(".auto-list .product-listing-m").removeClass("active");

        // filter elements
        $(".auto-list .product-listing-m")
          .filter('[data-model="' + val + '"]')
          .addClass("active");
        // reset active filter
        activeFilter = val;
      }
    }
    $(".product-listing-m").addClass("active");
    $(".form-group select").change(function () {
      if ($(this).val() == "") {
        $(".auto-list .product-listing-m").addClass("active");
        activeFilter = "";
      } else {
        filterCategory($(this).val());
      }
    });

