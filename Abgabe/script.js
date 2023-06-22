// Analog-Button auswählen und Event-Listener hinzufügen
const analogButton = document.getElementById("analog-button");
analogButton.addEventListener("mousedown", activateDigitalElement);

// Digitales Element auswählen
const digitalElement = document.getElementById("digital-element");

// Funktion zum Aktivieren des digitalen Elements
function activateDigitalElement() {
	// Überprüfen, ob das digitale Element bereits aktiviert ist
	if (!digitalElement.classList.contains("active")) {
		// Aktivieren des digitalen Elements
		digitalElement.classList.add("active");
		digitalElement.innerHTML = "Ich wurde aktiviert";
		digitalElement.style.display = "block";
	}
}
