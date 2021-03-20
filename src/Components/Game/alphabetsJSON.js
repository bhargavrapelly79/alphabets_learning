import React from 'react';

const alphabets=[
    {
        _id:"A",
        _id_num:1,
        list:[
            {name_upper_case: "APPLE", name_lower_case: "apple", imageUrl: "images/alphabets/A/apple.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "AEROPLANE", name_lower_case: "aeroplane", imageUrl: "images/alphabets/A/aeroplane.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "ANT", name_lower_case: "ant", imageUrl: "images/alphabets/A/ant.jpg",hei:"100px",wid:"100px"}
        ]
    },
    {
        _id:"B",
        _id_num:2,
        list:[
            {name_upper_case: "BALL", name_lower_case: "ball", imageUrl: "images/alphabets/B/ball.png",hei:"100px",wid:"100px"},
            {name_upper_case: "BAT", name_lower_case: "bat", imageUrl: "images/alphabets/B/bat.png",hei:"100px",wid:"100px"},
            {name_upper_case: "BALLOON", name_lower_case: "ballon", imageUrl: "images/alphabets/B/balloon.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"C",
        _id_num:3,
        list:[
            {name_upper_case: "CAT", name_lower_case: "cat", imageUrl: "images/alphabets/C/cat.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "CAR", name_lower_case: "car", imageUrl: "images/alphabets/C/car.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "CHAIR", name_lower_case: "chair", imageUrl: "images/alphabets/C/chair.jpg",hei:"100px",wid:"100px"}
        ]
    },
    {
        _id:"D",
        _id_num:4,
        list:[
            {name_upper_case: "DOG", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "DOLL", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "DOLPHIN", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.png",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"E",
        _id_num:5,
        list:[
            {name_upper_case: "EGG", name_lower_case: "egg", imageUrl: "images/alphabets/E/egg.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "ELEPHANT", name_lower_case: "elephant", imageUrl: "images/alphabets/E/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "EAGLE", name_lower_case: "eyes", imageUrl: "images/alphabets/E/eagle.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"F",
        _id_num:6,
        list:[
            {name_upper_case: "FISH", name_lower_case: "dog", imageUrl: "images/alphabets/F/fish.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "FAN", name_lower_case: "doll", imageUrl: "images/alphabets/F/fan.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "FLOWER", name_lower_case: "flower", imageUrl: "images/alphabets/F/flower.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"G",
        _id_num:7,
        list:[
            {name_upper_case: "GOAT", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "GUN", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "GORILLA", name_lower_case: "dolphin", imageUrl: "images/alphabets/G/gorilla.png",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"H",
        _id_num:8,
        list:[
            {name_upper_case: "HAT", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "HORSE", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "HOUSE", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"I",
        _id_num:9,
        list:[
            {name_upper_case: "IGLOO", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "ISLAND", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "IRON", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"J",
        _id_num:10,
        list:[
            {name_upper_case: "JUG", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "JUICE", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "JEEP", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"K",
        _id_num:11,
        list:[
            {name_upper_case: "KITE", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "KING", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "KANGAROO", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"L",
        _id_num:12,
        list:[
            {name_upper_case: "LION", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "LEG", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "LIZARD", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"M",
        _id_num:13,
        list:[
            {name_upper_case: "MONKEY", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "MILK", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "MANGO", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"N",
        _id_num:14,
        list:[
            {name_upper_case: "NOSE", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "NUTS", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "NEST", name_lower_case: "dolphin", imageUrl: "images/alphabets/N/est.png",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"O",
        _id_num:15,
        list:[
            {name_upper_case: "OWL", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "ORANGE", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "OSTRICH", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"P",
        _id_num:16,
        list:[
            {name_upper_case: "PARROT", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "POT", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "PENGUIN", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"Q",
        _id_num:17,
        list:[
            {name_upper_case: "QUEEN", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "QUAIL", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "QUIET", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"R",
        _id_num:18,
        list:[
            {name_upper_case: "RABBIT", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "ROSE", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "RAT", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"S",
        _id_num:19,
        list:[
            {name_upper_case: "SUN", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "SOAP", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "SNAKE", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"T",
        _id_num:20,
        list:[
            {name_upper_case: "TOUNGE", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "TORTOISE", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "TREE", name_lower_case: "dolphin", imageUrl: "images/alphabets/T/tree.png",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"U",
        _id_num:21,
        list:[
            {name_upper_case: "UMBRELLA", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "UCALIPTUs", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "UNICORN", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"V",
        _id_num:22,
        list:[
            {name_upper_case: "VAN", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "VULTURE", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "VOILINE", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"W",
        _id_num:23,
        list:[
            {name_upper_case: "WATER", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "WHALE", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "WOLF", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"X",
        _id_num:24,
        list:[
            {name_upper_case: "XMAS TREE", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "XYLOPHONE", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "XEROX", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"Y",
        _id_num:25,
        list:[
            {name_upper_case: "YELLOW", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "YALK", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "YARN", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
    ,
    {
        _id:"Z",
        _id_num:26,
        list:[
            {name_upper_case: "ZEBRA", name_lower_case: "dog", imageUrl: "images/alphabets/D/dog.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "ZOO", name_lower_case: "doll", imageUrl: "images/alphabets/D/doll.jpg",hei:"100px",wid:"100px"},
            {name_upper_case: "ZIP", name_lower_case: "dolphin", imageUrl: "images/alphabets/D/dolphin.jpg",hei:"100px",wid:"100px"}
        ]
    }
]

export default alphabets;