player.onChat("atp", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eTeleported your agent to you " + player.name() + "'s position, please make sure that there is one block space on top of the agent to make the abuild function work.")
    mobs.teleportToPlayer(
    mobs.target(MY_AGENT),
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("cleareffect", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eCleared Effect of " + player.name() + "")
    mobs.clearEffect(mobs.target(LOCAL_PLAYER))
})
player.onChat("set1", function () {
    setIndex = 0
    humanReadableOutput = "§5Minecraft WorldEdit Advanced Edition: §eAssigned first position: " + player.position()
    player.execute(
    "scoreboard players set @s FirstPosition " + player.position()
    )
    player.tell(mobs.target(LOCAL_PLAYER), humanReadableOutput)
    firstPosition = player.position()
})
player.onChat("abuildfast", function () {
    agent.setSlot(1)
    player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eAgent inspected the block in its inventory: " + agent.getItemDetail(1))
    agentblock = agent.getItemDetail(1)
    player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eAgent is building the block in its inventory: " + agent.getItemDetail(1))
    Abuild_Fast_Core(firstPosition, secondPosition)
})
player.onChat("tellfaketam", function () {
    player.execute(
    "tellraw @a {\"rawtext\":[{\"text\":\"§eTamJ left the game\",\"color\":\"yellow\"}]}"
    )
})
player.onChat("replace", function (block, blockid) {
    if (isExperimentalSettingsEnabled) {
        humanReadableOutput = "§5Minecraft WorldEdit Advanced Edition: §eReplaced" + ogblocks + " with " + block
        player.tell(mobs.target(LOCAL_PLAYER), humanReadableOutput)
        blocks.replace(
        blocks.blockWithData(block, blockid),
        blocks.blockWithData(ogblocks[1], ogblocks[2]),
        firstPosition,
        secondPosition
    )
    }
})
player.onChat("cleareffect @a", function () {
    player.tell(mobs.target(ALL_PLAYERS), "§5Minecraft WorldEdit Advanced Edition: §eCleared Effect Everyone Effect By " + player.name() + "")
    mobs.clearEffect(mobs.target(ALL_PLAYERS))
})
player.onChat("querypos", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eFirst position: " + firstPosition + " Second position: " + secondPosition)
})
player.onChat("clearpos", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eCleared Position")
    setIndex = 1
    firstPosition = initialpos1
    secondPosition = initialpos2
})
player.onChat("helpblock", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §e Minecraft ID List      Blocks and Items     Mobs and Entities     Potion Calculator     FAQ     About  Blocks and Items Drag to your bookmarks bar: Minecraft ID List 0 \t \tAir (minecraft:air) 1 \t \tStone (minecraft:stone) 1:1 \t \tGranite (minecraft:stone) 1:2 \t \tPolished Granite (minecraft:stone) 1:3 \t \tDiorite (minecraft:stone) 1:4 \t \tPolished Diorite (minecraft:stone) 1:5 \t \tAndesite (minecraft:stone) 1:6 \t \tPolished Andesite (minecraft:stone) 2 \t \tGrass (minecraft:grass) 3 \t \tDirt (minecraft:dirt) 3:1 \t \tCoarse Dirt (minecraft:dirt) 3:2 \t \tPodzol (minecraft:dirt) 4 \t \tCobblestone (minecraft:cobblestone) 5 \t \tOak Wood Plank (minecraft:planks) 5:1 \t \tSpruce Wood Plank (minecraft:planks) 5:2 \t \tBirch Wood Plank (minecraft:planks) 5:3 \t \tJungle Wood Plank (minecraft:planks) 5:4 \t \tAcacia Wood Plank (minecraft:planks) 5:5 \t \tDark Oak Wood Plank (minecraft:planks) 6 \t \tOak Sapling (minecraft:sapling) 6:1 \t \tSpruce Sapling (minecraft:sapling) 6:2 \t \tBirch Sapling (minecraft:sapling) 6:3 \t \tJungle Sapling (minecraft:sapling) 6:4 \t \tAcacia Sapling (minecraft:sapling) 6:5 \t \tDark Oak Sapling (minecraft:sapling) 7 \t \tBedrock (minecraft:bedrock) 8 \t \tFlowing Water (minecraft:flowing_water) 9 \t \tStill Water (minecraft:water) 10 \t \tFlowing Lava (minecraft:flowing_lava) 11 \t \tStill Lava (minecraft:lava) 12 \t \tSand (minecraft:sand) 12:1 \t \tRed Sand (minecraft:sand) 13 \t \tGravel (minecraft:gravel) 14 \t \tGold Ore (minecraft:gold_ore) 15 \t \tIron Ore (minecraft:iron_ore) 16 \t \tCoal Ore (minecraft:coal_ore) 17 \t \tOak Wood (minecraft:log) 17:1 \t \tSpruce Wood (minecraft:log) 17:2 \t \tBirch Wood (minecraft:log) 17:3 \t \tJungle Wood (minecraft:log) 18 \t \tOak Leaves (minecraft:leaves) 18:1 \t \tSpruce Leaves (minecraft:leaves) 18:2 \t \tBirch Leaves (minecraft:leaves) 18:3 \t \tJungle Leaves (minecraft:leaves) 19 \t \tSponge (minecraft:sponge) 19:1 \t \tWet Sponge (minecraft:sponge) 20 \t \tGlass (minecraft:glass) 21 \t \tLapis Lazuli Ore (minecraft:lapis_ore) 22 \t \tLapis Lazuli Block (minecraft:lapis_block) 23 \t \tDispenser (minecraft:dispenser) 24 \t \tSandstone (minecraft:sandstone) 24:1 \t \tChiseled Sandstone (minecraft:sandstone) 24:2 \t \tSmooth Sandstone (minecraft:sandstone) 25 \t \tNote Block (minecraft:noteblock) 26 \t \tBed (minecraft:bed) 27 \t \tPowered Rail (minecraft:golden_rail) 28 \t \tDetector Rail (minecraft:detector_rail) 29 \t \tSticky Piston (minecraft:sticky_piston) 30 \t \tCobweb (minecraft:web) 31 \t \tDead Shrub (minecraft:tallgrass) 31:1 \t \tGrass (minecraft:tallgrass) 31:2 \t \tFern (minecraft:tallgrass) 32 \t \tDead Bush (minecraft:deadbush) 33 \t \tPiston (minecraft:piston) 34 \t \tPiston Head (minecraft:piston_head) 35 \t \tWhite Wool (minecraft:wool) 35:1 \t \tOrange Wool (minecraft:wool) 35:2 \t \tMagenta Wool (minecraft:wool) 35:3 \t \tLight Blue Wool (minecraft:wool) 35:4 \t \tYellow Wool (minecraft:wool) 35:5 \t \tLime Wool (minecraft:wool) 35:6 \t \tPink Wool (minecraft:wool) 35:7 \t \tGray Wool (minecraft:wool) 35:8 \t \tLight Gray Wool (minecraft:wool) 35:9 \t \tCyan Wool (minecraft:wool) 35:10 \t \tPurple Wool (minecraft:wool) 35:11 \t \tBlue Wool (minecraft:wool) 35:12 \t \tBrown Wool (minecraft:wool) 35:13 \t \tGreen Wool (minecraft:wool) 35:14 \t \tRed Wool (minecraft:wool) 35:15 \t \tBlack Wool (minecraft:wool) 37 \t \tDandelion (minecraft:yellow_flower) 38 \t \tPoppy (minecraft:red_flower) 38:1 \t \tBlue Orchid (minecraft:red_flower) 38:2 \t \tAllium (minecraft:red_flower) 38:3 \t \tAzure Bluet (minecraft:red_flower) 38:4 \t \tRed Tulip (minecraft:red_flower) 38:5 \t \tOrange Tulip (minecraft:red_flower) 38:6 \t \tWhite Tulip (minecraft:red_flower) 38:7 \t \tPink Tulip (minecraft:red_flower) 38:8 \t \tOxeye Daisy (minecraft:red_flower) 39 \t \tBrown Mushroom (minecraft:brown_mushroom) 40 \t \tRed Mushroom (minecraft:red_mushroom) 41 \t \tGold Block (minecraft:gold_block) 42 \t \tIron Block (minecraft:iron_block) 43 \t \tDouble Stone Slab (minecraft:double_stone_slab) 43:1 \t \tDouble Sandstone Slab (minecraft:double_stone_slab) 43:2 \t \tDouble Wooden Slab (minecraft:double_stone_slab) 43:3 \t \tDouble Cobblestone Slab (minecraft:double_stone_slab) 43:4 \t \tDouble Brick Slab (minecraft:double_stone_slab) 43:5 \t \tDouble Stone Brick Slab (minecraft:double_stone_slab) 43:6 \t \tDouble Nether Brick Slab (minecraft:double_stone_slab) 43:7 \t \tDouble Quartz Slab (minecraft:double_stone_slab) 44 \t \tStone Slab (minecraft:stone_slab) 44:1 \t \tSandstone Slab (minecraft:stone_slab) 44:2 \t \tWooden Slab (minecraft:stone_slab) 44:3 \t \tCobblestone Slab (minecraft:stone_slab) 44:4 \t \tBrick Slab (minecraft:stone_slab) 44:5 \t \tStone Brick Slab (minecraft:stone_slab) 44:6 \t \tNether Brick Slab (minecraft:stone_slab) 44:7 \t \tQuartz Slab (minecraft:stone_slab) 45 \t \tBricks (minecraft:brick_block) 46 \t \tTNT (minecraft:tnt) 47 \t \tBookshelf (minecraft:bookshelf) 48 \t \tMoss Stone (minecraft:mossy_cobblestone) 49 \t \tObsidian (minecraft:obsidian) 50 \t \tTorch (minecraft:torch) 51 \t \tFire (minecraft:fire) 52 \t \tMonster Spawner (minecraft:mob_spawner) 53 \t \tOak Wood Stairs (minecraft:oak_stairs) 54 \t \tChest (minecraft:chest) 55 \t \tRedstone Wire (minecraft:redstone_wire) 56 \t \tDiamond Ore (minecraft:diamond_ore) 57 \t \tDiamond Block (minecraft:diamond_block) 58 \t \tCrafting Table (minecraft:crafting_table) 59 \t \tWheat Crops (minecraft:wheat) 60 \t \tFarmland (minecraft:farmland) 61 \t \tFurnace (minecraft:furnace) 62 \t \tBurning Furnace (minecraft:lit_furnace) 63 \t \tStanding Sign Block (minecraft:standing_sign) 64 \t \tOak Door Block (minecraft:wooden_door) 65 \t \tLadder (minecraft:ladder) 66 \t \tRail (minecraft:rail) 67 \t \tCobblestone Stairs (minecraft:stone_stairs) 68 \t \tWall-mounted Sign Block (minecraft:wall_sign) 69 \t \tLever (minecraft:lever) 70 \t \tStone Pressure Plate (minecraft:stone_pressure_plate) 71 \t \tIron Door Block (minecraft:iron_door) 72 \t \tWooden Pressure Plate (minecraft:wooden_pressure_plate) 73 \t \tRedstone Ore (minecraft:redstone_ore) 74 \t \tGlowing Redstone Ore (minecraft:lit_redstone_ore) 75 \t \tRedstone Torch (off) (minecraft:unlit_redstone_torch) 76 \t \tRedstone Torch (on) (minecraft:redstone_torch) 77 \t \tStone Button (minecraft:stone_button) 78 \t \tSnow (minecraft:snow_layer) 79 \t \tIce (minecraft:ice) 80 \t \tSnow Block (minecraft:snow) 81 \t \tCactus (minecraft:cactus) 82 \t \tClay (minecraft:clay) 83 \t \tSugar Canes (minecraft:reeds) 84 \t \tJukebox (minecraft:jukebox) 85 \t \tOak Fence (minecraft:fence) 86 \t \tPumpkin (minecraft:pumpkin) 87 \t \tNetherrack (minecraft:netherrack) 88 \t \tSoul Sand (minecraft:soul_sand) 89 \t \tGlowstone (minecraft:glowstone) 90 \t \tNether Portal (minecraft:portal) 91 \t \tJack o'Lantern (minecraft:lit_pumpkin) 92 \t \tCake Block (minecraft:cake) 93 \t \tRedstone Repeater Block (off) (minecraft:unpowered_repeater) 94 \t \tRedstone Repeater Block (on) (minecraft:powered_repeater) 95 \t \tWhite Stained Glass (minecraft:stained_glass) 95:1 \t \tOrange Stained Glass (minecraft:stained_glass) 95:2 \t \tMagenta Stained Glass (minecraft:stained_glass) 95:3 \t \tLight Blue Stained Glass (minecraft:stained_glass) 95:4 \t \tYellow Stained Glass (minecraft:stained_glass) 95:5 \t \tLime Stained Glass (minecraft:stained_glass) 95:6 \t \tPink Stained Glass (minecraft:stained_glass) 95:7 \t \tGray Stained Glass (minecraft:stained_glass) 95:8 \t \tLight Gray Stained Glass (minecraft:stained_glass) 95:9 \t \tCyan Stained Glass (minecraft:stained_glass) 95:10 \t \tPurple Stained Glass (minecraft:stained_glass) 95:11 \t \tBlue Stained Glass (minecraft:stained_glass) 95:12 \t \tBrown Stained Glass (minecraft:stained_glass) 95:13 \t \tGreen Stained Glass (minecraft:stained_glass) 95:14 \t \tRed Stained Glass (minecraft:stained_glass) 95:15 \t \tBlack Stained Glass (minecraft:stained_glass) 96 \t \tWooden Trapdoor (minecraft:trapdoor) 97 \t \tStone Monster Egg (minecraft:monster_egg) 97:1 \t \tCobblestone Monster Egg (minecraft:monster_egg) 97:2 \t \tStone Brick Monster Egg (minecraft:monster_egg) 97:3 \t \tMossy Stone Brick Monster Egg (minecraft:monster_egg) 97:4 \t \tCracked Stone Brick Monster Egg (minecraft:monster_egg) 97:5 \t \tChiseled Stone Brick Monster Egg (minecraft:monster_egg) 98 \t \tStone Bricks (minecraft:stonebrick) 98:1 \t \tMossy Stone Bricks (minecraft:stonebrick) 98:2 \t \tCracked Stone Bricks (minecraft:stonebrick) 98:3 \t \tChiseled Stone Bricks (minecraft:stonebrick) 99 \t \tBrown Mushroom Block (minecraft:brown_mushroom_block) 100 \t \tRed Mushroom Block (minecraft:red_mushroom_block) 101 \t \tIron Bars (minecraft:iron_bars) 102 \t \tGlass Pane (minecraft:glass_pane) 103 \t \tMelon Block (minecraft:melon_block) 104 \t \tPumpkin Stem (minecraft:pumpkin_stem) 105 \t \tMelon Stem (minecraft:melon_stem) 106 \t \tVines (minecraft:vine) 107 \t \tOak Fence Gate (minecraft:fence_gate) 108 \t \tBrick Stairs (minecraft:brick_stairs) 109 \t \tStone Brick Stairs (minecraft:stone_brick_stairs) 110 \t \tMycelium (minecraft:mycelium) 111 \t \tLily Pad (minecraft:waterlily) 112 \t \tNether Brick (minecraft:nether_brick) 113 \t \tNether Brick Fence (minecraft:nether_brick_fence) 114 \t \tNether Brick Stairs (minecraft:nether_brick_stairs) 115 \t \tNether Wart (minecraft:nether_wart) 116 \t \tEnchantment Table (minecraft:enchanting_table) 117 \t \tBrewing Stand (minecraft:brewing_stand) 118 \t \tCauldron (minecraft:cauldron) 119 \t \tEnd Portal (minecraft:end_portal) 120 \t \tEnd Portal Frame (minecraft:end_portal_frame) 121 \t \tEnd Stone (minecraft:end_stone) 122 \t \tDragon Egg (minecraft:dragon_egg) 123 \t \tRedstone Lamp (inactive) (minecraft:redstone_lamp) 124 \t \tRedstone Lamp (active) (minecraft:lit_redstone_lamp) 125 \t \tDouble Oak Wood Slab (minecraft:double_wooden_slab) 125:1 \t \tDouble Spruce Wood Slab (minecraft:double_wooden_slab) 125:2 \t \tDouble Birch Wood Slab (minecraft:double_wooden_slab) 125:3 \t \tDouble Jungle Wood Slab (minecraft:double_wooden_slab) 125:4 \t \tDouble Acacia Wood Slab (minecraft:double_wooden_slab) 125:5 \t \tDouble Dark Oak Wood Slab (minecraft:double_wooden_slab) 126 \t \tOak Wood Slab (minecraft:wooden_slab) 126:1 \t \tSpruce Wood Slab (minecraft:wooden_slab) 126:2 \t \tBirch Wood Slab (minecraft:wooden_slab) 126:3 \t \tJungle Wood Slab (minecraft:wooden_slab) 126:4 \t \tAcacia Wood Slab (minecraft:wooden_slab) 126:5 \t \tDark Oak Wood Slab (minecraft:wooden_slab) 127 \t \tCocoa (minecraft:cocoa) 128 \t \tSandstone Stairs (minecraft:sandstone_stairs) 129 \t \tEmerald Ore (minecraft:emerald_ore) 130 \t \tEnder Chest (minecraft:ender_chest) 131 \t \tTripwire Hook (minecraft:tripwire_hook) 132 \t \tTripwire (minecraft:tripwire_hook) 133 \t \tEmerald Block (minecraft:emerald_block) 134 \t \tSpruce Wood Stairs (minecraft:spruce_stairs) 135 \t \tBirch Wood Stairs (minecraft:birch_stairs) 136 \t \tJungle Wood Stairs (minecraft:jungle_stairs) 137 \t \tCommand Block (minecraft:command_block) 138 \t \tBeacon (minecraft:beacon) 139 \t \tCobblestone Wall (minecraft:cobblestone_wall) 139:1 \t \tMossy Cobblestone Wall (minecraft:cobblestone_wall) 140 \t \tFlower Pot (minecraft:flower_pot) 141 \t \tCarrots (minecraft:carrots) 142 \t \tPotatoes (minecraft:potatoes) 143 \t \tWooden Button (minecraft:wooden_button) 144 \t \tMob Head (minecraft:skull) 145 \t \tAnvil (minecraft:anvil) 146 \t \tTrapped Chest (minecraft:trapped_chest) 147 \t \tWeighted Pressure Plate (light) (minecraft:light_weighted_pressure_plate) 148 \t \tWeighted Pressure Plate (heavy) (minecraft:heavy_weighted_pressure_plate) 149 \t \tRedstone Comparator (inactive) (minecraft:unpowered_comparator) 150 \t \tRedstone Comparator (active) (minecraft:powered_comparator) 151 \t \tDaylight Sensor (minecraft:daylight_detector) 152 \t \tRedstone Block (minecraft:redstone_block) 153 \t \tNether Quartz Ore (minecraft:quartz_ore) 154 \t \tHopper (minecraft:hopper) 155 \t \tQuartz Block (minecraft:quartz_block) 155:1 \t \tChiseled Quartz Block (minecraft:quartz_block) 155:2 \t \tPillar Quartz Block (minecraft:quartz_block) 156 \t \tQuartz Stairs (minecraft:quartz_stairs) 157 \t \tActivator Rail (minecraft:activator_rail) 158 \t \tDropper (minecraft:dropper) 159 \t \tWhite Hardened Clay (minecraft:stained_hardened_clay) 159:1 \t \tOrange Hardened Clay (minecraft:stained_hardened_clay) 159:2 \t \tMagenta Hardened Clay (minecraft:stained_hardened_clay) 159:3 \t \tLight Blue Hardened Clay (minecraft:stained_hardened_clay) 159:4 \t \tYellow Hardened Clay (minecraft:stained_hardened_clay) 159:5 \t \tLime Hardened Clay (minecraft:stained_hardened_clay) 159:6 \t \tPink Hardened Clay (minecraft:stained_hardened_clay) 159:7 \t \tGray Hardened Clay (minecraft:stained_hardened_clay) 159:8 \t \tLight Gray Hardened Clay (minecraft:stained_hardened_clay) 159:9 \t \tCyan Hardened Clay (minecraft:stained_hardened_clay) 159:10 \t \tPurple Hardened Clay (minecraft:stained_hardened_clay) 159:11 \t \tBlue Hardened Clay (minecraft:stained_hardened_clay) 159:12 \t \tBrown Hardened Clay (minecraft:stained_hardened_clay) 159:13 \t \tGreen Hardened Clay (minecraft:stained_hardened_clay) 159:14 \t \tRed Hardened Clay (minecraft:stained_hardened_clay) 159:15 \t \tBlack Hardened Clay (minecraft:stained_hardened_clay) 160 \t \tWhite Stained Glass Pane (minecraft:stained_glass_pane) 160:1 \t \tOrange Stained Glass Pane (minecraft:stained_glass_pane) 160:2 \t \tMagenta Stained Glass Pane (minecraft:stained_glass_pane) 160:3 \t \tLight Blue Stained Glass Pane (minecraft:stained_glass_pane) 160:4 \t \tYellow Stained Glass Pane (minecraft:stained_glass_pane) 160:5 \t \tLime Stained Glass Pane (minecraft:stained_glass_pane) 160:6 \t \tPink Stained Glass Pane (minecraft:stained_glass_pane) 160:7 \t \tGray Stained Glass Pane (minecraft:stained_glass_pane) 160:8 \t \tLight Gray Stained Glass Pane (minecraft:stained_glass_pane) 160:9 \t \tCyan Stained Glass Pane (minecraft:stained_glass_pane) 160:10 \t \tPurple Stained Glass Pane (minecraft:stained_glass_pane) 160:11 \t \tBlue Stained Glass Pane (minecraft:stained_glass_pane) 160:12 \t \tBrown Stained Glass Pane (minecraft:stained_glass_pane) 160:13 \t \tGreen Stained Glass Pane (minecraft:stained_glass_pane) 160:14 \t \tRed Stained Glass Pane (minecraft:stained_glass_pane) 160:15 \t \tBlack Stained Glass Pane (minecraft:stained_glass_pane) 161 \t \tAcacia Leaves (minecraft:leaves2) 161:1 \t \tDark Oak Leaves (minecraft:leaves2) 162 \t \tAcacia Wood (minecraft:log2) 162:1 \t \tDark Oak Wood (minecraft:log2) 163 \t \tAcacia Wood Stairs (minecraft:acacia_stairs) 164 \t \tDark Oak Wood Stairs (minecraft:dark_oak_stairs) 165 \t \tSlime Block (minecraft:slime) 166 \t \tBarrier (minecraft:barrier) 167 \t \tIron Trapdoor (minecraft:iron_trapdoor) 168 \t \tPrismarine (minecraft:prismarine) 168:1 \t \tPrismarine Bricks (minecraft:prismarine) 168:2 \t \tDark Prismarine (minecraft:prismarine) 169 \t \tSea Lantern (minecraft:sea_lantern) 170 \t \tHay Bale (minecraft:hay_block) 171 \t \tWhite Carpet (minecraft:carpet) 171:1 \t \tOrange Carpet (minecraft:carpet) 171:2 \t \tMagenta Carpet (minecraft:carpet) 171:3 \t \tLight Blue Carpet (minecraft:carpet) 171:4 \t \tYellow Carpet (minecraft:carpet) 171:5 \t \tLime Carpet (minecraft:carpet) 171:6 \t \tPink Carpet (minecraft:carpet) 171:7 \t \tGray Carpet (minecraft:carpet) 171:8 \t \tLight Gray Carpet (minecraft:carpet) 171:9 \t \tCyan Carpet (minecraft:carpet) 171:10 \t \tPurple Carpet (minecraft:carpet) 171:11 \t \tBlue Carpet (minecraft:carpet) 171:12 \t \tBrown Carpet (minecraft:carpet) 171:13 \t \tGreen Carpet (minecraft:carpet) 171:14 \t \tRed Carpet (minecraft:carpet) 171:15 \t \tBlack Carpet (minecraft:carpet) 172 \t \tHardened Clay (minecraft:hardened_clay) 173 \t \tBlock of Coal (minecraft:coal_block) 174 \t \tPacked Ice (minecraft:packed_ice) 175 \t \tSunflower (minecraft:double_plant) 175:1 \t \tLilac (minecraft:double_plant) 175:2 \t \tDouble Tallgrass (minecraft:double_plant) 175:3 \t \tLarge Fern (minecraft:double_plant) 175:4 \t \tRose Bush (minecraft:double_plant) 175:5 \t \tPeony (minecraft:double_plant) 176 \t \tFree-standing Banner (minecraft:standing_banner) 177 \t \tWall-mounted Banner (minecraft:wall_banner) 178 \t \tInverted Daylight Sensor (minecraft:daylight_detector_inverted) 179 \t \tRed Sandstone (minecraft:red_sandstone) 179:1 \t \tChiseled Red Sandstone (minecraft:red_sandstone) 179:2 \t \tSmooth Red Sandstone (minecraft:red_sandstone) 180 \t \tRed Sandstone Stairs (minecraft:red_sandstone_stairs) 181 \t \tDouble Red Sandstone Slab (minecraft:double_stone_slab2) 182 \t \tRed Sandstone Slab (minecraft:stone_slab2) 183 \t \tSpruce Fence Gate (minecraft:spruce_fence_gate) 184 \t \tBirch Fence Gate (minecraft:birch_fence_gate) 185 \t \tJungle Fence Gate (minecraft:jungle_fence_gate) 186 \t \tDark Oak Fence Gate (minecraft:dark_oak_fence_gate) 187 \t \tAcacia Fence Gate (minecraft:acacia_fence_gate) 188 \t \tSpruce Fence (minecraft:spruce_fence) 189 \t \tBirch Fence (minecraft:birch_fence) 190 \t \tJungle Fence (minecraft:jungle_fence) 191 \t \tDark Oak Fence (minecraft:dark_oak_fence) 192 \t \tAcacia Fence (minecraft:acacia_fence) 193 \t \tSpruce Door Block (minecraft:spruce_door) 194 \t \tBirch Door Block (minecraft:birch_door) 195 \t \tJungle Door Block (minecraft:jungle_door) 196 \t \tAcacia Door Block (minecraft:acacia_door) 197 \t \tDark Oak Door Block (minecraft:dark_oak_door) 198 \t \tEnd Rod (minecraft:end_rod) 199 \t \tChorus Plant (minecraft:chorus_plant) 200 \t \tChorus Flower (minecraft:chorus_flower) 201 \t \tPurpur Block (minecraft:purpur_block) 202 \t \tPurpur Pillar (minecraft:purpur_pillar) 203 \t \tPurpur Stairs (minecraft:purpur_stairs) 204 \t \tPurpur Double Slab (minecraft:purpur_double_slab) 205 \t \tPurpur Slab (minecraft:purpur_slab) 206 \t \tEnd Stone Bricks (minecraft:end_bricks) 207 \t \tBeetroot Block (minecraft:beetroots) 208 \t \tGrass Path (minecraft:grass_path) 209 \t \tEnd Gateway (minecraft:end_gateway) 210 \t \tRepeating Command Block (minecraft:repeating_command_block) 211 \t \tChain Command Block (minecraft:chain_command_block) 212 \t \tFrosted Ice (minecraft:frosted_ice) 213 \t \tMagma Block (minecraft:magma) 214 \t \tNether Wart Block (minecraft:nether_wart_block) 215 \t \tRed Nether Brick (minecraft:red_nether_brick) 216 \t \tBone Block (minecraft:bone_block) 217 \t \tStructure Void (minecraft:structure_void) 218 \t \tObserver (minecraft:observer) 219 \t \tWhite Shulker Box (minecraft:white_shulker_box) 220 \t \tOrange Shulker Box (minecraft:orange_shulker_box) 221 \t \tMagenta Shulker Box (minecraft:magenta_shulker_box) 222 \t \tLight Blue Shulker Box (minecraft:light_blue_shulker_box) 223 \t \tYellow Shulker Box (minecraft:yellow_shulker_box) 224 \t \tLime Shulker Box (minecraft:lime_shulker_box) 225 \t \tPink Shulker Box (minecraft:pink_shulker_box) 226 \t \tGray Shulker Box (minecraft:gray_shulker_box) 227 \t \tLight Gray Shulker Box (minecraft:silver_shulker_box) 228 \t \tCyan Shulker Box (minecraft:cyan_shulker_box) 229 \t \tPurple Shulker Box (minecraft:purple_shulker_box) 230 \t \tBlue Shulker Box (minecraft:blue_shulker_box) 231 \t \tBrown Shulker Box (minecraft:brown_shulker_box) 232 \t \tGreen Shulker Box (minecraft:green_shulker_box) 233 \t \tRed Shulker Box (minecraft:red_shulker_box) 234 \t \tBlack Shulker Box (minecraft:black_shulker_box) 235 \t \tWhite Glazed Terracotta (minecraft:white_glazed_terracotta) 236 \t \tOrange Glazed Terracotta (minecraft:orange_glazed_terracotta) 237 \t \tMagenta Glazed Terracotta (minecraft:magenta_glazed_terracotta) 238 \t \tLight Blue Glazed Terracotta (minecraft:light_blue_glazed_terracotta) 239 \t \tYellow Glazed Terracotta (minecraft:yellow_glazed_terracotta) 240 \t \tLime Glazed Terracotta (minecraft:lime_glazed_terracotta) 241 \t \tPink Glazed Terracotta (minecraft:pink_glazed_terracotta) 242 \t \tGray Glazed Terracotta (minecraft:gray_glazed_terracotta) 243 \t \tLight Gray Glazed Terracotta (minecraft:light_gray_glazed_terracotta) 244 \t \tCyan Glazed Terracotta (minecraft:cyan_glazed_terracotta) 245 \t \tPurple Glazed Terracotta (minecraft:purple_glazed_terracotta) 246 \t \tBlue Glazed Terracotta (minecraft:blue_glazed_terracotta) 247 \t \tBrown Glazed Terracotta (minecraft:brown_glazed_terracotta) 248 \t \tGreen Glazed Terracotta (minecraft:green_glazed_terracotta) 249 \t \tRed Glazed Terracotta (minecraft:red_glazed_terracotta) 250 \t \tBlack Glazed Terracotta (minecraft:black_glazed_terracotta) 251 \t \tWhite Concrete (minecraft:concrete) 251:1 \t \tOrange Concrete (minecraft:concrete) 251:2 \t \tMagenta Concrete (minecraft:concrete) 251:3 \t \tLight Blue Concrete (minecraft:concrete) 251:4 \t \tYellow Concrete (minecraft:concrete) 251:5 \t \tLime Concrete (minecraft:concrete) 251:6 \t \tPink Concrete (minecraft:concrete) 251:7 \t \tGray Concrete (minecraft:concrete) 251:8 \t \tLight Gray Concrete (minecraft:concrete) 251:9 \t \tCyan Concrete (minecraft:concrete) 251:10 \t \tPurple Concrete (minecraft:concrete) 251:11 \t \tBlue Concrete (minecraft:concrete) 251:12 \t \tBrown Concrete (minecraft:concrete) 251:13 \t \tGreen Concrete (minecraft:concrete) 251:14 \t \tRed Concrete (minecraft:concrete) 251:15 \t \tBlack Concrete (minecraft:concrete) 252 \t \tWhite Concrete Powder (minecraft:concrete_powder) 252:1 \t \tOrange Concrete Powder (minecraft:concrete_powder) 252:2 \t \tMagenta Concrete Powder (minecraft:concrete_powder) 252:3 \t \tLight Blue Concrete Powder (minecraft:concrete_powder) 252:4 \t \tYellow Concrete Powder (minecraft:concrete_powder) 252:5 \t \tLime Concrete Powder (minecraft:concrete_powder) 252:6 \t \tPink Concrete Powder (minecraft:concrete_powder) 252:7 \t \tGray Concrete Powder (minecraft:concrete_powder) 252:8 \t \tLight Gray Concrete Powder (minecraft:concrete_powder) 252:9 \t \tCyan Concrete Powder (minecraft:concrete_powder) 252:10 \t \tPurple Concrete Powder (minecraft:concrete_powder) 252:11 \t \tBlue Concrete Powder (minecraft:concrete_powder) 252:12 \t \tBrown Concrete Powder (minecraft:concrete_powder) 252:13 \t \tGreen Concrete Powder (minecraft:concrete_powder) 252:14 \t \tRed Concrete Powder (minecraft:concrete_powder) 252:15 \t \tBlack Concrete Powder (minecraft:concrete_powder) 255 \t \tStructure Block (minecraft:structure_block) 256 \t \tIron Shovel (minecraft:iron_shovel) 257 \t \tIron Pickaxe (minecraft:iron_pickaxe) 258 \t \tIron Axe (minecraft:iron_axe) 259 \t \tFlint and Steel (minecraft:flint_and_steel) 260 \t \tApple (minecraft:apple) 261 \t \tBow (minecraft:bow) 262 \t \tArrow (minecraft:arrow) 263 \t \tCoal (minecraft:coal) 263:1 \t \tCharcoal (minecraft:coal) 264 \t \tDiamond (minecraft:diamond) 265 \t \tIron Ingot (minecraft:iron_ingot) 266 \t \tGold Ingot (minecraft:gold_ingot) 267 \t \tIron Sword (minecraft:iron_sword) 268 \t \tWooden Sword (minecraft:wooden_sword) 269 \t \tWooden Shovel (minecraft:wooden_shovel) 270 \t \tWooden Pickaxe (minecraft:wooden_pickaxe) 271 \t \tWooden Axe (minecraft:wooden_axe) 272 \t \tStone Sword (minecraft:stone_sword) 273 \t \tStone Shovel (minecraft:stone_shovel) 274 \t \tStone Pickaxe (minecraft:stone_pickaxe) 275 \t \tStone Axe (minecraft:stone_axe) 276 \t \tDiamond Sword (minecraft:diamond_sword) 277 \t \tDiamond Shovel (minecraft:diamond_shovel) 278 \t \tDiamond Pickaxe (minecraft:diamond_pickaxe) 279 \t \tDiamond Axe (minecraft:diamond_axe) 280 \t \tStick (minecraft:stick) 281 \t \tBowl (minecraft:bowl) 282 \t \tMushroom Stew (minecraft:mushroom_stew) 283 \t \tGolden Sword (minecraft:golden_sword) 284 \t \tGolden Shovel (minecraft:golden_shovel) 285 \t \tGolden Pickaxe (minecraft:golden_pickaxe) 286 \t \tGolden Axe (minecraft:golden_axe) 287 \t \tString (minecraft:string) 288 \t \tFeather (minecraft:feather) 289 \t \tGunpowder (minecraft:gunpowder) 290 \t \tWooden Hoe (minecraft:wooden_hoe) 291 \t \tStone Hoe (minecraft:stone_hoe) 292 \t \tIron Hoe (minecraft:iron_hoe) 293 \t \tDiamond Hoe (minecraft:diamond_hoe) 294 \t \tGolden Hoe (minecraft:golden_hoe) 295 \t \tWheat Seeds (minecraft:wheat_seeds) 296 \t \tWheat (minecraft:wheat) 297 \t \tBread (minecraft:bread) 298 \t \tLeather Helmet (minecraft:leather_helmet) 299 \t \tLeather Tunic (minecraft:leather_chestplate) 300 \t \tLeather Pants (minecraft:leather_leggings) 301 \t \tLeather Boots (minecraft:leather_boots) 302 \t \tChainmail Helmet (minecraft:chainmail_helmet) 303 \t \tChainmail Chestplate (minecraft:chainmail_chestplate) 304 \t \tChainmail Leggings (minecraft:chainmail_leggings) 305 \t \tChainmail Boots (minecraft:chainmail_boots) 306 \t \tIron Helmet (minecraft:iron_helmet) 307 \t \tIron Chestplate (minecraft:iron_chestplate) 308 \t \tIron Leggings (minecraft:iron_leggings) 309 \t \tIron Boots (minecraft:iron_boots) 310 \t \tDiamond Helmet (minecraft:diamond_helmet) 311 \t \tDiamond Chestplate (minecraft:diamond_chestplate) 312 \t \tDiamond Leggings (minecraft:diamond_leggings) 313 \t \tDiamond Boots (minecraft:diamond_boots) 314 \t \tGolden Helmet (minecraft:golden_helmet) 315 \t \tGolden Chestplate (minecraft:golden_chestplate) 316 \t \tGolden Leggings (minecraft:golden_leggings) 317 \t \tGolden Boots (minecraft:golden_boots) 318 \t \tFlint (minecraft:flint) 319 \t \tRaw Porkchop (minecraft:porkchop) 320 \t \tCooked Porkchop (minecraft:cooked_porkchop) 321 \t \tPainting (minecraft:painting) 322 \t \tGolden Apple (minecraft:golden_apple) 322:1 \t \tEnchanted Golden Apple (minecraft:golden_apple) 323 \t \tSign (minecraft:sign) 324 \t \tOak Door (minecraft:wooden_door) 325 \t \tBucket (minecraft:bucket) 326 \t \tWater Bucket (minecraft:water_bucket) 327 \t \tLava Bucket (minecraft:lava_bucket) 328 \t \tMinecart (minecraft:minecart) 329 \t \tSaddle (minecraft:saddle) 330 \t \tIron Door (minecraft:iron_door) 331 \t \tRedstone (minecraft:redstone) 332 \t \tSnowball (minecraft:snowball) 333 \t \tOak Boat (minecraft:boat) 334 \t \tLeather (minecraft:leather) 335 \t \tMilk Bucket (minecraft:milk_bucket) 336 \t \tBrick (minecraft:brick) 337 \t \tClay (minecraft:clay_ball) 338 \t \tSugar Canes (minecraft:reeds) 339 \t \tPaper (minecraft:paper) 340 \t \tBook (minecraft:book) 341 \t \tSlimeball (minecraft:slime_ball) 342 \t \tMinecart with Chest (minecraft:chest_minecart) 343 \t \tMinecart with Furnace (minecraft:furnace_minecart) 344 \t \tEgg (minecraft:egg) 345 \t \tCompass (minecraft:compass) 346 \t \tFishing Rod (minecraft:fishing_rod) 347 \t \tClock (minecraft:clock) 348 \t \tGlowstone Dust (minecraft:glowstone_dust) 349 \t \tRaw Fish (minecraft:fish) 349:1 \t \tRaw Salmon (minecraft:fish) 349:2 \t \tClownfish (minecraft:fish) 349:3 \t \tPufferfish (minecraft:fish) 350 \t \tCooked Fish (minecraft:cooked_fish) 350:1 \t \tCooked Salmon (minecraft:cooked_fish) 351 \t \tInk Sack (minecraft:dye) 351:1 \t \tRose Red (minecraft:dye) 351:2 \t \tCactus Green (minecraft:dye) 351:3 \t \tCoco Beans (minecraft:dye) 351:4 \t \tLapis Lazuli (minecraft:dye) 351:5 \t \tPurple Dye (minecraft:dye) 351:6 \t \tCyan Dye (minecraft:dye) 351:7 \t \tLight Gray Dye (minecraft:dye) 351:8 \t \tGray Dye (minecraft:dye) 351:9 \t \tPink Dye (minecraft:dye) 351:10 \t \tLime Dye (minecraft:dye) 351:11 \t \tDandelion Yellow (minecraft:dye) 351:12 \t \tLight Blue Dye (minecraft:dye) 351:13 \t \tMagenta Dye (minecraft:dye) 351:14 \t \tOrange Dye (minecraft:dye) 351:15 \t \tBone Meal (minecraft:dye) 352 \t \tBone (minecraft:bone) 353 \t \tSugar (minecraft:sugar) 354 \t \tCake (minecraft:cake) 355 \t \tBed (minecraft:bed) 356 \t \tRedstone Repeater (minecraft:repeater) 357 \t \tCookie (minecraft:cookie) 358 \t \tMap (minecraft:filled_map) 359 \t \tShears (minecraft:shears) 360 \t \tMelon (minecraft:melon) 361 \t \tPumpkin Seeds (minecraft:pumpkin_seeds) 362 \t \tMelon Seeds (minecraft:melon_seeds) 363 \t \tRaw Beef (minecraft:beef) 364 \t \tSteak (minecraft:cooked_beef) 365 \t \tRaw Chicken (minecraft:chicken) 366 \t \tCooked Chicken (minecraft:cooked_chicken) 367 \t \tRotten Flesh (minecraft:rotten_flesh) 368 \t \tEnder Pearl (minecraft:ender_pearl) 369 \t \tBlaze Rod (minecraft:blaze_rod) 370 \t \tGhast Tear (minecraft:ghast_tear) 371 \t \tGold Nugget (minecraft:gold_nugget) 372 \t \tNether Wart (minecraft:nether_wart) 373 \t \tPotion (minecraft:potion) 374 \t \tGlass Bottle (minecraft:glass_bottle) 375 \t \tSpider Eye (minecraft:spider_eye) 376 \t \tFermented Spider Eye (minecraft:fermented_spider_eye) 377 \t \tBlaze Powder (minecraft:blaze_powder) 378 \t \tMagma Cream (minecraft:magma_cream) 379 \t \tBrewing Stand (minecraft:brewing_stand) 380 \t \tCauldron (minecraft:cauldron) 381 \t \tEye of Ender (minecraft:ender_eye) 382 \t \tGlistering Melon (minecraft:speckled_melon) 383:4 \t \tSpawn Elder Guardian (minecraft:spawn_egg) 383:5 \t \tSpawn Wither Skeleton (minecraft:spawn_egg) 383:6 \t \tSpawn Stray (minecraft:spawn_egg) 383:23 \t \tSpawn Husk (minecraft:spawn_egg) 383:27 \t \tSpawn Zombie Villager (minecraft:spawn_egg) 383:28 \t \tSpawn Skeleton Horse (minecraft:spawn_egg) 383:29 \t \tSpawn Zombie Horse (minecraft:spawn_egg) 383:31 \t \tSpawn Donkey (minecraft:spawn_egg) 383:32 \t \tSpawn Mule (minecraft:spawn_egg) 383:34 \t \tSpawn Evoker (minecraft:spawn_egg) 383:35 \t \tSpawn Vex (minecraft:spawn_egg) 383:36 \t \tSpawn Vindicator (minecraft:spawn_egg) 383:50 \t \tSpawn Creeper (minecraft:spawn_egg) 383:51 \t \tSpawn Skeleton (minecraft:spawn_egg) 383:52 \t \tSpawn Spider (minecraft:spawn_egg) 383:54 \t \tSpawn Zombie (minecraft:spawn_egg) 383:55 \t \tSpawn Slime (minecraft:spawn_egg) 383:56 \t \tSpawn Ghast (minecraft:spawn_egg) 383:57 \t \tSpawn Zombie Pigman (minecraft:spawn_egg) 383:58 \t \tSpawn Enderman (minecraft:spawn_egg) 383:59 \t \tSpawn Cave Spider (minecraft:spawn_egg) 383:60 \t \tSpawn Silverfish (minecraft:spawn_egg) 383:61 \t \tSpawn Blaze (minecraft:spawn_egg) 383:62 \t \tSpawn Magma Cube (minecraft:spawn_egg) 383:65 \t \tSpawn Bat (minecraft:spawn_egg) 383:66 \t \tSpawn Witch (minecraft:spawn_egg) 383:67 \t \tSpawn Endermite (minecraft:spawn_egg) 383:68 \t \tSpawn Guardian (minecraft:spawn_egg) 383:69 \t \tSpawn Shulker (minecraft:spawn_egg) 383:90 \t \tSpawn Pig (minecraft:spawn_egg) 383:91 \t \tSpawn Sheep (minecraft:spawn_egg) 383:92 \t \tSpawn Cow (minecraft:spawn_egg) 383:93 \t \tSpawn Chicken (minecraft:spawn_egg) 383:94 \t \tSpawn Squid (minecraft:spawn_egg) 383:95 \t \tSpawn Wolf (minecraft:spawn_egg) 383:96 \t \tSpawn Mooshroom (minecraft:spawn_egg) 383:98 \t \tSpawn Ocelot (minecraft:spawn_egg) 383:100 \t \tSpawn Horse (minecraft:spawn_egg) 383:101 \t \tSpawn Rabbit (minecraft:spawn_egg) 383:102 \t \tSpawn Polar Bear (minecraft:spawn_egg) 383:103 \t \tSpawn Llama (minecraft:spawn_egg) 383:105 \t \tSpawn Parrot (minecraft:spawn_egg) 383:120 \t \tSpawn Villager (minecraft:spawn_egg) 384 \t \tBottle o' Enchanting (minecraft:experience_bottle) 385 \t \tFire Charge (minecraft:fire_charge) 386 \t \tBook and Quill (minecraft:writable_book) 387 \t \tWritten Book (minecraft:written_book) 388 \t \tEmerald (minecraft:emerald) 389 \t \tItem Frame (minecraft:item_frame) 390 \t \tFlower Pot (minecraft:flower_pot) 391 \t \tCarrot (minecraft:carrot) 392 \t \tPotato (minecraft:potato) 393 \t \tBaked Potato (minecraft:baked_potato) 394 \t \tPoisonous Potato (minecraft:poisonous_potato) 395 \t \tEmpty Map (minecraft:map) 396 \t \tGolden Carrot (minecraft:golden_carrot) 397 \t \tMob Head (Skeleton) (minecraft:skull) 397:1 \t \tMob Head (Wither Skeleton) (minecraft:skull) 397:2 \t \tMob Head (Zombie) (minecraft:skull) 397:3 \t \tMob Head (Human) (minecraft:skull) 397:4 \t \tMob Head (Creeper) (minecraft:skull) 397:5 \t \tMob Head (Dragon) (minecraft:skull) 398 \t \tCarrot on a Stick (minecraft:carrot_on_a_stick) 399 \t \tNether Star (minecraft:nether_star) 400 \t \tPumpkin Pie (minecraft:pumpkin_pie) 401 \t \tFirework Rocket (minecraft:fireworks) 402 \t \tFirework Star (minecraft:firework_charge) 403 \t \tEnchanted Book (minecraft:enchanted_book) 404 \t \tRedstone Comparator (minecraft:comparator) 405 \t \tNether Brick (minecraft:netherbrick) 406 \t \tNether Quartz (minecraft:quartz) 407 \t \tMinecart with TNT (minecraft:tnt_minecart) 408 \t \tMinecart with Hopper (minecraft:hopper_minecart) 409 \t \tPrismarine Shard (minecraft:prismarine_shard) 410 \t \tPrismarine Crystals (minecraft:prismarine_crystals) 411 \t \tRaw Rabbit (minecraft:rabbit) 412 \t \tCooked Rabbit (minecraft:cooked_rabbit) 413 \t \tRabbit Stew (minecraft:rabbit_stew) 414 \t \tRabbit's Foot (minecraft:rabbit_foot) 415 \t \tRabbit Hide (minecraft:rabbit_hide) 416 \t \tArmor Stand (minecraft:armor_stand) 417 \t \tIron Horse Armor (minecraft:iron_horse_armor) 418 \t \tGolden Horse Armor (minecraft:golden_horse_armor) 419 \t \tDiamond Horse Armor (minecraft:diamond_horse_armor) 420 \t \tLead (minecraft:lead) 421 \t \tName Tag (minecraft:name_tag) 422 \t \tMinecart with Command Block (minecraft:command_block_minecart) 423 \t \tRaw Mutton (minecraft:mutton) 424 \t \tCooked Mutton (minecraft:cooked_mutton) 425 \t \tBanner (minecraft:banner) 426 \t \tEnd Crystal (minecraft:end_crystal) 427 \t \tSpruce Door (minecraft:spruce_door) 428 \t \tBirch Door (minecraft:birch_door) 429 \t \tJungle Door (minecraft:jungle_door) 430 \t \tAcacia Door (minecraft:acacia_door) 431 \t \tDark Oak Door (minecraft:dark_oak_door) 432 \t \tChorus Fruit (minecraft:chorus_fruit) 433 \t \tPopped Chorus Fruit (minecraft:popped_chorus_fruit) 434 \t \tBeetroot (minecraft:beetroot) 435 \t \tBeetroot Seeds (minecraft:beetroot_seeds) 436 \t \tBeetroot Soup (minecraft:beetroot_soup) 437 \t \tDragon's Breath (minecraft:dragon_breath) 438 \t \tSplash Potion (minecraft:splash_potion) 439 \t \tSpectral Arrow (minecraft:spectral_arrow) 440 \t \tTipped Arrow (minecraft:tipped_arrow) 441 \t \tLingering Potion (minecraft:lingering_potion) 442 \t \tShield (minecraft:shield) 443 \t \tElytra (minecraft:elytra) 444 \t \tSpruce Boat (minecraft:spruce_boat) 445 \t \tBirch Boat (minecraft:birch_boat) 446 \t \tJungle Boat (minecraft:jungle_boat) 447 \t \tAcacia Boat (minecraft:acacia_boat) 448 \t \tDark Oak Boat (minecraft:dark_oak_boat) 449 \t \tTotem of Undying (minecraft:totem_of_undying) 450 \t \tShulker Shell (minecraft:shulker_shell) 452 \t \tIron Nugget (minecraft:iron_nugget) 453 \t \tKnowledge Book (minecraft:knowledge_book) 2256 \t \t13 Disc (minecraft:record_13) 2257 \t \tCat Disc (minecraft:record_cat) 2258 \t \tBlocks Disc (minecraft:record_blocks) 2259 \t \tChirp Disc (minecraft:record_chirp) 2260 \t \tFar Disc (minecraft:record_far) 2261 \t \tMall Disc (minecraft:record_mall) 2262 \t \tMellohi Disc (minecraft:record_mellohi) 2263 \t \tStal Disc (minecraft:record_stal) 2264 \t \tStrad Disc (minecraft:record_strad) 2265 \t \tWard Disc (minecraft:record_ward) 2266 \t \t11 Disc (minecraft:record_11) 2267 \t \tWait Disc (minecraft:record_wait)  Copyright © 2010-2018 Graham Edgecombe. All Rights Reserved. Copyright Information · Privacy Policy · Site Preferences · API")
})
player.onChat("givepositionchooser", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eGave Position Chooser")
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    GOLDEN_SWORD,
    1
    )
})
function Abuild_Core_Advance (firstPosition: Position, secondPosition: Position) {
    abuildcoreymin = Math.min(firstPosition.getValue(Axis.Y), secondPosition.getValue(Axis.Y))
    abuildcorexmin = Math.min(firstPosition.getValue(Axis.X), secondPosition.getValue(Axis.X))
    abuildcorezmin = Math.min(firstPosition.getValue(Axis.Z), secondPosition.getValue(Axis.Z))
    abuildcoreymax = Math.max(firstPosition.getValue(Axis.Y), secondPosition.getValue(Axis.Y))
    abuildcorexmax = Math.max(firstPosition.getValue(Axis.X), secondPosition.getValue(Axis.X))
    abuildcorezmax = Math.max(firstPosition.getValue(Axis.Z), secondPosition.getValue(Axis.Z))
    targercloneblock = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) + 1, agent.getPosition().getValue(Axis.Z))
    abuildcorey = abuildcorexmin
    abuildcorex = abuildcorexmin
    abuildcorez = abuildcorezmin
    for (let y = abuildcoreymin; y < abuildcoreymin + Math.abs(abuildcoreymax - abuildcoreymin) + 1; y++) {
        for (let x = abuildcorexmin; x < abuildcorexmin + Math.abs(abuildcorexmax - abuildcorexmin) + 1; x++) {
            for (let z = abuildcorezmin; z < abuildcorezmin + Math.abs(abuildcorezmax - abuildcorezmin) + 1; z++) {
                blocks.clone(
                targercloneblock,
                targercloneblock,
                world(x, y, z),
                CloneMask.Replace,
                CloneMode.Normal
                )
                abuildcorez += 1
            }
            abuildcorex += 1
        }
        abuildcorey += 1
    }
    blocks.place(AIR, targercloneblock)
    player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eAgent has finished building")
}

function Abuild_Core_Random(randomSlot: number, firstPosition: Position, secondPosition: Position) {
    abuildcoreymin = Math.min(firstPosition.getValue(Axis.Y), secondPosition.getValue(Axis.Y))
    abuildcorexmin = Math.min(firstPosition.getValue(Axis.X), secondPosition.getValue(Axis.X))
    abuildcorezmin = Math.min(firstPosition.getValue(Axis.Z), secondPosition.getValue(Axis.Z))
    abuildcoreymax = Math.max(firstPosition.getValue(Axis.Y), secondPosition.getValue(Axis.Y))
    abuildcorexmax = Math.max(firstPosition.getValue(Axis.X), secondPosition.getValue(Axis.X))
    abuildcorezmax = Math.max(firstPosition.getValue(Axis.Z), secondPosition.getValue(Axis.Z))
    targercloneblock = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) + 1, agent.getPosition().getValue(Axis.Z))
    abuildcorey = abuildcorexmin
    abuildcorex = abuildcorexmin
    abuildcorez = abuildcorezmin
    for (let y = abuildcoreymin; y < abuildcoreymin + Math.abs(abuildcoreymax - abuildcoreymin) + 1; y++) {
        for (let x = abuildcorexmin; x < abuildcorexmin + Math.abs(abuildcorexmax - abuildcorexmin) + 1; x++) {
            for (let z = abuildcorezmin; z < abuildcorezmin + Math.abs(abuildcorezmax - abuildcorezmin) + 1; z++) {
                agent.setSlot(Math.randomRange(1, randomSlot))
                blocks.place(AIR, targercloneblock)
                agent.place(UP)
                blocks.clone(
                targercloneblock,
                targercloneblock,
                world(x, y, z),
                CloneMask.Replace,
                CloneMode.Normal
                )
                abuildcorez += 1
            }
            abuildcorex += 1
        }
        abuildcorey += 1
    }
    blocks.place(AIR, targercloneblock)
    player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eAgent has finished building")
}

player.onChat("abuildrnd", function (randomSlot) {
    if (randomSlot >= 1) {
        player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eAgent is currently building blocks placed from agent's slot 1 to your input number with the advanced building method")
        player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §ePlease make sure there is one block of headroom for this method to work.")
        Abuild_Core_Random(randomSlot, firstPosition, secondPosition)
    } else if (randomSlot < 1) {
        player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eYour input number is less than 1, random build requires number larger than 1.")
    }
})

player.onChat("registerogblock", function (ogblock, ogblockid) {
    if (isExperimentalSettingsEnabled) {
        ogblocks = [ogblock, ogblockid]
    }
})
function Experimental_Setting (isEnabled: boolean) {
    player.say("§5Minecraft WorldEdit Advanced Edition: §eSet Experimental Setting to " + isEnabled)
    isExperimentalSettingsEnabled = isEnabled
}
player.onChat("giveep", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    ENDER_PEARL,
    1
    )
})
player.onItemInteracted(GOLDEN_SWORD, function () {
    if (setIndex == 0) {
        humanReadableOutput = "§5Minecraft WorldEdit Advanced Edition: §eAssigned second position: " + player.position()
        player.tell(mobs.target(LOCAL_PLAYER), humanReadableOutput)
        player.execute(
        "scoreboard players set @s FirstPosition " + player.position()
        )
        secondPosition = player.position()
        setIndex = 1
    } else {
        if (setIndex == 1) {
            humanReadableOutput = "§5Minecraft WorldEdit Advanced Edition: §eAssigned first position: " + player.position()
            player.tell(mobs.target(LOCAL_PLAYER), humanReadableOutput)
            player.execute(
            "scoreboard players set @s SecondPosition " + player.position()
            )
            firstPosition = player.position()
            setIndex = 0
        }
    }
})
player.onChat("givebarrier", function () {
    player.execute(
    "give @s barrier"
    )
})
player.onChat("clearareacloud", function () {
    player.tell(mobs.target(ALL_PLAYERS), "§5Minecraft WorldEdit Advanced Edition: §eCleared all area cloud by " + player.name() + "")
    player.execute(
    "kill @e[type=area_effect_cloud]"
    )
})
player.onChat("abuildadv", function () {
    agent.setSlot(1)
    player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eAgent is currently building block " + agent.getItemDetail(1) + " with the advanced building method")
    player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §ePlease make sure there is one block of headroom for this method to work.")
    agent.place(UP)
    Abuild_Core_Advance(firstPosition, secondPosition)
})
player.onChat("exp", function (isEnabled) {
    if (isEnabled) {
        Experimental_Setting(true)
    } else {
        Experimental_Setting(false)
    }
})
player.onChat("set2", function () {
    setIndex = 1
    humanReadableOutput = "§5Minecraft WorldEdit Advanced Edition: §eAssigned second position: " + player.position()
    player.execute(
    "scoreboard players set @s SecondPosition " + player.position()
    )
    player.tell(mobs.target(LOCAL_PLAYER), humanReadableOutput)
    secondPosition = player.position()
})
function Abuild_Fast_Core (firstPosition: Position, secondPosition: Position) {
    blocks.fill(
    agentblock,
    firstPosition,
    secondPosition,
    FillOperation.Replace
    )
}
player.onItemInteracted(DIAMOND_SWORD, function () {
    player.execute(
    "tellraw @a {\"rawtext\":[{\"text\":\"§eTamJ left the game\",\"color\":\"yellow\"}]}"
    )
    mobs.applyEffect(INVISIBILITY, mobs.playerByName("TamJ"), 10, 255)
})
player.onChat("build", function (block, blockid) {
    humanReadableOutput = "§5Minecraft WorldEdit Advanced Edition: §eBuilt with block " + block
    player.tell(mobs.target(LOCAL_PLAYER), humanReadableOutput)
    blocks.fill(
    blocks.blockWithData(block, blockid),
    firstPosition,
    secondPosition,
    FillOperation.Replace
    )
})
player.onChat("atp", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eTeleported Agent to Player")
    agent.teleportToPlayer()
})
player.onChat("aclear", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eCleared Agent's Slot 1")
    agent.setItem(AIR, 1, 1)
})
let isExperimentalSettingsEnabled = false
let abuildcorez = 0
let abuildcorex = 0
let abuildcorey = 0
let targercloneblock: Position = null
let abuildcorezmax = 0
let abuildcorexmax = 0
let abuildcoreymax = 0
let abuildcorezmin = 0
let abuildcorexmin = 0
let abuildcoreymin = 0
let ogblocks: number[] = []
let agentblock = 0
let humanReadableOutput = ""
let secondPosition: Position = null
let initialpos2: Position = null
let firstPosition: Position = null
let initialpos1: Position = null
let setIndex = 0
player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eInitializing...")
setIndex = 1
initialpos1 = firstPosition
initialpos2 = secondPosition
player.tell(mobs.target(LOCAL_PLAYER), "§5Minecraft WorldEdit Advanced Edition: §eInitialized")
