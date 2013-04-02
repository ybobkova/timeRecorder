function ArbeitBeendet(date, von, bis, wieviel, was) {
	var self = this;
  self.date = date;
	self.von = von;
	self.bis = bis;
	self.wieviel = wieviel;
	self.was = was;
}

function ArbeitViewModel() {
  var self = this;  
  self.arbeitsListe = ko.observableArray([]);
	self.beschaeftigung = ko.observable();
	
	self.newAddToTable = function() {
		self.arbeitsListe.push(new ArbeitBeendet("", "", "", "", this.beschaeftigung()));
    self.beschaeftigung("");
  };
  
  self.oldAddToTable = function() {
		self.arbeitsListe.push(new ArbeitBeendet("", "", "", "", this.beschaeftigung()));
  };
}

ko.applyBindings(new ArbeitViewModel());