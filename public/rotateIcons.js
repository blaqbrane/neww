const initIconRotation = () => {
    const iconContainer = document.querySelector(".icon-container");
    const icons = document.querySelectorAll(".icon-item");

    let currentIndex = 0;

    function rotateIcons() {
        icons.forEach((icon) => icon.classList.remove("active"));
        icons[currentIndex].classList.add("active");

        // Change the position of the active icon to the end
        iconContainer.appendChild(icons[currentIndex]);

        // Rotate the icons
        icons.forEach((icon) => (icon.style.transform = "rotate(0deg)"));
        icons[currentIndex].style.transform = "rotate(-45deg)";

        // Increment the index
        currentIndex = (currentIndex + 1) % icons.length;
    }

    // Rotate the icons every 3 seconds (adjust the duration as needed)
    setInterval(rotateIcons, 3000);
};

export default initIconRotation;
