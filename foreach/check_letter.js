a='ouaremyfriend'
chararray=a.split("")
found=false
chararray.forEach((e)=> {
    if(e=='y'){
        found=true
    }
});
if(found==false){
    console.log('No')
}
else{
    console.log('yes')
}