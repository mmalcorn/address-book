//BE
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}
function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

$(document).ready(function() {
    $("form#addressBook").submit(function(event) {
      event.preventDefault();

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var inputtedStreet = $("input#street").val();
      var inputtedCity = $("input#city").val();
      var inputtedState = $("input#state").val();

      var newContact = new Contact (inputtedFirstName, inputtedLastName);
      var newAddress = new Address (inputtedStreet, inputtedCity, inputtedState);


  $("ul#contact").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#street").val("");
  $("input#city").val("");
  $("input#state").val("");

  $(".contact").last().click(function() {
  $("#show-contact").show();
  $("#show-contact h2").text(newContact.firstName);
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
  $(".street-name").text(newAddress.street);
  $(".city-name").text(newAddress.city);
  $(".state-name").text(newAddress.state);



    })
    })
  });
