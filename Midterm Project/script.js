let WIDTH = 220
let HEIGHT = 440
let OFFSET = 10

let array = undefined
let index = 0
let current_control = -1
let pending_shape_queue = new Array()
let present_shape_queue = new Array()
let random_color_list = new Array(8)
const shapeTypes = ["c", "s","i", "e", "cube", "t", "ls", "l"];
let score = 0;
let stop = true;
const shapeColor = {}
const shapeColorDict = {}
const shapeJson ={
    "c":[
        {
            "height": 5,
            "width": 3,
            "point": [[0, 0], [0, 1], [0, 2], [1, 0], [2, 0], [3, 0], [4, 0], [4, 1], [4, 2]]
        },
        {
            "height": 3,
            "width": 5,
            "point": [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [1, 4], [0, 4]]
        },
        {
            "height": 5,
            "width": 3,
            "point": [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [4, 1], [4, 0]]
        },
        {
            "height": 3,
            "width": 5,
            "point": [[0, 0], [1, 0], [2, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 4], [2, 4]]
        }

    ],

    "s":[
        {
            "height": 5,
            "width": 3,
            "point": [[0, 0], [0, 1], [0, 2], [1, 0], [2, 0], [2, 1], [2, 2], [3, 2], [4, 2], [4, 1], [4, 0]]
        },
        {
            "height": 3,
            "width": 5,
            "point": [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2], [0, 2], [0, 3], [0, 4], [1, 4], [2, 4]]
        },
        {
            "height": 5,
            "width": 3,
            "point": [[0, 0], [0, 1], [0, 2], [1, 0], [2, 0], [2, 1], [2, 2], [3, 2], [4, 2], [4, 1], [4, 0]]
        },
        {
            "height": 3,
            "width": 5,
            "point": [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2], [0, 2], [0, 3], [0, 4], [1, 4], [2, 4]]
        }
    ],

    "i":[
        {
            "height": 4,
            "width": 1,
            "point": [[0, 0], [1, 0], [2, 0], [3, 0]]
        },
        {
            "height": 1,
            "width": 4,
            "point": [[0, 0], [0, 1], [0, 2], [0, 3]]
        },
        {
            "height": 4,
            "width": 1,
            "point": [[0, 0], [1, 0], [2, 0], [3, 0]]
        },
        {
            "height": 1,
            "width": 4,
            "point": [[0, 0], [0, 1], [0, 2], [0, 3]]
        }
    ],

    "e":[
        {
            "height": 5,
            "width": 3,
            "point": [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, 1], [0, 2], [2, 1], [2, 2], [4, 1], [4, 2]]
        },
        {
            "height": 3,
            "width": 5,
            "point": [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [1, 4], [0, 4], [0, 2], [1, 2]]
        },
        {
            "height": 5,
            "width": 3,
            "point": [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [4, 1], [4, 0], [2, 0], [2, 1]]
        },
        {
            "height": 3,
            "width": 5,
            "point": [[0, 0], [1, 0], [2, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 4], [2, 4], [1, 2], [2, 2]]
        }
    ],

    "cube":[
        {
            "height": 2,
            "width": 2,
            "point":  [[0, 0], [0, 1], [1, 0], [1, 1]]
        },
        {
            "height": 2,
            "width": 2,
            "point":  [[0, 0], [0, 1], [1, 0], [1, 1]]
        },
        {
            "height": 2,
            "width": 2,
            "point":  [[0, 0], [0, 1], [1, 0], [1, 1]]
        },
        {
            "height": 2,
            "width": 2,
            "point":  [[0, 0], [0, 1], [1, 0], [1, 1]]
        }
    ],

    "t":[
        {
            "height": 2,
            "width": 3,
            "point": [[0, 0], [0, 1], [0, 2], [1, 1]]
        },
        {
            "height": 3,
            "width": 2,
            "point": [[0, 0], [1, 0], [2, 0], [1, 1]]
        },
        {
            "height": 2,
            "width": 3,
            "point": [[1, 0], [1, 1], [1, 2], [0, 1]]
        },
        {
            "height": 3,
            "width": 2,
            "point": [[0, 1], [1, 1], [2, 1], [1, 0]]
        }
    ],

    "ls":[
        {
            "height": 3,
            "width": 2,
            "point": [[1, 0], [2, 0], [0, 1], [1, 1]]
        },
        {
            "height": 2,
            "width": 3,
            "point": [[0, 0], [0, 1], [1, 1], [1, 2]]
        },
        {
            "height": 3,
            "width": 2,
            "point": [[1, 0], [2, 0], [0, 1], [1, 1]]
        },
        {
            "height": 2,
            "width": 3,
            "point": [[0, 0], [0, 1], [1, 1], [1, 2]]
        }
    ],

    "l":[
        {
            "height": 3,
            "width": 2,
            "point": [[0, 1], [1, 1], [2, 0], [2, 1]]
        },
        {
            "height": 2,
            "width": 3,
            "point": [[0, 0], [0, 1], [0, 2], [1, 2]]
        },
        {
            "height": 3,
            "width": 2,
            "point": [[0, 0], [1, 0], [2, 0], [0, 1]]
        },
        {
            "height": 2,
            "width": 3,
            "point": [[0, 0], [1, 0], [1, 1], [1, 2]]
        }
    ]
}

function classObjectClone(obj){
    return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj)
}

function randomNumber(){
    return Math.floor(Math.random()*1e8)+1;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 4; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    color += "00"
    return color;
}

function draw_line(ctx, x1, y1, x2, y2){
    ctx.moveTo(x1+OFFSET, y1+OFFSET);
    ctx.lineTo(x2+OFFSET, y2+OFFSET);
    ctx.stroke();
}

function draw_grid(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.lineWidth = "1";
    ctx.strokeStyle = 'white';
    for(let i = 1; i <= 19; i++){
        draw_line(ctx, 0, i*(HEIGHT/20), WIDTH, i*(HEIGHT/20))
    }
    for(let i = 1; i <= 9; i++){
        draw_line(ctx, i*(WIDTH/10), 0, i*(WIDTH/10), HEIGHT)
    }
    draw_line(ctx, 0, 0, 0, HEIGHT)
    draw_line(ctx, 0, 0, WIDTH, 0)
    draw_line(ctx, WIDTH, 0, WIDTH, HEIGHT)
    draw_line(ctx, 0, HEIGHT, WIDTH, HEIGHT)
}

function draw_block_on_specific_x_and_y(ctx, x, y, color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(y+OFFSET+1, x+OFFSET+1, (HEIGHT/20)-2, (WIDTH/10)-2);
    ctx.stroke();
}

function build_array(){
    array = new Array(20)
    for(let i = 0; i < 20; i++){
        array[i] = new Array(10)
        for(let j = 0; j < 10; j++){
            array[i][j] = 0
        }
    }
}

function draw_from_array(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    for(let i = 0; i < 20; i++){
        for(let j = 0; j < 10; j++){
            if(array[i][j] >= 1){
                draw_block_on_specific_x_and_y(ctx, i*(HEIGHT/20), j*(WIDTH/10), shapeColorDict[array[i][j]])
            }
        }
    }
}

function draw_border_from_xy(x, y, item_width, item_height){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "red";
    ctx.rect(x*(HEIGHT/20)+OFFSET, y*(WIDTH/10)+OFFSET, item_width*(HEIGHT/20), item_height*(WIDTH/10)-2);
    ctx.stroke();
}

function set_array_from_component(component){
    let shape = component.get_shape()
    for(let i = 0; i < shape.get_height(); i++){
        for(let j = 0; j < shape.get_width(); j++){
            if(shape.get_shape_array()[i][j] == 1){
                const number = component.get_number();
                array[component.get_y()+i][component.get_x()+j] = number
                shapeColorDict[number] = shapeColor[shape.shapeChar]
            }
        }
    }
}

function set_from_present_shape_queue(){
    for(let i = 0; i < present_shape_queue.length; i++){
        set_array_from_component(present_shape_queue[i])
    }
}

function down_the_present_shape_queue(){
    for(let i = 0; i < present_shape_queue.length; i++){
        shape_height = present_shape_queue[i].get_shape().get_height()
        present_shape_queue[i].set_y(Math.min(20-shape_height, present_shape_queue[i].get_y()+1))
    }
}

function add_pending_shape(){
    if(pending_shape_queue.length){
        present_shape_queue.push(new Component(3, 0, pending_shape_queue.shift(), 0, randomNumber()))
    }else{
        const rnd = Math.floor(Math.random()*shapeTypes.length);
        console.log(rnd);
        present_shape_queue.push(new Component(3, 0, new Shape(shapeJson[shapeTypes[rnd]], shapeTypes[rnd]), 0, randomNumber()))
    }
    document.querySelector("h1").innerText = `Score: ${++score}`;
}

function touch_buttom_and_pop(){
    new_present_shape_queue = []
    for(let i = 0; i < present_shape_queue.length; i++){
        shape_height = present_shape_queue[i].get_shape().get_height()
        if(present_shape_queue[i].get_y() == 20 - shape_height){
            if(current_control) current_control = -1
        }else{
            new_present_shape_queue.push(present_shape_queue[i])
        }
    }
    present_shape_queue = new_present_shape_queue
}

function init_random_color_array(){
    const arr = ["c","s","i","e","cube","t","ls","l"];
    arr.forEach(c => {
        shapeColor[c] = getRandomColor();
    })
}

function init(){
    build_array()
    console.log(array)
    score = 0 ;
    document.querySelector("h1").innerText = `Score: ${score}`;
    c_shape = new Shape(shapeJson["c"], "c");
    s_shape = new Shape(shapeJson["s"], "s");
    i_shape = new Shape(shapeJson["i"], "i");
    e_shape = new Shape(shapeJson["e"], "e");
    cube_shape = new Shape(shapeJson["cube"], "cube");
    t_shape = new Shape(shapeJson["t"], "t");
    ls_shape = new Shape(shapeJson["ls"], "ls");
    l_shape = new Shape(shapeJson["l"], "l");
    pending_shape_queue = [c_shape, s_shape, i_shape, e_shape]
    present_shape_queue.length = 0;
    add_pending_shape()
    init_random_color_array()
}

function findCurrentCoomponentByNumber(number){
    return present_shape_queue.find(item => item.get_number() === number);
}

function display_border_in_control_item(){
    if(current_control <= 0 || current_control == undefined) return
    current_control_item = findCurrentCoomponentByNumber(current_control)
    current_control_shape = current_control_item.get_shape()
    draw_border_from_xy(current_control_item.get_x(), current_control_item.get_y(), current_control_shape.get_width(), current_control_shape.get_height())
}

function rebuild_view(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, WIDTH+2*OFFSET, HEIGHT+2*OFFSET);
    draw_grid()
    build_array()
    touch_buttom_and_pop()
    set_from_present_shape_queue()
    draw_from_array()
    display_border_in_control_item()
}

let count = 0;
function rebuild_table(){
    if(stop) return;
    down_the_present_shape_queue()
    if(++count === 5){
        count = 0 ;
        add_pending_shape()
    }
}

draw_grid()
const canvas = document.getElementById("canvas")

document.getElementById("canvas").addEventListener('mousedown', function(event){
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    specific_x_index = parseInt(x/(WIDTH/10))
    specific_y_index = parseInt(y/(HEIGHT/20))
    current_control = (
        array[specific_y_index]    [specific_x_index] ||
        array[specific_y_index + 1][specific_x_index] ||
        array[specific_y_index - 1][specific_x_index] ||
        array[specific_y_index][specific_x_index + 1] ||
        array[specific_y_index][specific_x_index - 1]
    )
}, false)

let timer_view, timer_table;

document.getElementById("start-action").addEventListener('click', function(event){
    init()
    stop = false;
    count = 0;
    if(!timer_view) timer_view = setInterval(rebuild_view, 1)
    if(!timer_table) timer_table = setInterval(rebuild_table, 1000)
})

document.getElementById("left_action").addEventListener('click', function(event){
    if(current_control <= 0 || current_control == undefined) return
    current_component = findCurrentCoomponentByNumber(current_control)
    if(current_component.get_x() - 1 < 0) return
    current_component.set_x(current_component.get_x() - 1)
})

document.getElementById("right_action").addEventListener('click', function(event){
    if(current_control <= 0 || current_control == undefined) return
    current_component = findCurrentCoomponentByNumber(current_control)
    current_shape = current_component.get_shape()
    if(current_component.get_x() + current_shape.get_width() + 1 > 10) return
    current_component.set_x(current_component.get_x() + 1)
})

document.getElementById("rotate-action").addEventListener('click', function(event){
    if(current_control <= 0 || current_control == undefined) return
    current_component = findCurrentCoomponentByNumber(current_control)
    current_shape = current_component.get_shape().rotate();
})

document.getElementById("reset-action").addEventListener('click', function(event){
    present_shape_queue.length = 0;
    count = 0;
    stop = true;
    score = 0 ;
    document.querySelector("h1").innerText = `Score: ${score}`;
})
