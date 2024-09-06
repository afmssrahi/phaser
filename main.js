import Phaser from 'phaser';
import './style.css';

const firstScene = {
	key: 'firstScene',
	preload() {
		this.load.image('firstBg', './assets/me.jpg');
		this.load.image('start', './assets/startButton.png');
	},

	create() {
		this.add.image(0, 0, 'firstBg').setOrigin(0, 0);
		this.add.image(300, 245, 'start').setOrigin(0, 0);

		const startButton = this.add.image(300, 245, 'start').setOrigin(0, 0);
		startButton.setInteractive();

		startButton.on('pointerdown', () => {
			console.log('Starting Main Game Scene');
			this.scene.start('SecondScene');
		});
	},

	update() {},
};

const SecondScene = {
	key: 'SecondScene',
	preload() {
		this.load.image('frog', './assets/titleScreen.png');
	},

	create() {
		this.add.image(0, 0, 'frog').setOrigin(0, 0);
	},

	update() {},
};

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
};

let game = new Phaser.Game(config);

game.scene.add('firstScene', firstScene);
game.scene.add('SecondScene', SecondScene);

game.scene.start('firstScene');
