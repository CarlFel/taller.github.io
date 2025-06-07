// Datos del curso (simulados - en un caso real vendrían de una API o BD)
const courseData = {
    id:1,
    title: "Cálculo I",
    lessons: [
        {
            id: 1,
            title: "Funciones",
            duration: "25 min",
            videoId: "NCY6cetm2Jg", // ID de ejemplo (reemplazar)
            description: "Definiendo conceptos básicos y necesarios de funciones y ecuaciones.",
            subtopics: [
                { title: "Definición de función", duration: "8 min" },
                { title: "Dominio y rango", duration: "10 min" },
                { title: "Tipos de funciones", duration: "7 min" }
            ]
        },
        {
            id: 2,
            title: "Límites y continuidad",
            duration: "35 min",
            videoId: "VIDEO_ID_2",
            description: "Definiendo el concepto de límite y coninuidad.",
            subtopics: [
                { title: "Definición de función", duration: "8 min" },
                { title: "Dominio y rango", duration: "10 min" },
                { title: "Tipos de funciones", duration: "7 min" }
            ]
        },
        {
            id: 3,
            title: "Derivadas",
            duration: "25 min",
            videoId: "NCY6cetm2Jg", // ID de ejemplo (reemplazar)
            description: "Definiendo el concepto de derivada",
            subtopics: [
                { title: "Definición de función", duration: "8 min" },
                { title: "Dominio y rango", duration: "10 min" },
                { title: "Tipos de funciones", duration: "7 min" }
            ]
        }
    ]
};

function renderLessons() {
    const lessonsList = document.querySelector('.lessons-list');
    lessonsList.innerHTML = ''; // Limpiar lista existente

    courseData.lessons.forEach(lesson => {
        // Contenedor principal de la lección
        const lessonItem = document.createElement('li');
        lessonItem.className = 'lesson-item';
        
        // Encabezado de la lección (siempre visible)
        const lessonHeader = document.createElement('div');
        lessonHeader.className = 'lesson-header';
        lessonHeader.innerHTML = `
            <span class="lesson-title">${lesson.title}</span>
            <span class="lesson-duration">${lesson.duration}</span>
            <i class="fas fa-chevron-down toggle-icon"></i>
        `;
        
        // Contenedor de subtemas (inicialmente oculto)
        const subtopicsList = document.createElement('ul');
        subtopicsList.className = 'subtopics-list';
        
        // Agregar subtemas
        lesson.subtopics.forEach(subtopic => {
            const subtopicItem = document.createElement('li');
            subtopicItem.className = 'subtopic-item';
            subtopicItem.innerHTML = `
                <span class="subtopic-title">${subtopic.title}</span>
                <span class="subtopic-duration">${subtopic.duration}</span>
            `;
            
            subtopicItem.addEventListener('click', (e) => {
                e.stopPropagation(); // Evita que se active el click del lesson-header
                
                // Remover selección previa
                document.querySelectorAll('.subtopic-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Marcar subtema como activo
                subtopicItem.classList.add('active');
                
                // Cargar el contenido
                loadSubtopicContent(lesson, subtopic);
            });
            
            subtopicsList.appendChild(subtopicItem);
        });

        // Evento para mostrar/ocultar subtemas
        lessonHeader.addEventListener('click', () => {
            // Alternar visibilidad
            lessonItem.classList.toggle('expanded');
            
            // Cambiar icono
            const icon = lessonHeader.querySelector('.toggle-icon');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });

        // Construir estructura
        lessonItem.appendChild(lessonHeader);
        lessonItem.appendChild(subtopicsList);
        lessonsList.appendChild(lessonItem);
    });
}

function loadSubtopicContent(lesson, subtopic) {
    const videoContainer = document.querySelector('.video-container iframe');
    const lessonTitle = document.getElementById('current-lesson-title');
    const lessonDesc = document.getElementById('current-lesson-desc');
    
    // Actualizar video (usando el ID de la lección principal)
    videoContainer.src = `https://www.youtube.com/embed/${lesson.videoId}?autoplay=1`;
    
    // Actualizar la información mostrada
    lessonTitle.textContent = `${lesson.title} - ${subtopic.title}`;
    lessonDesc.textContent = subtopic.description || `Contenido sobre: ${subtopic.title}`;
    
    // Desplazar la vista al reproductor
    document.querySelector('.video-container').scrollIntoView({
        behavior: 'smooth'
    });
}
// Cargar una lección específica
function loadLesson(lesson) {
    const videoContainer = document.querySelector('.video-container iframe');
    const lessonTitle = document.getElementById('current-lesson-title');
    const lessonDesc = document.getElementById('current-lesson-desc');
    
    // Actualizar video (usando YouTube como ejemplo)
    videoContainer.src = `https://www.youtube.com/embed/${lesson.videoId}?autoplay=1`;
    
    // Actualizar texto
    lessonTitle.textContent = lesson.title;
    lessonDesc.textContent = lesson.description;
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderLessons();
    
    // Cargar la primera lección por defecto
    if (courseData.lessons.length > 0) {
        document.querySelector('.lessons-list li').classList.add('active');
        loadLesson(courseData.lessons[0]);
    }
});