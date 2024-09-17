const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Close range for laptop and mobile
const mobileRange = 100; // Close range for mobile
const laptopRange = 150; // Close range for laptop

// Detect if it's a mobile device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

document.addEventListener("mousemove", function(e) {
    const btnRect = noBtn.getBoundingClientRect();
    const distanceX = Math.abs(e.clientX - (btnRect.left + btnRect.width / 2));
    const distanceY = Math.abs(e.clientY - (btnRect.top + btnRect.height / 2));
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    // Set range based on device type
    const range = isMobile ? mobileRange : laptopRange;

    if (distance < range) {
        let x = Math.random() * (window.innerWidth - btnRect.width);
        let y = Math.random() * (window.innerHeight - btnRect.height);
        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    }
});
