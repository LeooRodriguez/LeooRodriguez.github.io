let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("jenkins");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

const translations = {
    es: {
        "title": "Portafolio - Leo Rodríguez",
        "menu_home": "INICIO",
        "menu_about": "SOBRE MÍ",
        "logo_name": "Leo",
        "menu_contact": "CONTACTO",
        "contact_number": "Número de contacto",
        "email": "Email",
        "address": "Dirección",
        "position": "Cargo",
        "seeking_employment": "En busca de empleo",
        "presentation": "Hola, soy Leonardo Rodriguez.",
        "intro": "Licenciado en cs de la computación - Desarrollo",
        "presentation2": " Recientemente me gradué de Licenciado en ciencas de la computación y mi proyecto a futuro es poder aprender y crecer en el campo del desarrollo de software y el aseguramiento de la calidad (QA), me encuentro en la búsqueda de mi primera oportunidad profesional. Aunque nuevo en el ámbito laboral, he dedicado numerosas horas al autoaprendizaje y a la práctica con proyectos personales que demuestran mi compromiso y habilidad para escribir código limpio y realizar pruebas exhaustivas que garantizan la calidad del software. Mi meta es unirme a un equipo donde pueda aportar valor desde el día uno y crecer como profesional del desarrollo y QA, entregando productos que no solo cumplan con los estándares técnicos sino que también superen las expectativas de los usuarios.",
        "personal_information": "Datos Personales",
        "about_me": "Sobre Mí",
    },
    en: {
        "title": "Portfolio - Leo Rodriguez",
        "menu_home": "HOME",
        "menu_about": "ABOUT ME",
        "logo_name": "Leo",
        "menu_contact": "CONTACT",
        "contact_number": "Contact Number",
        "email": "Email",
        "address": "Address",
        "position": "Position",
        "seeking_employment": "Seeking Employment",
        "presentation": "Hi!, I'm Leonardo Rodriguez.",
        "intro": "Graduated in Computer Science - Development Area",
        "presentation2": "I recently earned my degree in Computer Science, and I am eager to further my learning and growth in software development and Quality Assurance (QA). Currently, I'm on the lookout for my first professional opportunity. Though new to the workforce, I have invested countless hours in self-study and hands-on projects that showcase my commitment and ability to write clean code and conduct thorough testing that ensures software quality. My goal is to join a team where I can immediately contribute value and grow as a development and QA professional, delivering products that not only meet technical standards but also exceed user expectations.",
        "personal_information": "Personal Information",
        "about_me": "About Me",
        
        
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

window.onscroll = function(){
    efectoHabilidades();
}

