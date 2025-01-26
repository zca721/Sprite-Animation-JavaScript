class Rain {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprite_Sheet_Rain.png"), 0, 0, 64, 64, 32, 0.15);
        this.horizontal = new Animator(ASSET_MANAGER.getAsset("./Rain_Horizontal_Walk.png"), 0, 0, 64, 64, 4, 0.15);
        this.x = 0;
        this.y = 366;
        this.speed = 100;
    };

    update() {
        
        this.x += this.speed * this.game.clockTick;

        if (this.x > 800) this.x = 0;
    };

    draw(ctx) {
        // this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        this.horizontal.drawFrame(this.game.clockTick, ctx, this.x, this.y)
        // ctx.drawImage(ASSET_MANAGER.getAsset("./Main_Character_Sprite_Sheet.png"),0 ,0);
    };
}
