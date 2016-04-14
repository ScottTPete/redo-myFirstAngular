angular.module('friendList')
	.controller('mainCtrl', function($scope) {
	
	$scope.friends = ["Nirvon", "Ryan", "Romney", "Obama"];
	
	$scope.addFriend = function (friend) {
		$scope.friends.push(friend);
	}
	
})