function ArbeitBeendet(arbeitVersuch) {
    var self = this;
    self.data = ko.observable(arbeitVersuch);
}

function ArbeitViewModel() {
    var self = this;

    self.newArbeit = [
        { date: "07.08.1992", von: "03:00", bis: "06:00", wieviel: "03:00", was: "Bootstrap" },
        { date: "19.09.1972", von: "03:00", bis: "08:00", wieviel: "05:00", was: "CMS" }
    ];    

    self.arbeit = ko.observableArray([
        new ArbeitBeendet(self.newArbeit[0]),
        new ArbeitBeendet(self.newArbeit[1])
    ]);
}

ko.applyBindings(new ArbeitViewModel());