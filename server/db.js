'use strict';

var Sequelize = require('sequelize');
var databaseURI = 'postgres://localhost:5432/journey';

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

var User = db.define('user', {
	id : {
		type: Sequelize.STRING,
		primaryKey: true,
		unique: true
	},
  name: {
  	type: Sequelize.STRING
  },
  source: {
  	type: Sequelize.STRING
  }
});

var Journey = db.define('journey', {
	name: {
		type: Sequelize.STRING
	},
	source: {
		type: Sequelize.STRING
	},
	created: {
		type: Sequelize.DATE
	}
});

var Post = db.define('post', {
	fbpostid: {
		type: Sequelize.STRING
	},
	story: {
		type: Sequelize.TEXT,
		defaultValue: null
	},
	message: {
		type: Sequelize.TEXT,
		defaultValue: null
	},
	source: {
		type: Sequelize.STRING,
		defaultValue: null
	},
	country: {
		type: Sequelize.STRING
	},
	created: {
		type: Sequelize.DATE,
	},
	likes: {
		type: Sequelize.INTEGER
	}
});

// One User has many Journeys 
User.hasMany(Journey);
Journey.belongsTo(User);

// Each country can have many posts
Journey.belongsToMany(Post, {through: 'journeypost'});
Post.belongsToMany(Journey, {through: 'journeypost'});

module.exports = db;
