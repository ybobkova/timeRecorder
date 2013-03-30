function ArbeitBeendet(tableLine) {
	var self = this;
  self.date = ko.observable(tableLine.date);
	self.von = ko.observable(tableLine.von);
	self.bis = ko.observable(tableLine.bis);
	self.wieviel = ko.observable(tableLine.wieviel);
	self.was = ko.observable(tableLine.was)
}

function ArbeitViewModel() {
  var self = this;  
  self.arbeitsListe = ko.observableArray([]);
	self.beschaeftigung = ko.observable();
	
	self.addToTable = function() {
		self.arbeitsListe.push(new ArbeitBeendet("","","","",self.beschaeftigung()));
    self.beschaeftigung("");
  };
}

ko.applyBindings(new ArbeitViewModel());