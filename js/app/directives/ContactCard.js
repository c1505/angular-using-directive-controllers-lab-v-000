function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ name }}',
				'<label>Email:</label>',
				'{{ email }}',
				'<label>Phone:</label>',
				'{{ phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ username }}</span>',
			'</div>'
		].join(''),
		restrict: 'E',
		controller: function($scope) {
			$scope.username = $scope.username.toLowerCase();
		}
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);

	// Attach a controller to our contact card directive, changing all usernames to be displayed in 
	// lowercase. ** Note ** You should NOT have to edit the ContactController file in any way.