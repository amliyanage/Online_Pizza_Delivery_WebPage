class Item{

    constructor(name,dis,price,qty){
        this.name = name;
        this.dis = dis;
        this.price = price;
        this.qty = qty;
    }

    getname(){
        return this.name;
    }

    getdis(){
        return this.dis;
    }

    getprice(){
        return this.price;
    }

    getqty(){
        return this.qty;
    }

    setname(name){
        this.name = name;
    }

    setdis(dis){
        this.dis = dis;
    }

    setprice(price){
        this.price = price;
    }

    setqty(qty){
        this.qty = qty;
    }

}

export default Item;

//---------------------------------------------- set item in local storage ----------------------------------------------
