function Place(name, latitude, longitude) {
    this.name = ko.observable(name);
    this.latitude = ko.observable(latitude);
    this.longitude = ko.observable(longitude);
    // this.priceWithTax = ko.dependentObservable(function() {
    //     return (this.price() * 1.05).toFixed(2);
    // }, this);
}

var viewModel = {
    places: ko.observableArray([]),
    filter: ko.observable("")
    //mapLocation: ko.observableArray([])
  //  filteredItems: ko.observableArray(["name":"ankit"])
};


//ko.utils.arrayFilter - filter the items using the filter text
viewModel.filteredItems = ko.computed(function() {
    var filter = this.filter().toLowerCase();
    if (!filter) {
        //viewModel.mapLocation.removeAll()
        return this.places();
    } else {
        return ko.utils.arrayFilter(this.places(), function(place) {
          initMap();
            return stringStartsWith(place.name().toLowerCase(), filter);
        });
    }
}, viewModel);


//a JSON string that we got from the server that wasn't automatically converted to an object
var JSONdataFromServer =
 '[{"name":"Naples","latitude":26.1420,"longitude":-81.7948},  \
 {"name":"Orlando","latitude":28.5383,"longitude":-81.3792},   \
  {"name":"Miami","latitude":25.7617,"longitude":-80.1918},  \
   {"name":"Charlotte","latitude":35.2271,"longitude":-80.8431},  \
    {"name":"Newyork","latitude":40.7128,"longitude":-74.0060} \
]';

//parse into an object
var dataFromServer = ko.utils.parseJson(JSONdataFromServer);

//do some basic mapping (without mapping plugin)
var mappedData = ko.utils.arrayMap(dataFromServer, function(location) {
    return new Place(location.name, location.latitude, location.longitude);
});

//console.log(mappedData[0].name())


var stringStartsWith = function (string, startsWith) {
    string = string || "";
    if (startsWith.length > string.length)
        return false;
    return string.substring(0, startsWith.length) === startsWith;
};

viewModel.places(mappedData);
//console.log(viewModel.places()[0].name());
ko.applyBindings(viewModel);
