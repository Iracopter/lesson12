function format(data, type) {
    format= function(){
        if(type=="number"){
            return data=Number(data);
        }
        else if(type=="boolean"){
            return data=(type=="boolean");
        }
        else if (type=="string"){
            return String(data);
        }
    }
}
var originFormat = format;

//var a=prompt("Enter data=","");

format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"