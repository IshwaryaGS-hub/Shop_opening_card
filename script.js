  function startCountdown() {
    const eventDate = new Date("Jan 15, 2026 10:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if(diff < 0){
        document.getElementById("countdown").innerHTML = "🎉 The Boutique is Now Open!";
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
      const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
      const secs = Math.floor((diff % (1000*60)) / 1000);

      document.getElementById("countdown").innerHTML =
        `${days}d : ${hrs}h : ${mins}m : ${secs}s`;
    }, 1000);
  }
  startCountdown();