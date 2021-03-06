$(document).ready(function(){
var myLabelFormatter = function (context) {
    var label = context.label;

    // if it's a single bird seen, add an exclamation mark to the outer label
    if (context.section === 'outer') {
        if (context.value === 1) {
            label = label + '!';
        }
    }
    return label;
};
var pie = new d3pie("pop",{
header:{
 title: {
		text : "Population"
		}
 },
 	size: {
		canvasHeight: 300,                 canvasWidth: 300,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
    labels: {
        formatter: myLabelFormatter,
        inner: {
            format: "value"
        }
    },
 data :{
		content: [
		{label: "Male", value: 9229},
		{label: "Female", value: 8864}
		]
 
 }

});
var pie = new d3pie("occupation",{
header:{
 title: {
		text : "Occupation"
		}
 },
  	size: {
		canvasHeight: 300,                 canvasWidth: 300,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
	    labels: {
        formatter: myLabelFormatter,
        inner: {
            format: "value"
        }
    },
 data :{
		content: [
		{label: "Agriculture", value: 46},
		{label: "Civil Service", value: 3},
		{label: "Non-Civil Service", value: 5},
		{label: "Foreign Employment", value: 12},
		{label: "Labour", value: 23},
		{label: "Unemployement", value: 10}
		]
 
 }

});
var pie = new d3pie("literacy",{
header:{
 title: {
		text : "Literacy Percentage"
		}
 },
  	size: {
		canvasHeight: 300,                 canvasWidth: 300,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
	    labels: {
        formatter: myLabelFormatter,
        inner: {
            format: "value"
        }
    },
 data :{
		content: [
		{label: "Male Literate", value: 78},
		{label: "Female Literate", value: 67}
		]
 
 }

});
var pie = new d3pie("livestock",{
header:{
 title: {
		text : "Number of Livestock"
		}
 },
  	size: {
		canvasHeight: 300,                 canvasWidth: 300,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
	    labels: {
        formatter: myLabelFormatter,
        inner: {
            format: "value"
        }
    },
 data :{
		content: [
		{label: "Cow", value: 957},
		{label: "Buffalo", value: 1172},
		{label: "Goat", value: 4283},
		{label: "Other", value: 3556}
		]
 
 }

});
var pie = new d3pie("agri-pop",{
header:{
	title: {
	text : "Household with Agriculture Production"
	}
},
 	size: {
		canvasHeight: 300,                 canvasWidth: 300,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
	    labels: {
        formatter: myLabelFormatter,
        inner: {
            format: "value"
        }
    },
data : {
 content: [
 {label: "Food Crops", value : 71},
 {label : "Cash Crops", value: 12},
 {label: "Grains", value: 44},
 {label: "Other", value: 3}
 ]

}


});

});