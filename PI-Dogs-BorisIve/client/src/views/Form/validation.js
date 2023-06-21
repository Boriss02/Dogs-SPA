const validation = (form)=>{
    const newErrors = {};

    // Validaciones de name
    if(!/^(?:[A-Z][a-z]*)(?:\s[A-Z][a-z]*)*\s?$/.test(form.name)){
        newErrors.name = "Each word must begin with a capital letter";
    };
    if(form.name === ""){
        newErrors.name = "Name cannot be empty";
    };
    if((form.name.length >= 1 && form.name.length < 5) || form.name.length > 35){
        newErrors.name = "Between 5 and 35 letters, including blanks";
    };

    // Validaciones de height
    if(!/^\d{1,2}\s-\s\d{1,2}$/.test(form.height)){
        newErrors.height = "Must be entered as: Min Height - Max Height";
    };
    if(Number(form.height.split("-")[0]) > Number(form.height.split("-")[1])){
        newErrors.height = "The first height must be the smallest"
    };
    if(form.height === ""){
        newErrors.height = "Height cannot be empty";
    };

    //validaciones de weight
    if(!/^\d{1,2}\s-\s\d{1,2}$/.test(form.weight)){
        newErrors.weight = "Must be entered as: Min Weight - Max Weight";
    };
    if(Number(form.weight.split("-")[0]) > Number(form.weight.split("-")[1])){
        newErrors.weight = "The first weight must be the smallest"
    };
    if(form.weight === "") {
        newErrors.weight = "Height cannot be empty";
    };

    //validaciones de life span
    if(!/^\d{1,2}\s-\s\d{1,2}$/.test(form.lifespan)){
        newErrors.lifespan = "Must be entered as: Min Life Span - Max Life Span";
    };
    if(Number(form.lifespan.split("-")[0]) > Number(form.lifespan.split("-")[1])){
        newErrors.lifespan = "The first year/s must be the smallest"
    };
    if(form.lifespan === ""){
        newErrors.lifespan = "Life Span cannot be empty";
    };

    return newErrors;
}

export default validation;