/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */

/*
 * This function will be invoked when any of this prefab's property is changed
 * @key: property name
 * @newVal: new value of the property
 * @oldVal: old value of the property
 */

Prefab.onPropertyChange = function(key, newVal, oldVal) {
    /*
    switch (key) {
        case "prop1":
            // do something with newVal for property 'prop1'
            break;
        case "prop2":
            // do something with newVal for property 'prop2'
            break;
    }
    */
};

Prefab.onReady = function() {
    // this method will be triggered post initialization of the prefab.
};

Prefab.placeholderValue = function() {
    var placeholderItems = [];
    _.forEach(Prefab.Widgets.checkboxsetOptions.datavalue, function(obj) {
        placeholderItems.push(obj[Prefab.feilddisplayvalue]);
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