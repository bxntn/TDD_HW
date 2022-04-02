export function Add(text:string):number{
    if(text==="") return 0;
    let pos:number = 0;
    let delimiter:string ;
    if (text.slice(0,2)=="//"){
        pos = text.indexOf("\n");
        delimiter = text.slice(2,pos);
    }else delimiter = ","
    if(pos!=0)pos++;
    text = text.slice(pos).replace(/[\n\r]/g,delimiter);
    //console.log(text);
    let tmp:string[] = text.split(delimiter);
    //console.log(tmp);
    if(tmp[tmp.length-1]===''){
        throw new Error("");
    }
    let sum:number = 0;
    for (let num of tmp){
        if(num.length>1){
            let wrongDelimeter:string = num.charAt(1);
            let position:number = text.indexOf(wrongDelimeter);
            throw new Error(`‘${delimiter}’ expected but ‘${wrongDelimeter}’ found at position ${position}.`);
        }
        sum += parseInt(num);
        //console.log(num);
    }
    // for(let i = 0;i<tmp.length;i++){
    //     sum+=parseInt(tmp[i]);
    // }
    return sum;
}