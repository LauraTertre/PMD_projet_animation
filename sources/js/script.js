/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Menu choice
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let choicesSeason = document.querySelectorAll('.choicesseason h2')
let choiceContent = document.querySelectorAll('.season')
let choicesComponentWinter = document.querySelector('.choicescomponentwinter')
let choicesComponentSummer = document.querySelector('.choicescomponentsummer')
let choicesComponentAutumn = document.querySelector('.choicescomponentautumn')
let choicesComponentSpring = document.querySelector('.choicescomponentspring')

choicesSeason.forEach((choice, index)=>{
    choice.addEventListener('click', ()=>{
        choiceContent.forEach((content)=>{
            content.classList.remove('open');
        })
        choiceContent[index].classList.add('open');
        if (choiceContent[index].firstElementChild.classList.contains('winter')) {
            choicesComponentWinter.classList.add('open')
            console.log(choiceContent[index].firstElementChild);
        }
        else {
            choicesComponentWinter.classList.remove('open')
        }
        if (choiceContent[index].firstElementChild.classList.contains('summer')) {
            choicesComponentSummer.classList.add('open')
        }
        else {
            choicesComponentSummer.classList.remove('open')
        }
        if (choiceContent[index].firstElementChild.classList.contains('autumn')) {
            choicesComponentAutumn.classList.add('open')
        }
        else {
            choicesComponentAutumn.classList.remove('open')
        }
        if (choiceContent[index].firstElementChild.classList.contains('spring')) {
            choicesComponentSpring.classList.add('open')
        }
        else {
            choicesComponentSpring.classList.remove('open')
        }
    })
})

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                Winter
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Winter - Tree
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let choicesComponentTree = document.querySelector('.choicescomponentwinter .buttontree')
let choicesComponentTreeContent = document.querySelectorAll('.winter .treechoice')
let quotesTreeH2 = document.querySelectorAll('.quotes .quote.fortree h2')
console.log(quotesTreeH2);

choicesComponentTree.addEventListener('click', ()=> {
    console.log("On clique")

    choicesComponentTreeContent.forEach((choicetree) => {
        if (choicetree.classList.contains('open')) {
            choicetree.classList.remove('open')
        }
        else {
            choicetree.classList.add('open')

            quotesTreeH2.forEach((choicequotetree) => {
                if (choicetree.firstElementChild.classList.contains('oak')) {
                    if (choicequotetree.classList.contains('oak')) {
                        choicequotetree.classList.add('open')
                        console.log("oak")
                    }
                }
                else {
                    if (choicequotetree.classList.contains('fir')) {
                        choicequotetree.classList.add('open')
                        console.log("fir")
                    }
                }
                window.setTimeout(function() {
                    choicequotetree.classList.remove('open')
                }, 4500)
            })

        }
    })

})
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Winter - House, Smoke
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let choicesComponentHouse = document.querySelector('.choicescomponentwinter .buttonhouse')
let choicesComponentHouseContent = document.querySelectorAll('.winter .housechoice')
let quotesHouseH2 = document.querySelectorAll('.quotes .quote.forhouse h2')
let smokeAll = document.querySelector('.smokeall')

choicesComponentHouse.addEventListener('click', ()=> {
    console.log("On clique")

    choicesComponentHouseContent.forEach((choicehouse) => {
        if (choicehouse.classList.contains('open')) {
            choicehouse.classList.remove('open')
        }
        else {
            
            if (choicehouse.firstElementChild.classList.contains('house2')) {
                smokeAll.classList.add('open')
                window.setTimeout(function() {
                    smokeAll.classList.remove('open')
                }, 10000)
                console.log(choicehouse);
            }
            else {
            }
            window.setTimeout(function() {
                choicehouse.classList.add('open')
            }, 3000)

            quotesHouseH2.forEach((choicequotehouse) => {
                console.log(choicequotehouse);
                choicequotehouse.classList.remove('open')
                if (choicehouse.firstElementChild.classList.contains('house1')) {
                    if (choicequotehouse.classList.contains('house1')) {
                        choicequotehouse.classList.add('open')
                        console.log("house1")
                    }
                }
                else {
                    if (choicequotehouse.classList.contains('house2')) {
                        choicequotehouse.classList.add('open')
                        console.log("house2")
                    }
                }
                window.setTimeout(function() {
                    choicequotehouse.classList.remove('open')
                }, 4000)

            })

        }
    })

})
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                Summer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Summer - Shark
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let choicesComponentShark = document.querySelector('.choicescomponentsummer .buttonshark')
let choicesComoponentSharkContent = document.querySelector('.summer .shark')

let quotesSharkH2 = document.querySelector('.quotes .quote.forshark h2')


choicesComponentShark.addEventListener('click', ()=> {
    if (choicesComoponentSharkContent.classList.contains('open')) {
        choicesComoponentSharkContent.classList.remove('open')
    }
    else {
        choicesComoponentSharkContent.classList.add('open')
        quotesSharkH2.classList.add('open')
        window.setTimeout(function() {
            quotesSharkH2.classList.remove('open')
        }, 8000)
    }
})

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Summer - Beach
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    console.log(choicesComoponentBeachContent);

    choicesComoponentBeachContent.style.background = bgColor;
    choicesComoponentBeachContent.style.background = 'linear-gradient(to top, '+ bgColor +' 20%, #322fc2cc 80%)';

    
}


let choicesComponentBeach = document.querySelector('.choicescomponentsummer .buttonbeach')
let choicesComoponentBeachContent = document.querySelector('.summer .waveWrapper')

choicesComponentBeach.addEventListener('click', ()=> {
    console.log(choicesComoponentBeachContent);
    random_bg_color();
    choicesComoponentBeachContent.style.backgroundImage='linear-gradient(to top, bgColor 20%, #322fc2cc 80%)';
})



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                Autumn
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                Autumn - Windows
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let choicesComponentWindows = document.querySelector('.choicescomponentautumn .buttonwindows')
let choicesComponentWindowsContentLeft = document.querySelector('.autumn .autumn-windows-board-windowseach.left')
let choicesComponentWindowsContentRight = document.querySelector('.autumn .autumn-windows-board-windowseach.right')

let quotesWindowsH2 = document.querySelectorAll('.quotes .quote.forwindows h2')
console.log(quotesWindowsH2);

choicesComponentWindows.addEventListener('click', ()=> {
    if (choicesComponentWindowsContentLeft.classList.contains('open')) {
        choicesComponentWindowsContentLeft.classList.remove('open')
        choicesComponentWindowsContentRight.classList.remove('open')
    }
    else {
        choicesComponentWindowsContentLeft.classList.add('open')
        choicesComponentWindowsContentRight.classList.add('open')
        
        quotesWindowsH2.forEach((choicequotewindows) => {
            console.log(choicesComponentWindowsContentLeft);

            if (choicesComponentWindowsContentLeft.classList.contains('open')) {
                if (choicequotewindows.classList.contains('windowson')) {
                choicequotewindows.classList.add('open')
                window.setTimeout(function() {
                    choicequotewindows.classList.remove('open')
                }, 4000)
                }
            }
        })
    }
})

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                Swing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let choicesComponentSwing = document.querySelector('.choicescomponentautumn .buttonswing')
let choicesComoponentSwingContent = document.querySelector('.autumn .swingall .swing-center')

let quotesSwingH2 = document.querySelector('.quotes .quote.forswing h2')


choicesComponentSwing.addEventListener('click', ()=> {
    if (choicesComoponentSwingContent.classList.contains('open')) {
        choicesComoponentSwingContent.classList.remove('open')
    }
    else {
        choicesComoponentSwingContent.classList.add('open')
        quotesSwingH2.classList.add('open')
        window.setTimeout(function() {
            quotesSwingH2.classList.remove('open')
        }, 4000)
    }
})

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                Spring
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Spring - Theater
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let choicesComponentTheater = document.querySelector('.choicescomponentspring .buttontheater')
let choicesComponentTheaterContentLeftTop = document.querySelector('.spring .drape-left-top')
let choicesComponentTheaterContentLeftBottom = document.querySelector('.spring .drape-left-bottom')
let choicesComponentTheaterContentRightTop = document.querySelector('.spring .drape-right-top')
let choicesComponentTheaterContentRightBottom = document.querySelector('.spring .drape-right-bottom')
let springContent = document.querySelector('.spring-content')
let flowerContent = document.querySelector('.flowercontent')


let quotesTheaterH2 = document.querySelector('.quotes .quote.fortheater h2')

choicesComponentTheater.addEventListener('click', ()=> {
    if (choicesComponentTheaterContentLeftTop.classList.contains('open')) {
        choicesComponentTheaterContentLeftBottom.classList.remove('open')
        choicesComponentTheaterContentLeftTop.classList.remove('open')
        choicesComponentTheaterContentRightTop.classList.remove('open')
        choicesComponentTheaterContentRightBottom.classList.remove('open')
    }
    else {
        choicesComponentTheaterContentLeftBottom.classList.add('open')
        choicesComponentTheaterContentLeftTop.classList.add('open')
        choicesComponentTheaterContentRightTop.classList.add('open')
        choicesComponentTheaterContentRightBottom.classList.add('open')
        quotesTheaterH2.classList.add('open')
        springContent.classList.add('open')
        flowerContent.classList.remove('off')
        window.setTimeout(function() {
            quotesTheaterH2.classList.remove('open')
        }, 4000)
    }
})