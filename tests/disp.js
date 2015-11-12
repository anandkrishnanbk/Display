describe("Controller Test", function () {

    // Arrange
    var mockScope, controller;

    beforeEach(angular.mock.module("myApp"));

    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
        mockScope = $rootScope.$new();
        $controller("validateCtrl", {
            $scope: mockScope
        });
    }));

    // Act and Assess
    it("Creates variable", function () { 
		mockScope.myText="myName";
        expect(mockScope.myText.length).toEqual(6);
    })
});