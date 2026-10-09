// SMOOTH SCROLLING

console.log("SCRIPT STARTED");

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        const target = this.getAttribute("href");

        if (target && target.startsWith("#") && target !== "#") {

            const section = document.querySelector(target);

            if (section) {

                e.preventDefault();

                section.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});
// Contact form message
// CONTACT FORM - CONNECT TO FLASK BACKEND

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function(e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        try {

            const response = await fetch(
               "https://technet-backend-nmdp.onrender.com/api/contact",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name,
                        email: email,
                        phone: phone,
                        message: message
                    })
                }
            );

            const result = await response.json();

            if (result.success) {

                alert("Thank you! Your message has been received.");

                contactForm.reset();

            } else {

                alert(result.message);

            }

        } catch (error) {

            console.error("Error:", error);

            alert(
                "Unable to send your message. Please make sure the backend is running."
            );
        }

    });

}
const whatsappNumber = "254704061813";


function showProject(project) {

    const modal = document.getElementById("projectModal");
    const title = document.getElementById("projectTitle");
    const description = document.getElementById("projectDescription");
    const features = document.getElementById("projectFeatures");
    const image = document.getElementById("projectImage");
    if (project === "networking") {

        image.src = "images/network.jpg";
        title.innerText = "Business Network Installation";

        description.innerText =
            "TechNet Solutions provides professional network installation and configuration services designed to give businesses fast, secure and reliable connectivity. We assess the client's requirements, plan the network structure, install the necessary equipment and configure the network for efficient operation.";

        features.innerHTML = `
            <li><strong>Project Objective:</strong> Provide reliable connectivity between computers, devices and network resources.</li>

            <li><strong>Network Design:</strong> We plan the network layout according to the size and requirements of the organization.</li>

            <li><strong>Installation:</strong> Installation of network cables, switches, routers, access points and related equipment.</li>

            <li><strong>Configuration:</strong> Configuration of routers, switches, wireless networks and connected devices.</li>

            <li><strong>Security:</strong> Implementation of basic network security measures to protect connected systems.</li>

            <li><strong>Testing:</strong> Testing network connectivity, performance and reliability.</li>

            <li><strong>Maintenance:</strong> Ongoing troubleshooting and technical support.</li>
        `;
    }

    else if (project === "server") {

      image.src = "images/server.jpg";
        title.innerText = "Server Setup & Management";

        description.innerText =
            "We provide server installation and management solutions that help organizations manage their systems, applications and important business information efficiently.";

        features.innerHTML = `
            <li><strong>Project Objective:</strong> Establish a reliable server environment for business operations.</li>

            <li><strong>Server Installation:</strong> Installation and preparation of server hardware and software.</li>

            <li><strong>Configuration:</strong> Configuration of server settings, users and network access.</li>

            <li><strong>Data Management:</strong> Organization and management of business data and resources.</li>

            <li><strong>Backup:</strong> Assistance with data backup and recovery planning.</li>

            <li><strong>Security:</strong> Implementation of appropriate access controls and security practices.</li>

            <li><strong>Support:</strong> Server monitoring, troubleshooting and maintenance.</li>
        `;
    }

    else if (project === "security") {
        image.src = "images/security.jpg";

        title.innerText = "Cybersecurity Project";

        description.innerText =
            "TechNet Solutions helps businesses strengthen their cybersecurity by identifying potential risks and implementing practical security measures to protect systems, networks and information.";

        features.innerHTML = `
            <li><strong>Project Objective:</strong> Improve protection against common cyber threats.</li>

            <li><strong>Security Assessment:</strong> Review of systems and network security weaknesses.</li>

            <li><strong>Access Protection:</strong> Assistance with secure user access and account management.</li>

            <li><strong>Network Security:</strong> Configuration and improvement of network protection.</li>

            <li><strong>Threat Prevention:</strong> Implementation of security practices to reduce potential risks.</li>

            <li><strong>Data Protection:</strong> Protection of important business information.</li>

            <li><strong>Security Support:</strong> Ongoing assistance with security-related issues.</li>
        `;
    }

    else if (project === "web") {

        image.src = "images/web-development.jpg";
        title.innerText = "Business Website Development";

        description.innerText =
            "We design and develop modern, responsive websites that help businesses establish a professional online presence and communicate their products and services to customers.";

        features.innerHTML = `
            <li><strong>Project Objective:</strong> Create a professional online presence for the business.</li>

            <li><strong>Website Design:</strong> Clean and modern website layout designed around the business.</li>

            <li><strong>Responsive Design:</strong> Website designed to work on computers, tablets and mobile phones.</li>

            <li><strong>Business Information:</strong> Presentation of company services, projects and contact information.</li>

            <li><strong>Navigation:</strong> Easy-to-use navigation between different sections of the website.</li>

            <li><strong>Contact Features:</strong> Integration of contact and communication options.</li>

            <li><strong>Deployment:</strong> Website deployment and publishing for online access.</li>
        `;
    }

    else if (project === "repair") {
        image.src = "images/computer-repair.jpg";

        title.innerText = "Computer Repair & Maintenance";

        description.innerText =
            "TechNet Solutions provides computer repair and maintenance services to help individuals and businesses keep their computers reliable, secure and productive.";

        features.innerHTML = `
            <li><strong>Project Objective:</strong> Restore and maintain reliable computer performance.</li>

            <li><strong>Diagnosis:</strong> Identification of hardware and software problems.</li>

            <li><strong>Hardware Repair:</strong> Assistance with faulty computer components.</li>

            <li><strong>Software Installation:</strong> Installation and configuration of required software.</li>

            <li><strong>Upgrades:</strong> Recommendations and installation of suitable hardware upgrades.</li>

            <li><strong>Maintenance:</strong> Cleaning, system optimization and preventive maintenance.</li>

            <li><strong>Technical Support:</strong> Assistance with computer-related problems.</li>
        `;
    }

    else if (project === "cloud") {
        image.src = "images/cloud.jpg";

        title.innerText = "Cloud Solutions";

        description.innerText =
            "Our cloud solutions help businesses store, access and protect important information while supporting flexible and efficient digital operations.";

        features.innerHTML = `
            <li><strong>Project Objective:</strong> Provide practical cloud-based solutions for business needs.</li>

            <li><strong>Cloud Storage:</strong> Setup and organization of cloud storage solutions.</li>

            <li><strong>Data Backup:</strong> Assistance with cloud-based backup and data protection.</li>

            <li><strong>Cloud Configuration:</strong> Setup of cloud services according to business requirements.</li>

            <li><strong>Data Access:</strong> Support for secure access to information from different devices.</li>

            <li><strong>Security:</strong> Application of appropriate security practices for cloud resources.</li>

            <li><strong>Technical Support:</strong> Ongoing assistance with cloud-related issues.</li>
        `;
    }

    modal.style.display = "flex";
}
function closeProject() {
    document.getElementById("projectModal").style.display = "none";
}


console.log("SCRIPT FINISHED");
console.log("BEFORE CONTACT FORM");