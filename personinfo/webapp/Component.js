sap.ui.define(
    ["sap/suite/ui/generic/template/lib/AppComponent"],
    function (Component) {
        "use strict";

        return Component.extend("personinfo.Component", {
            metadata: {
                manifest: "json"
            },

            onAddNewItemPress: function() {
                var oModel = this.getModel();
                var oContext = oModel.createEntry("/EmployeeDetailsSet", {
                    properties: {
                        // Add your properties here
                        // For example:
                        // "EmployeeID": "123",
                        // "FirstName": "John",
                        // "LastName": "Doe",
                        // ...
                    },
                    success: function() {
                        sap.m.MessageToast.show("New item created successfully");
                    },
                    error: function() {
                        sap.m.MessageToast.show("Error creating new item");
                    }
                });

                // Submit the changes to the server
                oModel.submitChanges();
            }
        });       
    }
);