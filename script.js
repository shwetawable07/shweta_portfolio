/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



/* ================= CLOSE MENU ================= */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });



/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;


        if (
            name.trim() === "" ||
            email.trim() === "" ||
            message.trim() === ""
        ) {

            alert(
                "Please fill all the fields."
            );

            return;
        }


        alert(
            "Thank you " +
            name +
            "! Your message has been received."
        );


        contactForm.reset();

    }
);



/* ================= SCROLL ANIMATION ================= */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.1
        }

    );


sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(30px)";

    section.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(section);

});



/* ================= CONSOLE ================= */

console.log(
    "Shweta Wable Portfolio Loaded Successfully!"
);