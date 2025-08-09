// Datos de los cursos mejorados
const courses = [
    {
        id: 1,
        title: "Mecánica Cuántica 1 - Fundamentos",
        description: "Introducción a los principios básicos de la mecánica cuántica, incluyendo postulados y representaciones.",
        image: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topics: ["Herramientas Matemáticas de QM","Postulados de la mecánica cuántica","Problemas unidimensionales"],
        level: "Intermedio",
        duration: "8 semanas",
        professor: "Dr. Zettili"
    },
    {
        id: 2,
        title: "Cálculo I",
        description: "Domina los fundamentos del cálculo con este curso completo de límites y derivadas.",
        image: "https://images.unsplash.com/photo-1581089778245-3ce67677f718?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topics: ["Límites y continuidad", "Derivadas y sus aplicaciones", "Teoremas fundamentales"],
        level: "Intermedio",
        duration: "8 semanas",
        professor: "Dr. Sr. Joaquin 'sharkie' Saldaño"
    },
    {
        id: 3,
        title: "Electromagnetismo",
        description: "Teoría y aplicaciones de los fenómenos electromagnéticos.",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topics: ["Electrostática", "Magnetostática", "Ecuaciones de Maxwell", "Ondas electromagnéticas"],
        level: "Intermedio",
        duration: "14 semanas",
        professor: "Dr. California"
    },
    {
        id: 4,
        title: "Introducción a la Física",
        description: "Fundamentos de mecánica clásica: cinemática, dinámica y energías.",
        image: "https://images.unsplash.com/photo-1633493702341-4d04841df53b?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topics: ["Cinemática", "Leyes de Newton", "Trabajo y energía", "Momento lineal y angular"],
        level: "Principiante",
        duration: "10 semanas",
        professor: "Dra. Pia Barria"
    },
    {
        id: 5,
        title: "Álgebra Lineal",
        description: "Estructuras algebraicas fundamentales para la física y matemáticas modernas.",
        image: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topics: ["Espacios vectoriales", "Transformaciones lineales", "Valores y vectores propios", "Aplicaciones"],
        level: "Intermedio",
        duration: "8 semanas",
        professor: "Dr. Sr. Mauro 'Vienesa podrida ' Jelvez"
    },
    {
        id: 6,
        title: "Ecuaciones Diferenciales",
        description: "Resolución y aplicación de ecuaciones diferenciales ordinarias y parciales.",
        image: "https://plus.unsplash.com/premium_photo-1714618950572-78509e6e15af?q=80&w=2872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topics: ["EDO de primer orden", "EDO lineales de orden superior", "Sistemas de EDO", "Transformada de Laplace"],
        level: "Avanzado",
        duration: "12 semanas",
        professor: "Dr. Sharkie"
    },
    {
        id: 7,
        title: "Cálculo 3",
        description: "Explora el mundo del cálculo en múltiples variables y campos vectoriales.",
        image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topics: ["Funciones multivariables", "Derivadas parciales", "Integrales múltiples", "Teoremas de Green, Stokes y Gauss"],
        level: "Avanzado",
        duration: "12 semanas",
        professor: "Dr. Sr. Lacio California"
    },
    {
        id: 8,
        title: "Termodinámica",
        description: "Técnicas computacionales para resolver problemas matemáticos complejos.",
        image: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topics: ["Error numérico", "Interpolación", "Diferenciación e integración numérica", "Resolución de EDO"],
        level: "Avanzado",
        duration: "10 semanas",
        professor: "Dra. Boltzmann"
    },
    {
        id: 9,
        title: "Cálculo II",
        description: "Aprende técnicas de integración y sus aplicaciones en problemas reales.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topics: ["Integrales indefinidas", "Técnicas de integración", "Aplicaciones de la integral"],
        level: "Intermedio",
        duration: "10 semanas",
        professor: "Dra. Doña Pía Barria"
    }
];




// Función para renderizar los cursos
function renderCourses() {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';

        courseCard.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <div class="course-info">
                <h2>${course.title}</h2>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span><i class="fas fa-chart-line"></i> Nivel: ${course.level}</span>
                    <span><i class="far fa-clock"></i> Duración: ${course.duration}</span>
                    <span><i class="fas fa-user-graduate"></i> Profesor: ${course.professor}</span>
                </div>
                <h3>Temas principales:</h3>
                <ul>
                    ${course.topics.map(topic => `<li><i class="fas fa-check-circle"></i> ${topic}</li>`).join('')}
                </ul>
                <button onclick="viewCourseDetails(${course.id})">Más información</button>
            </div>
        `;

        container.appendChild(courseCard);
    });
}

// Función para mostrar detalles del curso en un modal
function viewCourseDetails(courseId) {
    const course = courses.find(c => c.id === courseId);
    
    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal()">&times;</span>
            <img src="${course.image}" alt="${course.title}">
            <h2>${course.title}</h2>
            <p class="course-description">${course.description}</p>
            
            <div class="modal-details">
                <div>
                    <h3><i class="fas fa-info-circle"></i> Detalles del curso</h3>
                    <p><strong>Nivel:</strong> ${course.level}</p>
                    <p><strong>Duración:</strong> ${course.duration}</p>
                    <p><strong>Profesor:</strong> ${course.professor}</p>
                </div>
                
                <div>
                    <h3><i class="fas fa-book"></i> Temario completo</h3>
                    <ul>
                        ${course.topics.map(topic => `<li>${topic}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <button class="enroll-btn" onclick="enrollInCourse(${course.id})">Inscribirse en el curso</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden'; // Evitar scroll cuando el modal está abierto
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Función para inscribirse en un curso
function enrollInCourse(courseId) {
    const coursePages = {
        1: "cursos/mecanica_cuantica.html",
        2: "cursos/calculo1.html",
        3: "cursos/electromagnetismo.html",
        4: "cursos/curso4.html",
        5: "cursos/curso5.html",
        6: "cursos/curso6.html",
        7: "cursos/curso7.html",
        8: "cursos/curso8.html"
    };

    const page = coursePages[courseId];
    if (page) {
        window.location.href = page; // Redirige a la página del curso
    } else {
        alert("Página del curso no encontrada.");
    }
}


// Función para desplazarse a los cursos
function scrollToCourses() {
    document.getElementById('courses-container').scrollIntoView({
        behavior: 'smooth'
    });
}

// Manejar el formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    this.reset();
});

// Cerrar modal haciendo clic fuera del contenido
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

// Cargar los cursos cuando la página se cargue
document.addEventListener('DOMContentLoaded', function() {
    renderCourses();
    
    // Agregar estilos para el modal dinámicamente
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            display: flex;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            align-items: center;
            justify-content: center;
        }
        
        .modal-content {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
        }
        
        .modal-content img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        
        .close-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 28px;
            cursor: pointer;
            color: #777;
        }
        
        .close-btn:hover {
            color: #333;
        }
        
        .modal-details {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 20px 0;
        }
        
        .enroll-btn {
            background-color: #2ecc71;
            color: white;
            border: none;
            padding: 12px 25px;
            font-size: 1.1rem;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
            margin-top: 20px;
            transition: background-color 0.3s;
        }
        
        .enroll-btn:hover {
            background-color: #27ae60;
        }
        
        .course-meta {
            margin: 15px 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        
        .course-meta span {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #7f8c8d;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .modal-details {
                grid-template-columns: 1fr;
            }
            
            .course-meta {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(style);
});