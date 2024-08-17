class Book{
   constructor(
    name,author,price,pages,dateOfRealease
   ) {
    this.name=name;
    this.author=author;
    this.price=price;
    this.pages=pages;
    this.dateOfRealease=dateOfRealease;
   }
   updatePage(up){
    this.pages=up;
   }
   bookAge(){
    let now=new Date();
    let accuried=new Date(this.dateOfRealease);
    let elasped=now-accuried;
    let daysSinceRealesed=Math.floor(elasped/(1000*3600*24))
    return daysSinceRealesed

   }
}
  const math=new Book("Maths","Ram",22,543,  "December 5, 2018 15:00:00 PST"  );
console.log(math)
console.log(math.bookAge())