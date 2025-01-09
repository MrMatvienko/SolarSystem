const planet = document.querySelector(".mercure");
const sun = document.querySelector(".sun");
const orbit = document.querySelector(".orbit");

function updatePlanetVisibility() {
  const angle = parseFloat(
    getComputedStyle(orbit).transform.match(/rotate\(([^)]+)deg\)/)[1]
  );

  if (angle > 90 && angle < 270) {
    // Коли планета проходить перед сонцем
    planet.style.zIndex = "10"; // Планета перед сонцем
  } else {
    planet.style.zIndex = "1"; // Планета за сонцем
  }
}

// Перевіряємо обертання кожен раз, коли завершено анімацію
orbit.addEventListener("animationiteration", updatePlanetVisibility);
