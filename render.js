//const { format } = require('date-fns');
//const dayofweek  = format(new Date(), 'EEEE, LLLL dd');

 /***********USING GOOGLE ICONS FOR 'icon'*********/
const navdata = [{name:'Search',   color: '#ee82ee', icon:'search'},       
                 {name:'My Day',   color: '#f1f163', icon:'wb_sunny',images: 'para.jpg',textcolor:'#3d4244' },
                 {name:'Important',color: '#eea4dc', icon:'star_border'},
                 {name:'Planned',  color: '#56e7c3', icon:'calendar_today'},
                 {name:'Tasks',    color: '#6a53f0', icon:'home'},
                 {name:'Lists',    color: '#aaa4a4', icon:'add'}
                ];

function renderNavPane() {
    
    const navarea = document.querySelector('.navarea');
   
        for (let i = 0; i< navdata.length; i++){
             
            const navname = navdata[i].name;
            const navicon = navdata[i].icon;
            const navcolor= navdata[i].color;
            
            const newdiv = document.createElement('div');
            newdiv.classList.add('navdiv');
            newdiv.id = (navname);
            newdiv.style.setProperty('--ihover', navcolor);

            const newicon = document.createElement('div');
            const newtext = document.createElement('div');
          
            newicon.classList.add('material-icons', 'iconcolor');
            newicon.style.setProperty('--icolor', navcolor);
            newicon.innerHTML = navicon;
            newtext.classList.add('navtext');
            newtext.textContent = navname;
        
            newdiv.appendChild(newicon);
            newdiv.appendChild(newtext);

            navarea.appendChild(newdiv);
        }; 
}

function renderPages(design){
    const content = document.querySelector('.content');
    const pagediv = document.createElement('div');
    const displaydiv = document.createElement('div');
          
        const pageicondiv = document.createElement('div');
        const pagetextdiv = document.createElement('div');
      
        for(let i = 0; i<navdata.length; i++){
            const divid = 'page-'+[i];
            if(navdata[i].name == design && design == 'My Day'){
                const dayimg = document.createElement('img');
                const daydate = document.createElement('p');
                
                pagetextdiv.style.color = navdata[i].color;
                pagetextdiv.classList.add('textbig');
                pagetextdiv.textContent = design;
                dayimg.src = navdata[i].images;
                dayimg.classList.add('dayimg');
                daydate.classList.add('daydate');
               // daydate.innerHTML = dayofweek;
                
                pagediv.classList.add('pagediv', divid);
                pagediv.classList.remove('content');
               
                displaydiv.classList.add('display', 'this'+divid);

                pagediv.appendChild(pagetextdiv);
                pagediv.appendChild(daydate);
                
                content.appendChild(dayimg);
                content.appendChild(pagediv);
                content.appendChild(displaydiv);
            } else if (navdata[i].name == design){
                pageicondiv.innerHTML = navdata[i].icon;
                pageicondiv.classList.add('pageiconbig','material-icons');
                pageicondiv.style.setProperty('--icolor', navdata[i].color);
                pagetextdiv.style.setProperty('--icolor', navdata[i].color);
                pagetextdiv.classList.add('textbig');
                pagetextdiv.textContent = design;
                
                pagediv.classList.add('pagediv', divid);
                pagediv.classList.remove('content');

                displaydiv.classList.add('display', 'dis'+navdata[i].name);

                pagediv.appendChild(pageicondiv);
                pagediv.appendChild(pagetextdiv);

                content.appendChild(pagediv);
                content.appendChild(displaydiv);

                renderAdd();
            };
        };
}
function renderAdd(){
    const content = document.querySelector('.content');
    const addbox =  document.createElement('div');
    const addtext = document.createElement('p');
    const form = document.querySelector('#popupForm');

        addbox.classList.add('addbox');
        addbox.addEventListener('click', () => form.style.display = 'block');
        addtext.classList.add('addtext');
        addtext.textContent = 'Add a task';        

        addbox.appendChild(addtext);
        content.appendChild(addbox);
}

export { renderNavPane }
export { renderPages }
export { renderAdd }


