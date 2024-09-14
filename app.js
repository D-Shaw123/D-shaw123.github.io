
document.addEventListener('DOMContentLoaded', function() {
    let currentBannerIndex = 0;
    const banners = document.querySelectorAll('.banner-item');
    const totalBanners = banners.length;
    function showBanner(index) {
        banners.forEach((banner, i) => {
            banner.classList.remove('active');
            if (i === index) {
                banner.classList.add('active');
            }
        });
    }

    function nextBanner() {
        currentBannerIndex = (currentBannerIndex + 1) % totalBanners;
        showBanner(currentBannerIndex);
    }

    function prevBanner() {
        currentBannerIndex = (currentBannerIndex - 1 + totalBanners) % totalBanners;
        showBanner(currentBannerIndex);
    }

    // Attach button click events
    document.querySelector('.next').addEventListener('click', nextBanner);
    document.querySelector('.prev').addEventListener('click', prevBanner);

    // Automatic banner rotation
    setInterval(nextBanner, 4000); // Change banner every 4 seconds

    // Initial display
    showBanner(currentBannerIndex);
});

