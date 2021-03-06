app.factory('DatabaseFactory', function($http, $rootScope){
	var DatabaseFactory = {};

	DatabaseFactory.getFeed = function(friendsIdArr){
		return $http.post('/feed', {friendsIdArr: friendsIdArr})
		.then(function(response){
			return response.data;
		})
	}

	// Very powerful db call which doesn't just get all journeys, it gets ALL user data
	DatabaseFactory.getAllJourneys = function(userId){
		return $http.get('/user/' + userId + '/journeys')
		.then(function(response){
			return response.data;
		})
	}

	DatabaseFactory.getUserBasicData = function(userId){
		return $http.get('/user/' + userId)
		.then(function(response){
			return response.data;
		})
	}

	DatabaseFactory.getAllPosts = function(userId){
		return $http.get('/user/' + userId + '/posts')
		.then(function(response){
			return response.data;
		})
	}

	DatabaseFactory.checkExistence = function(userId){
		return $http.get('/user/' + userId + '/exists')
		.then(function(response){
			console.log("checkExistence responds with: ", response.data);
			return response.data;
		})
	}

	DatabaseFactory.getJourney = function(userId,journeyId){
		return $http.get('/user/' + userId + '/journeys/' + journeyId)
		.then(function(response){
			return response.data;
		})
	}

	DatabaseFactory.deleteUser = function(userId){
		return $http.delete('/user/' + userId)
		.then(function(response){
			console.log(response.data);
			return response.data;
		})
	}

	DatabaseFactory.persistJourneys = function(userId, userName, userSource, journeyArr){
		return $http.post('/user/' + userId + '/journeys', {journeys: journeyArr,
			userName: userName,
			userSource: userSource
		})
		.then(function(response){
			return response.data;
		})
	}

	DatabaseFactory.createJourney = function(userId, name, posts, source){
		return $http.post('/user/' + userId + '/createJourney', {name: name, posts: posts, source: source})
		.then(function(response){
			return response.data;
		})
	}

	return DatabaseFactory;
})