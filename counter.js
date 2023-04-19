export class Counter {
	constructor() {
		this.count = 0;
		this.countButton = document.getElementById("countButton");
	}

	increment() {
		this.count++;
		this.countButton.innerHTML = this.count;
	}

	reset() {
		this.count = 0;
		this.countButton.innerHTML = this.count;
	}

	init() {
		this.countButton.addEventListener("click", () => {
			this.increment();
		});
	}
}
