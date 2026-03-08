// Función para descargar como PDF
function downloadPDF() {
    const element = document.getElementById('invitationCard');
    const opt = {
        margin: 10,
        filename: 'Invitacion_Cumpleaños_Eileen_Luciana.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };
    html2pdf().set(opt).save().using(element).run();
    
    // Efecto de celebración
    createConfetti();
}

// Función para crear confeti animado
function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.delay = Math.random() * 0.5 + 's';
        confetti.style.animation = `confettiFall ${Math.random() * 2 + 2}s ease-in forwards`;
        
        container.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3500);
    }
}

// Cargar imagen al hacer clic
document.getElementById('photoImage').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('photoImage').src = event.target.result;
            console.log('✅ Imagen cargada correctamente');
            createConfetti(); // Celebración al cargar imagen
        };
        reader.readAsDataURL(file);
    };
    input.click();
});

// Animación de entrada suave
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 ¡Tarjeta de invitación cargada!');
    console.log('💡 Haz clic en la foto para cambiarla');
    console.log('✨ Presiona el botón "¡Sorpresa!" para crear confeti');
    
    // Crear algunas confetti al cargar
    setTimeout(() => {
        createConfetti();
    }, 1000);
});