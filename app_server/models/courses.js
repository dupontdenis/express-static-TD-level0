const courses = [{ id: 1, name: 'HTML', info: 'le langage à balises HTML5', levels: ["L1", "L2"] }
    , { id: 2, name: 'CSS', info: "les selecteurs CSS4", levels: ["L2", "M2"] }
];

const menu = [
    {
        title: "L1",
        subnav: [{
            title: "HTML"
        }]
    }
    , {
        title: "L2",
        subnav: [{
            title: "HTML"
        }
            , {
            title: "CSS"
        }]
    }
    , {
        title: "M2",
        subnav: [{
            title: "CSS"
        }]
    }
]

module.exports = {
    courses,
    menu
}