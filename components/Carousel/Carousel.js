class Carousel {
	constructor(carousel) {
		this.carousel = carousel;
		this.leftBtn = this.carousel.querySelector(".left-button");
		this.rightBtn = this.carousel.querySelector(".right-button");
		this.images = Array.from(document.querySelectorAll(".carousel img"));
		this.currentIndex = 0;
		this.length = this.images.length;
		this.images[0].classList.add("img-active");
		this.activeImg = this.images[0];
		this.leftBtn.addEventListener("click", () => {
			this.direction = -1;
			this.navigate(this.direction);
		});
		this.rightBtn.addEventListener("click", () => {
			this.direction = 1;
			this.navigate(this.direction);
		});
	}
	navigate(direction) {
		this.activeImg.classList.remove("img-active");
		this.currentIndex += direction;
		if (direction === -1 && this.currentIndex < 0) {
			this.currentIndex = this.length - 1;
		}
		if (direction === 1 && !this.images[this.currentIndex]) {
			this.currentIndex = 0;
		}
		this.activeImg = this.images[this.currentIndex];
		this.activeImg.classList.add("img-active");
	}
}

let carousel = document.querySelectorAll(".carousel");
Array.from(carousel).forEach(c => {
	return new Carousel(c);
});

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
