player.onChat("f", function () {
    agent.move(FORWARD, 1)
})
player.onChat("b", function () {
    agent.move(BACK, 1)
})
player.onChat("u", function () {
    agent.move(UP, 1)
})
player.onChat("d", function () {
    agent.move(DOWN, 1)
})
player.onChat("tl", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("lvl 10", function () {
    agent.setItem(COBBLESTONE, 64, 1)
    agent.move(FORWARD, 1)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 1)
    agent.place(DOWN)
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.turn(LEFT_TURN)
    }
    for (let index = 0; index < 2; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.place(DOWN)
    agent.move(UP, 1)
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 2)
    agent.place(DOWN)
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.turn(LEFT_TURN)
    }
    agent.move(FORWARD, 1)
    for (let index = 0; index < 2; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.move(UP, 1)
    agent.place(DOWN)
    agent.move(FORWARD, 1)
    agent.place(DOWN)
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.turn(LEFT_TURN)
    }
    agent.move(FORWARD, 1)
    for (let index = 0; index < 2; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.setItem(LOG_OAK, 64, 1)
    agent.move(FORWARD, 2)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 3; index++) {
            agent.destroy(DOWN)
            agent.move(DOWN, 1)
        }
        for (let index = 0; index < 3; index++) {
            agent.move(UP, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 5)
    }
    agent.move(BACK, 1)
    agent.move(LEFT, 1)
    agent.move(DOWN, 2)
    agent.move(LEFT, 1)
    agent.setItem(GLASS, 60, 1)
    agent.destroy(FORWARD)
    agent.place(FORWARD)
    agent.move(LEFT, 1)
    agent.destroy(FORWARD)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 3)
    agent.destroy(FORWARD)
    agent.place(FORWARD)
    agent.move(LEFT, 1)
    agent.destroy(FORWARD)
    agent.place(FORWARD)
    agent.move(DOWN, 1)
    agent.turn(LEFT_TURN)
    agent.setItem(CHEST, 40, 1)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    agent.place(FORWARD)
    agent.move(RIGHT, 1)
    agent.setItem(CRAFTING_TABLE, 1, 1)
    agent.place(FORWARD)
    agent.setItem(FURNACE, 1, 1)
    agent.move(RIGHT, 1)
    agent.place(FORWARD)
    agent.setItem(CHEST, 1, 1)
    agent.move(RIGHT, 1)
    agent.place(FORWARD)
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    agent.setItem(TORCH, 50, 1)
    agent.place(FORWARD)
    agent.move(LEFT, 3)
    agent.place(FORWARD)
    agent.move(BACK, 3)
    agent.move(RIGHT, 2)
    agent.move(BACK, 1)
    agent.setItem(OAK_DOOR, 1, 1)
    agent.place(DOWN)
    agent.move(FORWARD, 1)
    agent.move(UP, 3)
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(BACK, 1)
    agent.move(RIGHT, 1)
    for (let index = 0; index < 4; index++) {
        agent.place(DOWN)
        agent.move(LEFT, 1)
    }
    agent.move(UP, 1)
    agent.move(RIGHT, 2)
    for (let index = 0; index < 2; index++) {
        agent.place(DOWN)
        agent.move(RIGHT, 1)
    }
    agent.move(FORWARD, 5)
    agent.move(DOWN, 1)
    for (let index = 0; index < 4; index++) {
        agent.place(DOWN)
        agent.move(LEFT, 1)
    }
    agent.move(UP, 1)
    agent.move(RIGHT, 2)
    for (let index = 0; index < 2; index++) {
        agent.place(DOWN)
        agent.move(RIGHT, 1)
    }
    agent.turn(LEFT_TURN)
    agent.setItem(OAK_WOOD_STAIRS, 64, 1)
    for (let index = 0; index < 6; index++) {
        agent.place(DOWN)
        agent.move(LEFT, 1)
    }
    agent.move(BACK, 1)
    agent.move(DOWN, 1)
    for (let index = 0; index < 6; index++) {
        agent.place(DOWN)
        agent.move(RIGHT, 1)
    }
    agent.move(LEFT, 1)
    agent.move(UP, 2)
    agent.move(FORWARD, 2)
    for (let index = 0; index < 6; index++) {
        agent.place(DOWN)
        agent.move(LEFT, 1)
    }
    agent.move(RIGHT, 2)
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 6; index++) {
        agent.place(DOWN)
        agent.move(LEFT, 1)
    }
    agent.move(BACK, 1)
    agent.move(DOWN, 1)
    for (let index = 0; index < 6; index++) {
        agent.place(DOWN)
        agent.move(RIGHT, 1)
    }
    agent.place(DOWN)
    agent.move(BACK, 1)
    agent.move(DOWN, 1)
    for (let index = 0; index < 6; index++) {
        agent.place(DOWN)
        agent.move(LEFT, 1)
    }
})
