const bmiHelperFunction = (Height, Weight) => {
    if(typeof Height == "undefined" || typeof Weight == "undefined"){
        // this.dispatchEvent(evt);    
        return undefined;
    }else{
        let temp = Height * Height;
        let deno = Weight;
        let res = deno / temp
        return res.toPrecision(2);
    }
}

export {bmiHelperFunction};