var x='16'
try{
    if(x=='')
    throw'Empty'
    if(isNaN(x))
    throw'not a number'
    x=Number(x)
    if(x<5)
    throw'too low'
}
catch(output)
{console.log(output)}