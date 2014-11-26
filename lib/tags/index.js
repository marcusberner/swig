function addDefaults(tags, filters) {
	tags = tags || {};
	tags.autoescape = require('./autoescape');
	tags.block = require('./block');
	tags["else"] = require('./else');
	tags.elseif = require('./elseif');
	tags.elif = exports.elseif;
	tags["extends"] = require('./extends');
	tags.filter = require('./filter')(filters);
	tags["for"] = require('./for');
	tags["if"] = require('./if');
	tags["import"] = require('./import');
	tags.include = require('./include');
	tags.macro = require('./macro');
	tags.parent = require('./parent');
	tags.raw = require('./raw');
	tags.set = require('./set');
	tags.spaceless = require('./spaceless');
	return tags;
}


module.exports = exports = addDefaults(function (filters) {
	return addDefaults({}, filters);
});

