//the base for a convertation will be 1 meter

const convertationRulesJson = `{
	"m": {
	  "name": "meter",
	  "conversion": 1
	},
	"cm": {
	  "name": "centimeters",
	  "conversion": 0.01
	},
	"mm": {
	  "name": "milimeter",
	  "conversion": 0.001
	},
	"km": {
	  "name": "kilometer",
	  "conversion": 1000
	},
	"ft": {
	  "name": "foot",
	  "conversion": 0.3048
	},
	"in": {
	  "name": "inches",
	  "conversion": 0.0254
	},
	"yd": {
		"name": "yard",
		"conversion": 0.9144
	},
	"ml": {
		"name": "mile",
		"conversion": 1609.344
	}
  }`;

const convertationRules = JSON.parse(convertationRulesJson);

export default convertationRules;
