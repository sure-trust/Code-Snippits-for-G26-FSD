export function square(n){
    return n *n;
}

export function cube(n){
    return n*n*n;
}

export function percentage(total,part){
    return (part/total)*100;
}

export function triangle(breadth,height){
    return 0.5*breadth*height;
}

export default{
    square,
    cube,
    percentage,
    triangle,
}