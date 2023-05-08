const sidePanelBar=document.querySelector(".side-panel"),
    sidePanelToggle= document.querySelector(".toggler"),
    sidePanelSearchBox= document.querySelector("#searchIcon"),
    reducedSidePanelSection=document.querySelector(".side-panelSection");

    sidePanelToggle.addEventListener('click',()=>{
        sidePanelBar.classList.toggle("closeSidePanel");
        reducedSidePanelSection.classList.toggle("reducedSidePanelSection");
    })
    sidePanelSearchBox.addEventListener('click',()=>{
        sidePanelBar.classList.toggle("closeSidePanel");
        reducedSidePanelSection.classList.toggle("reducedSidePanelSection");
    })