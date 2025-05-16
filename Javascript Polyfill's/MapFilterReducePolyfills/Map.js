// PolyFill for Map

Array.prototype.newMap = function(cb){
    let temp = [];

    for(let i = 0 ; i< this.length; i++){
        temp.push(cb(this[i],i,this));
    }
    return temp;
}

const arr = [1,2,3,4];

const mapArr = arr.map((value,index,arr)=>{
    return value*2;
})

const newmapArr = arr.newMap((value,index,arr)=>{
    return value*2;
})

console.log(mapArr);
console.log(newmapArr);

