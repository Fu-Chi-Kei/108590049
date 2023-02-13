
class Shape {
    constructor(jsonData, shapeChar) {
        this.data = jsonData;
        this.shapeChar = shapeChar
        this.constructor_array = this.constructor_array.bind(this)
        this.get_height = this.get_height.bind(this)
        this.get_width = this.get_width.bind(this)
        this.get_shape_array = this.get_shape_array.bind(this)
        this.direction = -1;
        this.rotate();
    }

    rotate(){
        this.direction++;
        if(this.direction > 3) this.direction = 0;
        this.setData();
    }

    setData(){
        this.height = this.data[this.direction].height;
        this.width = this.data[this.direction].width;
        this.constructor_array(this.data[this.direction].point);
    }
    constructor_array(point_list){
        this.array = new Array(this.height)
        for(let i = 0; i < this.height; i++){
            this.array[i] = new Array(this.width)
            for(let j = 0; j < this.width; j++){
                this.array[i][j] = 0
            }
        }
        for(let i = 0; i < point_list.length; i++){
            this.array[point_list[i][0]][point_list[i][1]] = 1
        }
    }
    get_height(){
        return this.height
    }
    get_width(){
        return this.width
    }
    get_shape_array(){
        return this.array
    }
}

class Component{
    constructor(x, y, shape, hidden, number){
        this.x = x
        this.y = y
        this.shape = shape
        this.hidden = hidden
        this.number = number;
        this.get_x = this.get_x.bind(this)
        this.get_y = this.get_y.bind(this)
        this.set_x = this.set_x.bind(this)
        this.set_y = this.set_y.bind(this)
        this.set_shape = this.set_shape.bind(this)
        this.get_number = this.get_number.bind(this)
        this.get_hidden = this.get_hidden.bind(this)
        this.set_hidden = this.set_hidden.bind(this)
    }
    get_x(){
        return this.x
    }
    get_y(){
        return this.y
    }
    set_x(x){
        this.x = x
    }
    set_y(y){
        this.y = y
    }
    get_shape(){
        return this.shape
    }
    set_shape(shape){
        this.shape = shape
    }
    get_number(){
        return this.number
    }
    get_hidden(){
        return this.hidden
    }
    set_hidden(){
        this.hidden = true;
    }
}
