function calculate(){
    let flavor = document.getElementById("flavor").value;
    let size = document.getElementById("size").value;
    let x = 0;
    if(flavor == "caramel")
    {
        x = 20;
    }
    else if(flavor == "chocolate")
    {
        x = 50;
    }
    else if(flavor == "vannila")
    {
        x = 20;
    }
    else if(flavor == "blueberry")
    {
        x = 10;
    }
    if(size == "500g")
    {
        x *= 5;
    }
    else if(size == "250g")
    {
        x *= 2;
    }
    else if(size == "1kg")
    {
        x *= 10;
    }
    else if(size == "1.5kg")
    {
        x *= 15;
    }
    document.getElementById("cost").value = x;
}
