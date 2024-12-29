const d = document, w = window;
const $modal = d.getElementById("miModal");
const $message = d.getElementById("messageModal");
const $inputName = d.querySelector('input[name="name"]');
const $form = d.querySelector(".contact-form");
const $input = d.querySelectorAll(".contact-form [required]");

function contactForm(){
    $input.forEach(input =>{
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    });

    $form.addEventListener("submit", function(e){
        e.preventDefault();
        const $loader = d.querySelector(".contact-form-loader");
        const $response = d.querySelector(".contact-form-response");

        // Verificar errores solo al presionar "enviar"
        let hasErrors = false;
        $input.forEach((el, i)=>{
            const $errorSpan = d.getElementById(el.name);
            const pattern = el.pattern || el.dataset.pattern;
            if(pattern){
                const regex = new RegExp(pattern);
                if (!regex.exec(el.value)) {
                    $errorSpan.classList.add("is-active");
                    hasErrors = true;
                } else {
                    $errorSpan.classList.remove("is-active");
                }
            } else {
                if (el.value === "") {
                    $errorSpan.classList.add("is-active");
                    hasErrors = true;
                } else {
                    $errorSpan.classList.remove("is-active");
                }
            }
        });

        if (!hasErrors) {
            $loader.classList.remove("none");

            fetch("https://formsubmit.co/ajax/santiagomeneghini@gmail.com", {
                method: "POST",
                body: new FormData(e.target)
            })
                .then(res=>res.ok ? res.json() : Promise.reject(res))
                .then(json => {
                    $loader.classList.add("none");
                    $message.innerHTML = "Tu mensaje ha sido enviado correctamente."
                    $modal.style.display = 'flex';
                    $form.reset();
                })
                .catch(err=>{
                    $message.innerHTML = "Ha ocurrido un error al enviar tu mensaje, intenta nuevamente."
                    $modal.style.display = 'flex';
                })
        }
    });
}

d.addEventListener("DOMContentLoaded", (e)=>{
    contactForm();
    $inputName.focus();
    $form.reset();
})

d.getElementById('cerrarModal').addEventListener('click', function() {
    $modal.style.display = 'none';
});

w.addEventListener('click', function(e) {
    if (e.target == $modal) {
        $modal.style.display = 'none';
    }
});

d.addEventListener("DOMContentLoaded", function () {
    // Agregar un evento de escucha para cambios en los campos del formulario
    $form.addEventListener('change', function () {
        w.onbeforeunload = function () {
            // Verificar si hay algún campo con contenido
            let inputsWithValue = document.querySelectorAll('.contact-form input, .contact-form textarea')
            for (let i = 0; i < inputsWithValue.length; i++) {
                if (inputsWithValue[i].value.trim() !== '') {
                    return 'Si sales se borrarán los datos, ¿deseas continuar?';
                }
            }
            return null;  // No se mostrará el mensaje de confirmación si no hay datos.
        };
    });

    // Agregar un evento de escucha para el envío del formulario
    $form.addEventListener('submit', function () {
        // Limpiar la función onbeforeunload al enviar el formulario
        window.onbeforeunload = null;
    });
});
