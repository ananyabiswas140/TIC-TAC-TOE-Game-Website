let box_1 = document.querySelector('#box_1');
let box_2 = document.querySelector('#box_2');
let box_3 = document.querySelector('#box_3');
let box_4 = document.querySelector('#box_4');
let box_5 = document.querySelector('#box_5');
let box_6 = document.querySelector('#box_6');
let box_7 = document.querySelector('#box_7');
let box_8 = document.querySelector('#box_8');
let box_9 = document.querySelector('#box_9'); 
//..........................
let result = document.querySelector('.result')
let hello = document.querySelector('.hello')
let button = document.querySelector('.button')
//..........................
box_1.textContent =' '
box_2.textContent =' '
box_3.textContent =' '
box_4.textContent =' '
box_5.textContent =' '
box_6.textContent =' '
box_7.textContent =' '
box_8.textContent =' '
box_9.textContent =' '

let current_player = 'X'
let count=0;

button.addEventListener("click", ()=>{
    location.reload(true);
})

box_1.addEventListener("click", ()=>{
    if (hello.textContent== `Player X WIN!` || hello.textContent== `Player O WIN!`)
    {
        if(box_1.textContent == ' ')
        {box_1.textContent = ' '}
    }
    else
        {if (box_1.textContent == ' ')
    {
        box_1.textContent= current_player ;
        count++;
        if(box_1.innerHTML==box_2.innerHTML && box_1.innerHTML==box_3.innerHTML || box_1.innerHTML==box_4.innerHTML && box_1.innerHTML==box_7.innerHTML || box_1.innerHTML==box_5.innerHTML && box_1.innerHTML==box_9.innerHTML) 
            hello.textContent= `Player ${current_player} WIN!`;
        else{
           if (count === 9)
                hello.textContent = "It's a TIE!"
        }
        current_player = (current_player === 'X') ? 'O': 'X'
        if(result.textContent=="Please Choose an Empty BOX!")
            result.textContent=" "  
    }
    else 
    {
        result.textContent="Please Choose an Empty BOX!";
    }}
})
box_2.addEventListener("click", ()=>{
    if (hello.textContent== `Player X WIN!` || hello.textContent== `Player O WIN!`)
    {
        if(box_2.textContent == ' ')
        {box_2.textContent = ' '}
    }
    else
        {if (box_2.textContent == ' ')
            {
                box_2.textContent = current_player;
                count++;
                if(box_2.innerHTML==box_5.innerHTML && box_2.innerHTML==box_8.innerHTML || box_1.innerHTML==box_2.innerHTML && box_2.innerHTML==box_3.innerHTML )
                    hello.textContent= `Player ${current_player} WIN!`
                else{
                    if (count === 9)
                        hello.textContent = "It's a TIE!"
                }
                current_player = (current_player === 'X') ? 'O': 'X'
                if(result.textContent=="Please Choose an Empty BOX!")
                    result.textContent=" "
            }
        else 
        {
            result.textContent="Please Choose an Empty BOX!";
        }}
    
})
box_3.addEventListener("click", ()=>{
    if(hello.textContent== `Player X WIN!` || hello.textContent== `Player O WIN!`)
    {
        if(box_3.textContent == ' ')
        {box_3.textContent = ' '}
    }
    else 
        {if (box_3.textContent == ' ')
    {
        box_3.textContent = current_player;
        count++;
        if(box_3.innerHTML==box_6.innerHTML && box_3.innerHTML==box_9.innerHTML || box_3.innerHTML==box_5.innerHTML && box_3.innerHTML==box_7.innerHTML || box_3.innerHTML==box_2.innerHTML && box_1.innerHTML==box_3.innerHTML)
            hello.textContent= `Player ${current_player} WIN!`
        else{
           if (count === 9)
                hello.textContent = "It's a TIE!"
        }
        current_player = (current_player === 'X') ? 'O': 'X'
        if(result.textContent=="Please Choose an Empty BOX!")
            result.textContent=" "
    }
    else 
    {
        result.textContent="Please Choose an Empty BOX!";
    }}
})
box_4.addEventListener("click", ()=>{
    if(hello.textContent== `Player X WIN!` || hello.textContent== `Player O WIN!`)
    {
        if(box_4.textContent == ' '){
            box_4.textContent = ' '
        }
    }
    else 
        {if (box_4.textContent == ' ')
    {
        box_4.textContent = current_player;
        count++;
        if(box_1.innerHTML==box_4.innerHTML && box_1.innerHTML==box_7.innerHTML || box_4.innerHTML== box_5.innerHTML && box_4.innerHTML== box_6.innerHTML)
            hello.textContent= `Player ${current_player} WIN!`
        else{
           if (count === 9)
                hello.textContent = "It's a TIE!"
        }
        current_player = (current_player === 'X') ? 'O': 'X'
        if(result.textContent=="Please Choose an Empty BOX!")
            result.textContent=" "
        
    }
    else 
    {
        result.textContent="Please Choose an Empty BOX!";
    }}
    
})
box_5.addEventListener("click", ()=>{
    if(hello.textContent== `Player X WIN!` || hello.textContent== `Player O WIN!`)
    {
        if(box_5.textContent == ' ')
        {box_5.textContent = ' '}
    }
    else 
        {if (box_5.textContent == ' ')
    {
        box_5.textContent = current_player;
        count++;
        if(box_2.innerHTML==box_5.innerHTML && box_2.innerHTML==box_8.innerHTML ||  box_4.innerHTML== box_5.innerHTML && box_4.innerHTML== box_6.innerHTML || box_3.innerHTML==box_5.innerHTML && box_3.innerHTML==box_7.innerHTML || box_1.innerHTML==box_5.innerHTML && box_1.innerHTML==box_9.innerHTML)
            hello.textContent= `Player ${current_player} WIN!`
            
        else{
           if (count === 9)
                hello.textContent = "It's a TIE!"
        }
        current_player = (current_player === 'X') ? 'O': 'X'
        if(result.textContent=="Please Choose an Empty BOX!")
            result.textContent=" "
        
    }
    else 
    {
        result.textContent="Please Choose an Empty BOX!";
    }}
    
})
box_6.addEventListener("click", ()=>{
    if(hello.textContent== `Player X WIN!` || hello.textContent== `Player O WIN!`)
    {
        if(box_6.textContent ==' ')
        {box_6.textContent =' '}
    }
    else
    {if (box_6.textContent == ' ')
    {
        box_6.textContent = current_player;
        count++;
        if(box_6.innerHTML== box_5.innerHTML && box_4.innerHTML== box_6.innerHTML || box_3.innerHTML==box_6.innerHTML && box_6.innerHTML==box_9.innerHTML )
            hello.textContent= `Player ${current_player} WIN!`
            
        else{
           if (count === 9)
                hello.textContent = "It's a TIE!"
        }
        current_player = (current_player === 'X') ? 'O': 'X'
        if(result.textContent=="Please Choose an Empty BOX!")
            result.textContent=" "
        
    }
    else 
    {
        result.textContent="Please Choose an Empty BOX!";
    }}
})
box_7.addEventListener("click", ()=>{
    if(hello.textContent== `Player X WIN!` || hello.textContent== `Player O WIN!`)
    {
        if(box_7.textContent == ' ')
        {box_7.textContent = ' '}
    }
    else 
        {if (box_7.textContent == ' ')
    {
        box_7.textContent = current_player;
        count++;
        if(box_1.innerHTML==box_4.innerHTML && box_1.innerHTML==box_7.innerHTML || box_7.innerHTML==box_8.innerHTML && box_7.innerHTML== box_9.innerHTML || box_3.innerHTML==box_5.innerHTML && box_3.innerHTML==box_7.innerHTML )
            hello.textContent= `Player ${current_player} WIN!`
            
        else{
           if (count === 9)
                hello.textContent = "It's a TIE!"
        }
        current_player = (current_player === 'X') ? 'O': 'X'
        if(result.textContent=="Please Choose an Empty BOX!")
            result.textContent=" "
        
    }
    else 
    {
        result.textContent="Please Choose an Empty BOX!";
    }}
    
})
box_8.addEventListener("click", ()=>{
    if(hello.textContent== `Player X WIN!` || hello.textContent== `Player O WIN!`)
    {
        if(box_8.textContent == ' ')
        {box_8.textContent = ' '}
    }
    else {if (box_8.textContent == ' ')
    {
        box_8.textContent = current_player;
        count++;
        if(box_7.innerHTML==box_8.innerHTML && box_7.innerHTML== box_9.innerHTML|| box_2.innerHTML==box_5.innerHTML && box_2.innerHTML==box_8.innerHTML)
            hello.textContent= `Player ${current_player} WIN!`
            
        else{
           if (count === 9)
                hello.textContent = "It's a TIE!"
        }
        current_player = (current_player === 'X') ? 'O': 'X'
        if(result.textContent=="Please Choose an Empty BOX!")
            result.textContent=" "
        
    }
    else 
    {
        result.textContent="Please Choose an Empty BOX!";
    }}
    
})
box_9.addEventListener("click", ()=>{
    if(hello.textContent== `Player X WIN!` || hello.textContent== `Player O WIN!`)
        {if (box_9.textContent == ' ')
            {box_9.textContent = ' '}
        }
    else {if (box_9.textContent == ' ')
    {
        box_9.textContent = current_player;
        count++;
        if(box_9.innerHTML==box_8.innerHTML && box_7.innerHTML== box_9.innerHTML || box_9.innerHTML==box_5.innerHTML && box_1.innerHTML==box_9.innerHTML || box_3.innerHTML==box_6.innerHTML && box_6.innerHTML==box_9.innerHTML )
            hello.textContent= `Player ${current_player} WIN!`
            
        else{
           if (count === 9)
                hello.textContent = "It's a TIE!"
        }
        current_player = (current_player === 'X') ? 'O': 'X'
        if(result.textContent=="Please Choose an Empty BOX!")
            result.textContent=" "
    }
    else 
    {
        result.textContent="Please Choose an Empty BOX!";
    }}
    
})
