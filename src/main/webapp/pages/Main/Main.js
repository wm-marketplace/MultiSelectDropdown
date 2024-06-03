Prefab.onPropertyChange = function(key, newVal, oldVal) {

};

Prefab.onReady = function() {
    // this method will be triggered post initialization of the prefab.
};

Prefab.placeholderValue = function() {
    var placeholderItems = [];
    _.forEach(Prefab.Widgets.checkboxsetOptions.datavalue, function(obj) {
        placeholderItems.push(obj[Prefab.fielddisplayvalue]);
    });
    return placeholderItems.join(',');
};

/*
 * Method to clear selected data of checkboset
 */
Prefab.clearSelectedData = function() {
    Prefab.selecteddata = [];
    Prefab.Widgets.checkboxsetOptions.datavalue = [];
};
Prefab.checkboxsetOptionsClick = function($event, widget) {
    Prefab.onChange();
};
