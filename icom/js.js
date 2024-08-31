document.addEventListener('DOMContentLoaded', function () {
    const cat = document.getElementById('cat');
    const box = document.getElementById('box');
    const missText = document.getElementById('missText');
    const catSpeed = 0.5; // ความเร็วในการวิ่งของแมว
    let catPosition = 50;
    const boxPosition = box.getBoundingClientRect().left;

    function moveCat() {
        catPosition += catSpeed;
        cat.style.left = `${catPosition}px`;

        // ตรวจสอบว่าแมวจับกล่องได้หรือยัง
        if (cat.getBoundingClientRect().right >= boxPosition) {
            showMissText();
        } else {
            requestAnimationFrame(moveCat);
        }
    }

    function showMissText() {
        missText.style.opacity = 1;
        document.getElementById('backgroundMusic').pause(); // หยุดเพลงเมื่อจับกล่องได้
    }

    // เริ่มให้แมววิ่งไล่กล่อง
    requestAnimationFrame(moveCat);
});
