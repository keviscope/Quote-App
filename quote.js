

let getStarted = document.querySelector('#getStarted');
let firstPage = document.querySelector('.firstPage');
let coverfirst = document.querySelector('#coverfirst');
let back = document.querySelector('#back');
let bigDecision = document.querySelector('.bigDecision');
let decision1 = document.querySelector('.decision1');
let decision = document.querySelector('.decision');
let successPart = document.querySelector('#successPart');
let successOpen = document.querySelector('.successOpen');
let relationshipPart = document.querySelector('#relationshipPart');
let relationshipOPen = document.querySelector('.relationshipOPen');
let wisdomPart = document.querySelector('#wisdomPart');
let wisdomOPen = document.querySelector('.wisdomOPen');
let backsucess = document.querySelector('#backsucess');
let backRelationship = document.querySelector('#backRelationship');
let backWisdom = document.querySelector('#backWisdom');


let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');



//Get started
getStarted.addEventListener('click', () =>{
    if(firstPage.style.display == "block" && coverfirst.style.display == "none"){
        firstPage.style.display = "none";
        coverfirst.style.display = "block";
    }

    else{
        firstPage.style.display = "block";
        coverfirst.style.display = "none";
    }
})






//success/failure part

successPart.addEventListener('click', () =>{
    if(coverfirst.style.display == "block" && successOpen.style.display == "none"){
        coverfirst.style.display = "none";
        successOpen.style.display = "block";


        if(image[i] == 'a.jpg' && text2.style.display == 'none'){
            text2.style.display = 'block';
        } else{
            text2.style.display = 'none';
        }
        
        
        if(image[i] == 'b.jpg' && text2.style.display == 'none'){
            text2.style.display = 'block';
            text1.style.display = 'none';
        }else{
            text2.style.display = 'none';
        }
    


    }else{
        coverfirst.style.display = "block";
        successOpen.style.display = "none";
    }
})




//relationship part

relationshipPart.addEventListener('click', () =>{
    if(coverfirst.style.display == "block" && relationshipOPen.style.display == "none"){
        coverfirst.style.display = "none";
        relationshipOPen.style.display = "block"
    }
    else{
        coverfirst.style.display = "block";
        relationshipOPen.style.display = "none";
    }
})



// wisdom part
wisdomPart.addEventListener('click', () =>{
    if(coverfirst.style.display == "block" && wisdomOPen.style.display == "none"){
        coverfirst.style.display = "none";
        wisdomOPen.style.display = "block";
    }
    else{
        coverfirst.style.display = "block";
        wisdomOPen.style.display = "none";
    }
})











//Inside Success

backsucess.addEventListener('click', () =>{
    if(successOpen.style.display == "block" && coverfirst.style.display == "none"){
        successOpen.style.display = "none";
        coverfirst.style.display = "block";
    }
    else{
        successOpen.style.display = "block";
        coverfirst.style.display = "none";
    }
})


let slidderImg1 = document.querySelector('.slidderImg1');

let image = ['d.jpg', 'f.jpg', 'g.jpg', 'p.jpg', 'q.jpg'];
i = 0;

function prev(){
    if(i <= 0) i = image.length;
    i--;
    return imageMovement();

 
}

function next(){
    if(i >= image.length - 1) i = -1
        i++;
    
    return imageMovement();
}


function imageMovement(){
    return slidderImg1.setAttribute('src', 'image/' + image[i])

    
}





    














//Inside Relationship
backRelationship.addEventListener('click', () => {
    if(relationshipOPen.style.display == "block" && coverfirst.style.display == "none"){
        relationshipOPen.style.display = "none";
        coverfirst.style.display = "block";
        
    }
    else{
        coverfirst.style.display = "none";
        relationshipOPen.style.display = "block";
    }

})



let currentSlide = 0;
let slide = document.querySelectorAll('.slide');
const init = (n) =>{
slide.forEach((slide) => {
slide.style.display = 'none'
})
slide[n].style.display = 'block'
}


document.addEventListener("DOMContentLoaded", init(currentSlide))
const next11 = () =>{
    currentSlide >= slide.length - 1 ? currentSlide = 0 : currentSlide++;
    init(currentSlide)
}


const prev11 = () =>{
    currentSlide <= 0 ? currentSlide = slide.length -  1 : currentSlide--;
    init(currentSlide)
}

document.querySelector('.prevRe').addEventListener('click', prev11)
document.querySelector('.nextRe').addEventListener('click', next11)

/////////////////

 


   



//Inside General wisdom
backWisdom.addEventListener('click', () => {
    if( wisdomOPen.style.display == "block" && coverfirst.style.display == "none"){
        coverfirst.style.display = "block";
        wisdomOPen.style.display = "none";
    }
    else{
        coverfirst.style.display = "block";
        wisdomOPen.style.display = "none";
    }

})

let currentSlide2 = 0;
let slide2 = document.querySelectorAll('.slide2');

const init1 = (k) =>{
slide2.forEach((slide2) =>{
slide2.style.display = 'none'
})
slide2[k].style.display = 'block'
}


document.addEventListener("DOMContent", init1(currentSlide2))
const next2 = () =>{
    currentSlide2 >= slide2.length - 1 ? currentSlide2 = 0: currentSlide2++;
    init1(currentSlide2);
}

const prev2 = () =>{
    currentSlide2 <= 0 ? currentSlide2 = slide2.length - 1 : currentSlide2--;
    init1(currentSlide2);
} 
 

 document.querySelector('.prevWi').addEventListener('click', next2)
 document.querySelector('.nextWi').addEventListener('click', prev2)


//////////
/*
 let currentSlide = 0;
 let slide = document.querySelectorAll('.slide');
 const init = (n) =>{
 slide.forEach((slide) => {
 slide.style.display = 'none'
 })
 slide[n].style.display = 'block'
 }
 
 
 document.addEventListener("DOMContentLoaded", init(currentSlide))
 const next11 = () =>{
     currentSlide >= slide.length - 1 ? currentSlide = 0 : currentSlide++;
     init(currentSlide)
 }
 
 
 const prev11 = () =>{
     currentSlide <= 0 ? currentSlide = slide.length -  1 : currentSlide--;
     init(currentSlide)
 }
 
 document.querySelector('.prevRe').addEventListener('click', prev11)
 document.querySelector('.nextRe').addEventListener('click', next11)



*/










//go back to begining part
back.addEventListener('click', () =>{
    if(coverfirst.style.display == "block" && bigDecision.style.display == "none"){
        coverfirst.style.display = "none";
        bigDecision.style.display = "block";
        
    }
    else{
        coverfirst.style.display = "block";
        bigDecision.style.display = "none";
    }
})





//clicking no instead of yes
decision1.addEventListener('click', () => {
    if(bigDecision.style.display == "block" && firstPage.style.display == "none"){
        bigDecision.style.display = "none";
        firstPage.style.display = "block";

    }
    else{
        bigDecision.style.display = "block";
        firstPage.style.display = "none";
    }
})




//clicking yes
