/**
 * Creating Classes:
 * 
 * class declaration: class Name{}
 * class expression: const Name=class{}
 */

class backPack{
    //defining constructor
    constructor(
        name,
        volume,
        color,
        pocketnum,
        strapLengthL,
        strapLengthR,
        lidOpen
    )//Define properties
    {
        this.name=name,
        this.volume=volume,
        this.color=color,
        this.pocketnum=pocketnum,
        this.strapLength={
        strapLengthL:strapLengthL,
        strapLengthR:strapLengthR,
        }
        this.lidOpen=lidOpen
    }

    toggleLid(lidStatus){
        this.lidOpen=lidStatus;
    }
    newStrapLength(left,right){
        this.strapLength.strapLengthL=left;
        this.strapLength.strapLengthR=right;
    }
}

const everyDayBackPack= new backPack(
    "Everyday Backpack",30,"grey",12,40,40,false
);
console.log(everyDayBackPack)
everyDayBackPack.toggleLid(true);
console.log(everyDayBackPack);
everyDayBackPack.newStrapLength(45,45);
console.log(everyDayBackPack);