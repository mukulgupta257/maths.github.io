//-----------------------------QUESTION 1-----------------------------//
const pi=3.14;

//function to calculate the volume of cylinder
var volume_cyl=()=>{
    let r=document.getElementById('radius').value;
    let h=document.getElementById('height').value;
    let a=document.getElementById('volume');
    let volume=pi*r*r*h;
    a.value="volume is :"+volume
}
//function to calculate the surface area of cylinder
var surface_cyl=()=>{
    let r=document.getElementById('radius').value;
    let h=document.getElementById('height').value;
    let a=document.getElementById('volume');
    let surfacearea=(2*pi*r*h)+(2*pi*r*r);
    a.value="Surface area is :"+surfacearea
}

//-----------------------------QUESTION 2-----------------------------//

//function to calculate power if current and voltage is given
var power_calc=()=>{
    var c=document.getElementById('current').value;
    var v=document.getElementById('voltage').value; 
    let a=document.getElementById('power');
    var power=c*v;
    a.value="Power is : "+ power
}

//-----------------------------QUESTION 3-----------------------------//

//function to calculate area of wall and number of buckets required

let wall=()=>{
    var bucket_paint_area=document.getElementById('bucket_area').value;
    var wall_width=document.getElementById('wall_width').value;
    var wall_height=document.getElementById('wall_height').value;
    var answer=document.getElementById('answer_bucket')
    var wall_area=wall_width*wall_height;
    var bucket_req=wall_area/bucket_paint_area;
    answer.value="You need to have "+bucket_req+" buckets of paint. "
}