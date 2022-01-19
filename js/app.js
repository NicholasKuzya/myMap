// let form = document.forms.navigation;
// let elemInputs = form.elements.loc;


function initMap() {
  var opt = {
    center: {lat: 55.766620, lng: 37.569437},
    zoom: 10
  }
  const autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete"),
    { types: ["geocode"],
      componentRestrictions: {'country': ['gb']},
      fields: ['place_id', 'geometry', 'formatted_address'] }
  );
    autocomplete.addListener("place_changed", addUserLocation);
    function addUserLocation() {
      // Get the place details from the autocomplete object.
      const place = autocomplete.getPlace();

      // Add a marker to the map.
      const marker = new google.maps.Marker({
              map: map
            });

      marker.setLabel("C");
      marker.setPosition(place.geometry.location);

      // Zoom the map to the marker.
      map.panTo(place.geometry.location);
      map.setZoom(12);
    }

  var map = new google.maps.Map(document.getElementById('map'), opt)

}

let buttonAddField = document.querySelector('.add_field');
let formsElement = document.querySelector('.b-forms')
let inputsForm = document.querySelector('.b-forms-fields')
buttonAddField.addEventListener("click", function(e) {
  var addInputs = document.createElement('input')
  addInputs.classList.toggle('b-forms-fields');
  console.log()
  formsElement.insertAdjacentElement(
    'beforeend', addInputs
    // `<input type="text" class="b-forms-fields" placeholder="Добавьте точку отправления" name="loc" id="">`
  )
});
// document.forms.navigation.onsubmit = function() {
//   var loc = this.loc.value;
//   console.log(loc)
//   return false;
// };
// let inputId = document.querySelector(".b-forms-fields").value;
//
// document.forms.navigation.onsubmit = function() {
//   var loc = document.querySelector(".b-forms-fields").value;
//   console.log(loc)
//   return false;
// };


let inputsGet = document.querySelector("input").value
console.log(inputsGet)
