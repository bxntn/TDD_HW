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
    console.log(tmp);
    if(tmp[tmp.length-1]===''){
        throw new Error("");
    }

    let sum:number = 0;
    let negativeNum:string[] = [];
    let errorMessage:string[] = [];

    for (let num of tmp){
        // console.log(num);
        if(isNaN(+num)){
            let firstNum:number = parseInt(num);
            let wrongDelimeter:string = num.replace(firstNum.toString(),'0').charAt(1);
            let tmp_num :string [] = checkNeg(num);

            if(tmp_num.length>0){
                negativeNum=negativeNum.concat(tmp_num);
            }
            
            let position:number = text.indexOf(wrongDelimeter);
            // throw new Error(`‘${delimiter}’ expected but ‘${wrongDelimeter}’ found at position ${position}.`);
            errorMessage.push(`‘${delimiter}’ expected but ‘${wrongDelimeter}’ found at position ${position}.`);
            continue;
        }
        if(parseInt(num)<0) {
            negativeNum.push(num);
            continue;
        }
        if(!(parseInt(num)>1000))
            sum += parseInt(num);
        //console.log(num);
    }

    if(negativeNum.length!=0){
        let negNumErrorText:string = negativeNum.join(", ");
        // throw new Error(`Negative number(s) not allowed: ${negNumErrorText}`);
        errorMessage.unshift(`Negative number(s) not allowed: ${negNumErrorText}`);

    }
    // for(let i = 0;i<tmp.length;i++){
    //     sum+=parseInt(tmp[i]);
    // }
    if(errorMessage.length!=0) throw new Error(errorMessage.join('\n'));
    return sum;
}

function checkNeg(text:string):string[]{
    let sol_Text:string[] = [];
    if(isNaN(+text)){
        let firstNum:number = parseInt(text);
        let wrongDelimeter:string = text.replace(firstNum.toString(),'0').charAt(1);
        let numArray:string[] = text.split(wrongDelimeter);
        for(let num of numArray){
            if(isNaN(+num)) sol_Text.concat(checkNeg(num));
            else if(parseInt(num)<0) sol_Text.push(num);
        }
    }else if(parseInt(text)<0) sol_Text.push(text);
    return sol_Text;
}