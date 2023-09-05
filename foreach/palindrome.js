a='madam'
b=''
for(i=a.length-1;i>=0;i--){
    b=b+a[i]
}
if(a==b){
    console.log('palindrome')
}
else{
    console.log('Not a palindrome')
}