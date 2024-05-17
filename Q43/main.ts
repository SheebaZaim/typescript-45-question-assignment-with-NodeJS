// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the oiginal
// names and one array with the Great added to each magician’s name.
function show_magician(magician:string[]):any{
   
    
    magician.map((items)=>console.log(`${items}`))
    };

    let magician_names=["Tahir","Ali","Huzaifa"];
    
    
    function make_great(magician:string[]):any{
        
        magician.map((items)=>console.log(`The great ${items}`))
        
    };
    let copy_magicianName: string[ ] = magician_names.slice();
let copy_make_great: string[ ] = [ ];
make_great(copy_magicianName);
    
    
    
  
 show_magician(magician_names);

//  show_magician(copy_make_great );
  