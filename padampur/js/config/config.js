config = {
    api: {
        url: "padampur/data/",
        type: "GET",
        "location-summary-base-url": "location_summary/"
    },
    otherAPIs: {
        overpass: {
            url: "."
        }
    },
    "map-options":{
        "min-zoom": 13,
        "max-zoom": 22,
        "init-zoom": 14.4,
        "center": [27.6869, 84.5078]
    },
   "layer-styles":{
        "map-features":{
           "khet":{
             "color": "#e6db68",
               "weight": 4,
                "opacity": 0.2,
                "fillColor": "url('#khet')",
                "fillOpacity": 1
            },
            "bari":{
             "color": "#855a19",
               "weight": 2,
                "opacity": 0.4,
                "fillColor": "url('#bari')",
                "fillOpacity": 1
            },
			            "orchard":{
                "color": "#4fd6c6",
                "weight": 2,
                "opacity": 1,
                "fillColor": "url('#orchard')",
                "fillOpacity": 1
            },
			     "kiwi":{
                "color": "#ed7474",
                "weight": 2,
                "opacity": 1,
                "fillColor": "url('#kiwi')",
                "fillOpacity": 1
            },
            "banana":{
                "color": "#ebeb52",
                "weight": 2,
                "opacity": 1,
                "fillColor": "url('#banana')",
                "fillOpacity": 1
            },
                "brinjal":{
                 "color": "#ebeb52",
                "weight": 2,
                "opacity": 1,
                "fillColor": "url('#brinjal')",
                "fillOpacity": 1
            },
			    "maize":{
                  "color": "#ebeb52",
                "weight": 2,
                "opacity": 1,
                "fillColor": "url('#corn')",
                "fillOpacity": 1
            }
        },
        "pie-chart-segments":{
            "rice": "#cccc33",
            "potatoes": "#cc7700"
        },
        "inset-map-current-view":{
            opacity: 0,
            fillOpacity: 0
        },
        "legend-icons":{
            "khet": {
			"background-image":"images/khet.PNG",
			},
           "bari": "images/bari.PNG",       
		 "orchard": "images/orchard.PNG",
		 "trunk road": "images/trunk.PNG",
		 "track": "images/track.PNG",
		 "path": "images/path.PNG"
		 }
    },
    "navbar": {
        //title: "Khetibali",
       tabs: ["Map","Padampur", "Statistics", "Mapping Process", "Khetibali"]
    },
    "main-headings":{
        //"start-page": ["About"],
        "start-page":["Map","Padampur", "Statistics", "Mapping Process", "Khetibali"]
    },
    "start-screen-zoom-limits":{
        "max":22,
        "min": 13
    },
    "basemap-servers": [
        "http://{s}.tile.openstreetmap.org",
       // "http://104.131.69.181/osm"
    ],
    "month-list":[
        "Baishak",
        "Jestha",
        "Ashar",
        "Shrawan",
        "Bhadra",
        "Ashwin",
        "Kartik",
        "Mangshir",
        "Paush",
        "Magh",
        "Falgun",
        "Chaitra"
    ],
    "seasons":{
        "0":"Baishak - Ashad",
        "3":"Shrawan - Aswin",
        "6":"Kartik - Poush",
        "9":"Magh - Chaitra"
    },
        "warm-crops":[
       "maize",
        "off-season cauliflower",
        "rice",
        "capsicum",
            "chilli",
            "brinjal",
            "millet",
            "musuro",
            "mass",
            "brinjal"
        ],
    "cool-crops":[
        "potato",
        "cauliflower",
        "mustard",
        "green peas",
        "radish",
        "cabbage",
    "coriander",
    "wheat",
    "lentils",
    "fapar"
    ]
};

LayerStyles = config["layer-styles"];

