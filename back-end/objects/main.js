function main () 
{
    const x = new StaticQueue(20);
    x.insert(10);
    x.insert(20);
    x.insert(30);
    x.insert(40);
    x.insert(50);
    x.insert(60);

    var myObj = { value: 1 };
  
    while (x.remove(myObj)){console.log(myObj.value)}
}

main()