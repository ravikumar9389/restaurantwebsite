  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    let hasCounted = false;

    function startCounting() {
      if (hasCounted) return;
      hasCounted = true;

      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCount = () => {
          if (count < target) {
            count++;
            counter.textContent = count;
            setTimeout(updateCount, 30); // speed
          } else {
            counter.textContent = target;
          }
        };

        updateCount();
      });
    }

    // Intersection Observer to detect when section comes into view
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
        }
      });
    }, {
      threshold: 0.5 // adjust if needed
    });

    const awardSection = document.querySelector(".award-section");
    observer.observe(awardSection);
  });
