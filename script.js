let todo = ["Tea" , "Coffee","Pizza","Pepsi","Burger","Water"];

let user = prompt("Enter to go ahead");

while(true){
          if(user == "quit"){
              console.log("You are quitting:");
              break;
   }

	if(user == "list"){
	   for(task of todo){
		console.log(task);
		}
	}
	else if(user == "add"){
	   let Adder = prompt("What you have to add Enter here:");
	   todo.push(Adder);
	   console.log("Successfully Added");
	}
	else if(user == "delete"){
	   let delete = prompt("What you have to delete Enter index here:");
	   todo.splice(delete, 1);
	   console.log("Successfully delete");
	}
}
