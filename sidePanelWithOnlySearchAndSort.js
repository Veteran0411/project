const sidePanelBar=document.querySelector(".side-panel"),
    sidePanelToggle= document.querySelector(".toggler"),
    sidePanelSearchBox= document.querySelector("#searchIcon"),
    reducedSidePanelSection=document.querySelector(".side-panelSection"),
    sortingClassToggler=document.querySelector(".side-panelSection"),
    sortingIconToggle =document.getElementById("sortingIcon");

    sidePanelToggle.addEventListener('click',()=>{
        sidePanelBar.classList.toggle("closeSidePanel");
        reducedSidePanelSection.classList.toggle("reducedSidePanelSection");
    })
    sidePanelSearchBox.addEventListener('click',()=>{
        sidePanelBar.classList.toggle("closeSidePanel");
        reducedSidePanelSection.classList.toggle("reducedSidePanelSection");
    })

    sortingIconToggle.addEventListener('click',()=>{
        sortingClassToggler.classList.toggle("filterData");
    })
