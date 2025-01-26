const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// ASSET_MANAGER.queueDownload("./Sprite_Sheet_Rain.png");
ASSET_MANAGER.queueDownload("./Rain_Horizontal_Walk.png");
ASSET_MANAGER.queueDownload("./Gas_Station_1_Sprite_Sheet.png");
ASSET_MANAGER.queueDownload("./Background.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Rain(gameEngine));
	gameEngine.addEntity(new GasStation1(gameEngine));
	gameEngine.addEntity(new Background1(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
