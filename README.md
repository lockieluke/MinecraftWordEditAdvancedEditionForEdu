# MinecraftWordEditAdvancedEditionForEdu

**Probably the first WorldEdit on Minecraft Education Edition that doesn't require you to memorise all the block ids**

Minecraft WorldEdit Advanced Edition for Minecraft Education Edition.
**You must have Code Connection installed on Minecraft Education Edition or have the version of Minecraft Education Edition bundled with the MakeCode component.**
Project Link: https://makecode.com/_XMVi725V5f64

Installation:(This is for the MakeCode component bundled with the Minecraft Education Edition)
1. Hit **C** on your keyboard then select **MakeCode** if you are the first time to use this component.
2. Click **Import**
3. Click **Import URL...**
4. Paste the **Project Link mentioned on top of this** on to the text box then click **Go ahead!**
5. Once the project is loaded, click **The "Play Button"**
6. Voila!

All Commands:
"set1" Assign the first position

"set2" Assign the second position

"build" + blockid + blockdataid(e.g. colors)  Fill with the block you mentioned from first position to second position with the replace method(See the build guide)

"querypos" Show the assigned positions

"clearpos" Clear the assigned positions

"helpblock" Show the block ids of different blocks

"givepositionchooser" Give the position chooser(Please see the guide on how to use the position chooser)
"giveep" Give the ender pearl

"givebarrier" Give the barrier

"clearareacloud" Clear area effect cloud

"cleareffect" Clear effect of you

"cleareffect @a" Clear effect of everyone

Agent Build Commands(Still in beta):
"atp" Teleport the agent to your position

"abuildfast" Fill with the block you gave to the agent(See the agent build guide)(This build method doesn't capture the block data id of your block e.g. the color of wools)

"abuildadv" Fill with the block you gave to the agent(See the agent build guide)(This build method capture the block data id of your

block, it means it can identify the color of the wool and things like that.  But this function may appear to be slower than the

"abuildfast" build method.)

"exp" Enable the experimental functions or settings

Rules:
Please do not switch this program to block view or python view as it will break the program

Position Chooser Guide:
This function helps you to choose the fill positions without typing any command.
1. type "givepositionchooser" to get the Position Chooser
2. move to the fill block start position and right click while holding the Position Chooser(Golden Sword)
3. move to the fill block end position and right click while holding the Position Chooser(Golden Sword)
4. You have choose the first two positions!!!  You can now build with the "abuildadv", "abuildfast" or "build" functions
Reminder for the position chooser: The system will tell you when it has finished marking down the position, please do not move before it tells you

Regular Build Function("build"):
1. After choosing the positions with the "set1", "set2" or the position chooser, you can just enter the command "build" with the block id and block data id(optionally) attached to it.

Example: "build 0" <- It builds with air
Example 2: "build 35 1" It builds with the orange wool

Agent Fast Build Method Guide("abuildfast")
Reminder: This does not identify the block data id(e.g. color) of the block you given to the agent but it appears to be much faster than the Agent Advance Build Method.  Recommend to use this method when you are working with the blocks that don't require a block data id to achive the wanted color or type
1. After choosing the positions with the "set1", "set2" or the position chooser, place the wanted block to the top left slot of your agent's inventory(Use the "atp" command to teleport the agent to your position if you can't see the agent)
2. Type "abuildfast", the agent should have filled with your given block

Agent Advance Build Method Guide("abuildadv"):
Reminder: This can identify the block data id(e.g. color) of the block you given to the agent, please note that this build method appears to be much slower than the regular build methods.
1. After choosing the positions with the "set1", "set2" or the position chooser, place the wanted block to the top left slot of your agent's inventory(Use the "atp" command to teleport the agent to your position if you can't see the agent)
2. Type "abuildadv", the agent will start building with the block you given to you.
3. Please do not enter any other commands when the agent is building with this build method
4. Please wait, the agent will tell you when it has finished building
