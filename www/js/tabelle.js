function ArbeitBeendet(data) {
	var self = this;
  self.date = ko.observable(data.date);
	self.von = ko.observable(data.von);
	self.bis = ko.observable(data.bis);
	self.wieviel = ko.observable(data.wieviel);
	self.was = ko.observable(data.was);
}

function ArbeitViewModel() {
  var self = this;  
  self.arbeitsListe = ko.observableArray([]);
	self.beschaeftigung = ko.observable();
	
	self.addToTable = function() {
		self.arbeitsListe.push(new ArbeitBeendet("", "", "", "", "Kuku"));
    self.beschaeftigung("");
  };
}

ko.applyBindings(new ArbeitViewModel());