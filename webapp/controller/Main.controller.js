sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap-azure.Azure-Hosting.controller.Main", {
		onInit: function () {

		},
		
		openGitHub: function(oEvent){
			window.open("https://github.com/MartinPankraz/UI5OnAzure");
		}
	});
});