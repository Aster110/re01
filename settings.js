export class Settings {
	constructor() {
		this.settingsButton = document.getElementById("settingsButton");
		this.settings = document.getElementById("settings");
		this.resetButton = document.createElement("button");
		this.resetButton.innerText = "重置游戏";
		this.saveButton = document.createElement("button");
		this.saveButton.innerText = "保存游戏";
	}

	show() {
		this.settings.style.display = "block";
	}

	hide() {
		this.settings.style.display = "none";
	}

	init() {
		this.settingsButton.addEventListener("click", () => {
			this.show();
		});

		this.resetButton.addEventListener("click", () => {
			counter.reset();
		});

		this.saveButton.addEventListener("click", () => {
			alert("游戏已保存！");
		});

		this.settings.appendChild(this.resetButton);
		this.settings.appendChild(this.saveButton);
		this.hide();
	}
}
