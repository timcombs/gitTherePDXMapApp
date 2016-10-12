var filterData = {
  address: '',
  Biketown: false,
  Lyft: false,
  Uber: false,
  zoom: 17
};

filterData.getTransportationOption = function() {
  $('form').on('submit', function(event){
    event.preventDefault();
    var $this = $(this);
    $this.find('input[type="checkbox"]:checked').each(function() {
      console.log($(this).attr('value'), 'checked');
      filterData[$(this).attr('value')] = true;
    });
    $this.find('input[type="checkbox"]:not(:checked)').each(function(){
      console.log($(this).attr('value'), 'not checked');
      filterData[$(this).attr('value')] = false;
    });
    console.log($('#address').val());
    filterData.address = $('#address').val();
    googleMapping.getUpdatedLocation(googleMapping.getCurrentLocation,mapViews.setMapOnAll,filterData);
  });
};

filterData.getZoom = function() {
  $('form').on('submit', function(event){
    event.preventDefault();
    filterData.zoom = $('#searchable').find('input[type="radio"]:checked').val();
  });
};

filterData.getTransportationOption();
filterData.getZoom();
