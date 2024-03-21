function updateClockAndDate() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById("date").textContent = `${day}/${month}/${year}`;
}

updateClockAndDate();

setInterval(updateClockAndDate, 1000);