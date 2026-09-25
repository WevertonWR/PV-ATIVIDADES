/**
 * Global Constants
 */
const CHECKOUT_URL = "#"; // Replace with real checkout URL when ready

document.addEventListener("DOMContentLoaded", () => {
    // 1. Set current year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Checkout links function normally through their HTML href attributes

    // 3. FAQ Accordion Logic
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            // Toggle active class on header
            this.classList.toggle("active");
            
            // Get content panel
            const content = this.nextElementSibling;
            
            // Toggle max-height for smooth transition
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // 4. Modal Logic for Image Gallery
    const modal = document.getElementById("imageModal");
    const closeModal = document.querySelector(".close-modal");
    
    // Close modal when clicking on X
    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Close modal when clicking outside of image
    if (modal) {
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // 5. Carousel Logic (Infinite Marquee)
    const track = document.querySelector('.carousel-track');
    
    if (track) {
        // Clone all items to create the infinite loop effect
        const items = Array.from(track.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });

        // Remove old manual navigation buttons
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        if (prevBtn) prevBtn.remove();
        if (nextBtn) nextBtn.remove();
    }

    // 6. Upsell Modal Logic
    const basicBtns = document.querySelectorAll(".basic-btn");
    const upsellModal = document.getElementById("upsellModal");
    const closeUpsell = document.getElementById("closeUpsell");
    const upsellDecline = document.querySelector(".upsell-decline");

    basicBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (upsellModal) {
                upsellModal.style.display = "flex";
            }
        });
    });

    if (closeUpsell) {
        closeUpsell.addEventListener("click", () => {
            upsellModal.style.display = "none";
        });
    }

    if (upsellDecline) {
        upsellDecline.addEventListener("click", (e) => {
            e.preventDefault();
            upsellModal.style.display = "none";
            if (upsellDecline.getAttribute("href") && upsellDecline.getAttribute("href") !== "#") {
                window.open(upsellDecline.getAttribute("href"), "_blank");
            }
        });
    }

    // Close upsell modal when clicking outside
    if (upsellModal) {
        window.addEventListener("click", (e) => {
            if (e.target === upsellModal) {
                upsellModal.style.display = "none";
            }
        });
    }

    // 7. Dynamic urgency date
    const urgencyDateSpan = document.getElementById("urgency-date");
    if (urgencyDateSpan) {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        urgencyDateSpan.textContent = `${dd}/${mm}/${yyyy}`;
    }
});

// Function called by inline onclick in HTML
function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    if (modal && modalImg) {
        modalImg.src = element.src;
        modal.style.display = "flex";
    }
}

// 8. Sales Notification Logic
document.addEventListener("DOMContentLoaded", () => {
    const notification = document.getElementById("sales-notification");
    const notifName = document.getElementById("notif-name");
    const notifTime = document.getElementById("notif-time");
    
    if (notification && notifName && notifTime) {
        const names = ["Andre Z.", "Marcos T.", "Juliana S.", "Roberto F.", "Camila P.", "Bruno Z.", "Letícia M.", "Diego R.", "Carla F.", "João Pedro"];
        const times = ["há 1 minuto", "há 2 minutos", "há 3 minutos", "há 5 minutos", "agora mesmo", "há alguns segundos"];
        
        function showNotification() {
            // Escolhe um nome e tempo aleatório
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomTime = times[Math.floor(Math.random() * times.length)];
            
            notifName.textContent = randomName;
            notifTime.textContent = randomTime;
            
            // Exibe a notificação
            notification.classList.add("show");
            
            // Esconde após 5 segundos
            setTimeout(() => {
                notification.classList.remove("show");
            }, 5000);
            
            // Agenda a próxima para 10 segundos depois
            setTimeout(showNotification, 10000);
        }

        // Primeira exibição após 4 segundos
        setTimeout(showNotification, 4000);
    }

    // 9. Testimonial Infinite Scroll Logic
    const testimonialTrack = document.getElementById("testimonial-track");
    if (testimonialTrack) {
        // Clone all items to create the infinite loop effect
        const tItems = Array.from(testimonialTrack.children);
        tItems.forEach(item => {
            const clone = item.cloneNode(true);
            testimonialTrack.appendChild(clone);
        });
    }
});

// Tornar a função de fechar global para o botão 'x'
window.closeNotification = function() {
    const notification = document.getElementById("sales-notification");
    if (notification) {
        notification.classList.remove("show");
    }
};
