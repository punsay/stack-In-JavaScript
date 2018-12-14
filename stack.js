var inputString, inputCharsArray;

$(".input-container_push-btn").hide();
$(".input-container_pop-btn").hide();

$('.input-container_str').on('input',function(e){

    if($(".input-container_str").val() == "" || $(".input-container_str").val() == null){
        $(".input-container_push-btn").hide();
    }
    else{
        console.log("typing...");
        $(".input-container_push-btn").show();
        $(".input-container_pop-btn").show();
    }
    inputString = $(".input-container_str").val();

});

class Stack {

    constructor()
    {
        this.items = [];
    }

    push(charArray)
    {
        /*charArray.map(function (item) {

            this.items.push(item);
            console.log("pushed",item);

        });*/
        this.items = [...inputString];
        $(".input-container_push-btn").hide();

        $(".input-container_str").val("");

        this.items.map(function (element) {
            $(".container_stack-elements").append("<span>"+element+"</span>");
        });


        console.log("pushed  ",this.items);
    }

    pop()
    {
        if (this.items.length !== 0){

            this.items.pop();
            console.log("popped");
            $(".container_stack-elements").find('span:last').remove();;
            $(".input-container_pop-btn").show();
        }

        if (this.items.length < 1 ){
            $(".input-container_pop-btn").hide();
        }

    }

    isEmpty()
    {
        return this.items.length == 0;
    }

    peek()
    {
        return this.items[this.items.length - 1];
    }
    printStack()
    {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

var stack = new Stack();

$(".input-container_push-btn").click(function(){
    stack.push(inputCharsArray);
});

$(".input-container_pop-btn").click(function(){
    stack.pop();
});
