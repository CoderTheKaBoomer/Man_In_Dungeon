// IDs: buttonStart, buttonChoice1, buttonInventory
// mainStoryParagraph, inventoryItem1

//Useful Tip: `` allows for text on multiple lines unlike '' or ":"

  let sceneCount = 1;
  let inventoryOpen = false

  let hasOldDagger = false
  let killedWerewolf = false
  let woundAmount = 0

  let endingOne = false
  let endingTwo = false

  // vars introduced in Chapter II
  let sceneID = 1
  let pathID = undefined
  let chapterOneEnded = false // switch back to enable chapter I

  // Inventory variables: //
  let keyForMainBase = false
  let hasLongsword = false
  let hasShovel = false

  // Backstory variables: //
  let isSoldier = false
  let isAssasin = false
  let isNobleman =  false
  let isPeasant = false

  // Pathfinding Variables: //

  let exploredEndlessHallway = false
  let exploredWayBack =  false
  let facedUndead = false



  storyTitle = document.getElementById('storyTitle')
  storyParagraph1 = document.getElementById('mainStoryParagraph1')
  storyParagraph2 = document.getElementById('mainStoryParagraph2')
  storyParagraph3 = document.getElementById('mainStoryParagraph3')

  inventoryItem1 = document.getElementById('inventoryItem1')
  inventoryItem2 =  document.getElementById('inventoryItem2')
  inventoryItem3 = document.getElementById('inventoryItem3')

  buttonStart = document.getElementById('buttonStart')
  buttonInventory = document.getElementById('buttonInventory')
  buttonChoice1 = document.getElementById('buttonChoice1')
  buttonChoice2 = document.getElementById('buttonChoice2')
  buttonChoice3 = document.getElementById('buttonChoice3')

function ChapterI() {

  function mainStoryComponent() {

    
    
    document.getElementById('buttonStart').onclick = function startingScene() {

      if(chapterOneEnded ==  false) {
        document.getElementById('mainStoryParagraph1').textContent = `
        The man woke up with a painful headache. He looked up, seeing sunlight through an opening he fell through, an old abandoned well.
        He had enough light to make out his sorroundings, and saw he was in an castle-like room, with dark cobble for its floor, walls, and ceeling.
        Having observed his sorroundings, the man collected himself and walked forward, seeing a door in the darkness.
        `

        document.getElementById('buttonChoice1').style.display = 'inline'
        document.getElementById('buttonChoice1').textContent = 'Open the door.'
        document.getElementById('buttonStart').style.display = 'none'
        document.querySelector('.health-container').style.display = 'inline'

        sceneCount = 1
        sceneCount++

        woundAmount = 0
        healthComponent()

      }
      else if(chapterOneEnded == true) {
        document.getElementById('mainStoryParagraph1').textContent = `
        The man walked for some time, exploring the desolate halls of the dungeon. Darkness swallowed every corner, rushing away as he passed
        with his torch in hand. He had walked for some time, and yet the torch showed no signs of fading. The wooden handle was sturdy,
        and the burning cloth soaked in oil should have burned out long ago. Something wasn't quite right with this place.
        `
        document.getElementById('mainStoryParagraph2').textContent = `
        At the end of the corridor the man saw something, perhaps born into reality from his thoughts. A light source.
        He quickly sped up, making his way towards it. It was a torch, hanging by a large double door in the side of the corridor.
        The door was quite strange, made of stone, reinforced with iron. Right next to the door was a skeleton, with a key in its hand.
        `
        storyParagraph3.textContent = ''

        document.getElementById('buttonChoice1').style.display = 'inline'
        document.getElementById('buttonChoice1').textContent = 'Take the key.'
        document.getElementById('buttonStart').style.display = 'none'
        document.querySelector('.health-container').style.display = 'inline'
        buttonInventory.style.display = 'inline'

        sceneID = 2
        sceneCount = 0

        if(killedWerewolf == true) {
          woundAmount = 1
          healthComponent()
        }
        else {
          woundAmount = 0
          healthComponent()
        }
        
        healthComponent()
      }
     
      
    }

    document.getElementById('buttonChoice1').onclick = function pickChoice1() {
      if(sceneCount == 2) {
      
        document.getElementById('mainStoryParagraph1').textContent = `
        Stepping out into the corridor, the man was greeted only by darkness. This place seemed abandoned long ago. He looked back to the collapsed
        ceeling where he came from, and the sunlight pouring from the hole. It would be the last time he saw sunlight in a while. The man stepped
        through the hallway and walked, careful not to bump into anything. The hallway was large and expansive, yet cold and damp, with droplets of
        condensed water forming on the stone walls.
        `
        document.getElementById('mainStoryParagraph2').textContent = `
        Seemingly infinite darkness soon faded, when the man noticed a dim light in front of him. Walking forward, he realized the hallway branched off
        into four different directions. Turning his head right, he saw a torch nearby.
        `

        document.getElementById('buttonChoice1').textContent = 'Take the torch.'
        

        sceneCount++
      }

    else if(sceneCount == 3) {

        document.getElementById('mainStoryParagraph1').textContent = `
        The man took the torch off of the rusty iron rack, smelling the burning oil. The fact there was still someone down here to light it was confusing.
        But alas, this whole place felt like straight out of a dream. Maybe it was one?
        `

        document.getElementById('mainStoryParagraph2').textContent = `
        The man kept walking, listening to the falling water droplets, inhaling the cold air, watching his step and trying not to slip. This corridor was particularly
        damp, for no apparent reason. Eventually, he noticed a peculiar wooden door on the right, hidden in the shadows. He walked up to it, hearing water pouring inside.
        `

        document.getElementById('buttonChoice1').textContent = 'Open the door.'
        document.getElementById('buttonChoice2').style.display = 'inline'
        document.getElementById('buttonChoice2').textContent = 'Keep walking.'

        sceneCount++
      }

    else if(sceneCount == 4) {
      document.getElementById('mainStoryParagraph1').textContent = `
      Grasping the doorknob, the man turned it sideways and pushed the door open. The sound of pouring water became louder, and the man saw a small stone pool in the
      middle of the room, the size of a  luxurious tub. By some arcane magic or feat of engineering, water was coming from the bottom of the pool, spilling over the edges
      and onto the ground, seeping through iron vents which drained it down below, presumably returning the spare water back whence it came.
      `
      document.getElementById('mainStoryParagraph2').textContent = `
      The man didn't question his sorroundings any further, he washed his hands and face with the cold water and drank a few handstrokes. This room would be useful to
      him in the future. That is, if he failed to find an exit out of this mysterous place.
      `

        document.getElementById('buttonChoice1').textContent = 'Leave the room.'
        document.getElementById('buttonChoice2').style.display = 'none'

        sceneCount++
      }
      else if(sceneCount == 5) {
        document.getElementById('mainStoryParagraph1').textContent = `
        The man continued down the hallway for some time, passing by another crossection, leading away in multiple directions. He decided to head left, remembering where he came from.
        This dungeoun seemed pointless. Why create such long, empty corridors? Was it a simple series of service tunnels built long ago? Where did it lead? The man had many questions.
        `
        document.getElementById('mainStoryParagraph2').textContent = `
        His thoughts were interrupted when the corridor came at an end, ending with a half-open door. The man pushed it open, peering inside with the torch. He found himself in
        a large, expansive room, with several tables, massive wooden cabinets, and piles of chairs and wood in the corners. Some kind of storage room? The man saw pans, wooden bowls,
        plates, a firing place with cooking appliances long since gone cold. 
        `

        document.getElementById('buttonChoice2').style.display = 'inline'
        document.getElementById('buttonChoice1').textContent = 'Loot the room.'
        document.getElementById('buttonChoice2').textContent = 'Leave.'

        sceneCount++
      }
      else if(sceneCount == 6){
        document.getElementById('mainStoryParagraph1').textContent = `
        The man placed the torch into a nearby rack and began searching the drawers, cuboards, looking for anything that might prove useful to him.
        He did not find anything but a simple rusty dagger. Not knowing of the intentions or even existence of any being down here, he took it, not wanting to take chances.
        `
        document.getElementById('mainStoryParagraph2').textContent = ``

        document.getElementById('buttonChoice2').style.display = 'none'
        document.getElementById('buttonChoice1').textContent = 'Return to the corridor.'
        document.getElementById('buttonInventory').style.display = 'inline'


        document.getElementById('inventoryItem1').textContent = 'Old Dagger'
        hasOldDagger = true

        sceneCount++
      }
      else if(sceneCount ==  7)  {
        document.getElementById('mainStoryParagraph1').textContent = `
        The man took his torch, then turned around and walked back the way he came. He turned left on the crossroads and moved north, or at least north on the imaginary
        map he was building in his head. This place was already larger than any building his eyes had ever seen, so a pair of stairs was bound to be
        around here somewhere.
        ` // It would have been better for the narrative to delay the combat encounter and hint at it with just the fact that the man heard some footsteps.
        document.getElementById('mainStoryParagraph2').textContent = `
        Suddenly, the man heard something behind him. A set of footsteps. He turned around on his heel, a shiver going down his spine.
        Not more than two dozen feet away from him stood some kindo of a beast from myth and legend, a massive wolf standing on its hind legs. The man
        had never seen such a beast before in his life. He believed this was no earthly creature. But a demon.

        ` // The wolf creature has poor balance on its hind legs, and can not turn while charging forward. It is also not super intelligent, but not very dumb either. LORE HINTS  FOR LATER
        document.getElementById('mainStoryParagraph3').textContent = `
        The creature came charging at him with a growl, extending its long claws and opening its jaws.
        `

        document.getElementById('buttonChoice2').style.display = 'inline'
        document.getElementById('buttonChoice3').style.display = 'none'

        if(hasOldDagger == true) { document.getElementById('buttonChoice1').textContent = 'Inventory Option: Stab it with the Old Dagger.'}
        else { document.getElementById('buttonChoice1').style.display = 'none'}

        document.getElementById('buttonChoice2').textContent =  'Dodge.'

        sceneCount++
      }
      else if(sceneCount == 8)  {
        document.getElementById('mainStoryParagraph1').textContent =  `
        As the monster charged at him, the man pulled out the long rusty dagger, which  plunged into its chest as it collided with him, sending them both to the ground.
        The beast roared in anquish, yet the man wasted no time, pulling out the dagger and driving it into its neck. He felt something warm on his shoulder as a pair of sharp
        claws cut through his coat, searing his flesh. He stabbed again and again, until the demon lay limp next to him.
        `
        document.getElementById('mainStoryParagraph2').textContent =  `
        The man rose up in silece, inspecting his wound. The claws had cut into his skin.
        `
        document.getElementById('mainStoryParagraph3').textContent =  ``

        document.getElementById('buttonChoice3').style.display = 'none'
        document.getElementById('buttonChoice2').style.display = 'none'

      document.getElementById('buttonChoice1').textContent  = 'Move on.'

        sceneCount++
        killedWerewolf = true
        woundAmount++
        healthComponent()
      }
      else if(sceneCount == 9 && killedWerewolf == false) { // If the man choses Dodge + FIGHT
        document.getElementById('mainStoryParagraph1').textContent = `
        The man pulled the dagger out of his belt, grasping it with his right hand. He had to find a way to scare it away. The beast observed the sharp object carefully, the scar
        above its left eye likely a reminder of a similar encounter from the past.
        `
        document.getElementById('mainStoryParagraph2').textContent = `
        Nonetheless, the beast started walking, trodding towards the man on its bent, wolf-like legs. There was no running now.
        `

        document.getElementById('buttonChoice1').textContent = 'Charge.'
        document.getElementById('buttonChoice2').textContent = 'Wait for it to come closer.'

        sceneCount++
      }
      else if(sceneCount == 9 && killedWerewolf == true) { // If the man killed the Werewolf.
        document.getElementById('mainStoryParagraph1').textContent = `
        Having bested the beast, the man moved on. His wound ached, reminding him of the pain to come. He had a feeling he wouldn't be getting out of this place
        without a fight.
        `
        document.getElementById('mainStoryParagraph2').textContent = ''
        document.getElementById('buttonChoice1').textContent = 'Keep moving.'
        document.getElementById('buttonChoice2').style.display = 'none'

        sceneCount++
        endingOne = true
        
      }
      else if(sceneCount == 10 && killedWerewolf == true && endingOne == true)  {
        document.getElementById('storyTitle').textContent = 'End of Chapter I:'

        document.getElementById('mainStoryParagraph1').textContent = ``
        document.getElementById('mainStoryParagraph2').textContent = ``
        document.getElementById('mainStoryParagraph3').textContent = ``

        document.getElementById('buttonChoice1').style.display = 'none'
        document.getElementById('buttonInventory').style.display = 'none'
        document.querySelector('.health-container').style.display = 'none'

        document.getElementById('buttonStart').style.display = 'inline'
        document.getElementById('buttonStart').textContent = 'Chapter II'

          chapterOneEnded = true
          ChapterII() // default
      }
      else if(sceneCount == 10 && killedWerewolf == false) {
        document.getElementById('mainStoryParagraph1').textContent = `
        Charging head on into the beast wasn't such a good idea, especially given the obvious difference in the amount of sharp teeth and claws.
        The man was ripped to pieces by the Werewolf.
        `
        document.getElementById('mainStoryParagraph2').textContent = ``
        document.getElementById('mainStoryParagraph3').textContent = ``

        document.getElementById('buttonStart').textContent = '[Try Again]'
        document.getElementById('buttonStart').style.display = 'inline'
        document.getElementById('buttonChoice1').style.display = 'none'
        document.getElementById('buttonChoice2').style.display = 'none'
        document.getElementById('buttonInventory').style.display = 'none'

        woundAmount = 4
        healthComponent()
      }
      else if(sceneCount == 11 && killedWerewolf  == false) {
        document.getElementById('mainStoryParagraph1').textContent = `
        Fighting a massive demonic beast with just a knife really wasn't a great idea. The man sadly only realized this as its claws dug through his chest,
        ripping him apart, before the beast feasted on his remmains.
        `
        document.getElementById('buttonStart').textContent = '[Try Again]'
        document.getElementById('buttonStart').style.display = 'inline'
        document.getElementById('buttonChoice1').style.display = 'none'
        document.getElementById('buttonInventory').style.display = 'none'


        woundAmount = 4
        healthComponent()
        sceneCount++
      }
    }

      // CHOICE BUTTON 2 BELOW

    document.getElementById('buttonChoice2').onclick = function pickChoice2() {
      if(sceneCount == 4) {
        document.getElementById('mainStoryParagraph1').textContent = `
        The man backed away from the door, moving on. There was no time to explore. He had to leave this place.
        `
        document.getElementById('mainStoryParagraph2').textContent = ''

        document.getElementById('buttonChoice1').textContent = 'Continue.'
        document.getElementById('buttonChoice2').style.display = 'none'

        sceneCount++
      }
      else if(sceneCount == 6) {
        document.getElementById('mainStoryParagraph1').textContent = `
        The man turned around, heading back down the corridor. There was nothing of value here.
        `
        document.getElementById('mainStoryParagraph2').textContent = ''

        document.getElementById('buttonChoice1').style.display = 'none'
        document.getElementById('buttonChoice2').textContent = 'Keep walking.'

        sceneCount++
      }
      else if(sceneCount ==  7)  {  //  Alternative to scene 7 in choice1, the only difference is that he didnt rack the torch so no need to take it.
        document.getElementById('mainStoryParagraph1').textContent = `
        The man turned around and walked back the way he came. He turned left on the crossroads and moved north, or at least north on the imaginary
        map he was building in his head. This place was already larger than any building his eyes had ever seen, so a pair of stairs was bound to be
        around here somewhere.
        ` // It would have been better for the narrative to delay the combat encounter and hint at it with just the fact that the man heard some footsteps.
        document.getElementById('mainStoryParagraph2').textContent = `
        Suddenly, the man heard something behind him. A set of footsteps. He turned around on his heel, a shiver going down his spine.
        Not more than two dozen feet away from him stood some kindo of a beast from myth and legend, a massive wolf standing on its hind legs. The man
        had never seen such a beast before in his life. He believed this was no earthly creature. But a demon.

        ` // The wolf creature has poor balance on its hind legs, and can not turn while charging forward. It is also not super intelligent, but not very dumb either. LORE HINTS  FOR LATER
        document.getElementById('mainStoryParagraph3').textContent = `
        The creature came charging at him with a growl, extending its long claws and opening its jaws.
        `

        document.getElementById('buttonChoice2').style.display = 'inline'
        document.getElementById('buttonChoice2').textContent =  'Dodge.'

        sceneCount++
      }
      else if(sceneCount == 8)  {
        document.getElementById('mainStoryParagraph1').textContent =  `
        The man waited for the beast to get close, then dashed out of the way. The confused animal charged beside him, before turning around.
        The beast growled at him again, its open jaws ready to attack.
        `
        document.getElementById('mainStoryParagraph2').textContent =  `
        
        `
        document.getElementById('mainStoryParagraph3').textContent =  ``

        document.getElementById('buttonChoice3').style.display = 'none'

        if(hasOldDagger == true) {document.getElementById('buttonChoice1').textContent  = 'Fight'}
        else {document.getElementById('buttonChoice1').style.display  ='none'}

        document.getElementById('buttonChoice2').textContent  =  'Run'

        sceneCount++
      }
      else if(sceneCount == 9 && killedWerewolf == false) {
        document.getElementById('mainStoryParagraph1').textContent = `
        Taking his chance while the beast was disoriented, the man turned heel and ran as fast as he could, leaving the beast in the darkness behind
        him. His hope was short lived however, as the beast ran after him, howling loudly.
        `
        document.getElementById('mainStoryParagraph2').textContent = `
        The man put all his power into his legs, running down the stone corridors, turning at each crossection, hoping to loose the beast. Eventually,
        the growling went quiet, and the sound of thundering paws withered away.
        `
        document.getElementById('mainStoryParagraph3').textContent = `
        After a few more minutes the man stopped, catching his breath. He had escaped.
        `


        document.getElementById('buttonChoice1').style.display = 'none'
        document.getElementById('buttonChoice2').style.display = 'none'
        document.getElementById('buttonInventory').style.display  = 'none'
        document.getElementById('buttonStart').style.display = 'inline'
        document.getElementById('buttonStart').textContent = 'Continue.'

        endingTwo = true
        chapterOneEnded = true
        ChapterII() // default for ending 2

        sceneCount = 0
        sceneID = 1
      }
      else if(sceneCount == 10 && killedWerewolf == false && endingTwo == true) {

        document.getElementById('storyTitle').textContent = 'End of Chapter I: Ending Two'

        document.getElementById('mainStoryParagraph1').textContent = ``
        document.getElementById('mainStoryParagraph2').textContent = ``
        document.getElementById('mainStoryParagraph3').textContent = ``

        document.getElementById('buttonChoice2').style.display = 'none'
        document.getElementById('buttonInventory').style.display = 'none'
        document.querySelector('.health-container').style.display = 'none'

        document.getElementById('buttonStart').style.display = 'inline'
        document.getElementById('buttonStart').textContent = 'Chapter II'
      }
      else if(sceneCount == 10 && killedWerewolf == false) {

        document.getElementById('mainStoryParagraph1').textContent = `
        The beast made its way towards the man, growling loudly. With each step its confidence grew, and its ugly mug twisted into a smile.
        It was about to attack, and the man knew turning his back to it meant certain death. He had no choice, but to attack.
        `
        document.getElementById('mainStoryParagraph2').textContent = ``

        document.getElementById('buttonChoice2').style.display = 'none'
        document.getElementById('buttonChoice1').textContent = 'Stab it'


        sceneCount++
      }
    }


  }

  function inventoryComponent() {

    document.getElementById('buttonInventory').onclick = function inventoryStateTrigger() {

      if(inventoryOpen == false) {
        document.querySelector('.mainStoryParagraphContainer').style.display = 'none'
        document.querySelector('.choiceButtonsContainer').style.display = 'none'

        document.querySelector('.inventoryContainer').style.display = 'inline'
        document.getElementById('buttonInventory').textContent =  'Close Inventory'

        inventoryOpen = true
      }
      else if(inventoryOpen == true) {
        document.querySelector('.mainStoryParagraphContainer').style.display = 'inline'
        document.querySelector('.choiceButtonsContainer').style.display = 'inline'

        document.querySelector('.inventoryContainer').style.display = 'none'
        document.getElementById('buttonInventory').textContent =  'Inventory'

        inventoryOpen = false
      }

    }
  }

  function healthComponent() {
    if(woundAmount == 0){
      document.getElementById('first-heart').style.display = 'inline'
      document.getElementById('second-heart').style.display = 'inline'
      document.getElementById('third-heart').style.display = 'inline'

      document.getElementById('first-heart-black').style.display = 'none'
      document.getElementById('second-heart-black').style.display = 'none'
      document.getElementById('third-heart-black').style.display = 'none'
    }
    else if(woundAmount == 1) {
      document.getElementById('third-heart').style.display = 'none'
    
      document.getElementById('third-heart-black').style.display = 'inline'
    }
    else if(woundAmount == 2) {
      document.getElementById('second-heart').style.display = 'none'
      document.getElementById('third-heart').style.display = 'none'

      document.getElementById('second-heart-black').style.display = 'inline'
      document.getElementById('third-heart-black').style.display = 'inline'

    }
    else if(woundAmount == 3) {
      document.getElementById('first-heart').style.display = 'none'
      document.getElementById('second-heart').style.display = 'none'
      document.getElementById('third-heart').style.display = 'none'

      document.getElementById('first-heart-black').style.display = 'inline'
      document.getElementById('second-heart-black').style.display = 'inline'
      document.getElementById('third-heart-black').style.display = 'inline'




        document.getElementById('mainStoryParagraph1').textContent = `
        The man could no longer go on. His wounds were too deep, and his life slipped away.
        `
        document.getElementById('mainStoryParagraph2').textContent = ``
        document.getElementById('mainStoryParagraph3').textContent = ``

        document.getElementById('buttonStart').textContent = '[Try Again]'
        document.getElementById('buttonStart').style.display = 'inline'
        document.getElementById('buttonChoice1').style.display = 'none'
        document.getElementById('buttonChoice2').style.display = 'none'
        document.getElementById('buttonChoice3').style.display = 'none'
        document.getElementById('buttonInventory').style.display = 'none'
        document.querySelector('.health-container').style.display = 'inline'
    }
    else if(woundAmount == 4) {
      document.getElementById('first-heart').style.display = 'none'
      document.getElementById('second-heart').style.display = 'none'
      document.getElementById('third-heart').style.display = 'none'

      document.getElementById('first-heart-black').style.display = 'inline'
      document.getElementById('second-heart-black').style.display = 'inline'
      document.getElementById('third-heart-black').style.display = 'inline'
    }
  }


    mainStoryComponent()
    inventoryComponent()
  
 


}

function ChapterII() {

  function mainStoryComponent() {

      document.getElementById('buttonChoice1').onclick = function pickChoce1() {
        if(sceneID == 2) {
          storyParagraph1.textContent = `
          The man crouched down, taking the key from inbetween the skeleton's fingers. The hand fall apart, bones clattering on the cold rock. 
          This person had been dead for a while. From the position of the body, and the cuts on its robe, it looked like something slashed it 
          across the back, making it fall.
          `
          storyParagraph2.textContent = `
          Grasping the key, the man looked at it. It was no ordinary key, it was decorated with engravings and quite advanced. The man pushed
          it into the lock and it entered swiftly, without any ressistance. He turned it clockwise, and the main lock clicked, followed by
          several more in order. Having retrieved the key, the man took a step back.
          `
          
          buttonChoice1.style.display = 'inline'
          buttonChoice1.textContent = 'Open the doors.'
          inventoryItem2.textContent = 'Base Key'

          sceneID++
        }
        else if(sceneID == 3) {
          storyParagraph1.textContent = `
          There was no knob or handle, so the man pushed, grunting as his muscles strained. Slowly the doors opened, revealing a large room, showered in the light
          of several torches and mystical blue lanterns on the walls. The room was full of shelves, chests, containg jars of food, items, tools, books, and many
          other things. In the middle of the room was a large table, covered in similiar items. Around it stood several chairs, and before the one at its helm
          stood an empty plate, with a single fork next to it.
          `
          storyParagraph2.textContent = `
          The man stepped further into the room, hanging his torch into a nearby wall rack. He looked around, taking in the wonders. As he approached the table,
          he saw blue light eminating from the middle. Crystals, larger than a dagger, eminating a blue glow. Several green crystals and a single orange one
          were next to the pile of blue crystals. The man was beyound confused. Was that skeleton outside once a wizard?
          `
          storyParagraph3.textContent = `
          In the corner of the room stood a small pool, with water falling over the edges, between iron bars which were on the floor right beside it.
          The man approached it, drinking down a few gulps to satisfy his thirst. Once he was done, he looked around the room, seeing something
          new. A door on the left side of the room, next to a bookshelf.
          `
          buttonChoice1.textContent = 'Investigate.'
          sceneID++
        }
        else if(sceneID == 4){
          storyParagraph1.textContent = `
          The man approached the door, pushing it open. Inside was a small room, with some kind of a circular altar in the middle. A large, glowing blue orb floated mid-air
          above it, eminating that same blue glow of the crystals. The man's jaw dropped. What sorcery was this?
          `
          storyParagraph2.textContent = `
          Hesitantly, the man stepped forward, feeling the power resonating within the orb. He reached out with his hand, placing it above the orb.
          A few bolts of blue lighting shot upwards from the orb, touching his hand.
          `
          storyParagraph3.textContent = ''

          buttonChoice1.textContent = 'Touch the orb.'
          sceneID++
        }
        else if(sceneID == 5)  {
          storyParagraph1.textContent = `
          And then, the memories came pouring in. Once, long ago, he man was a... 
          `
          storyParagraph2.textContent = ''

          document.querySelector('.backstory-selector-container').style.display = 'flex'
          document.querySelector('.health-container').style.display = 'none'
          buttonChoice1.style.display = 'none'
          buttonInventory.style.display = 'none'
    
          sceneID++
          backstorySelection()
        }
        else if(sceneID == 6) {
          storyParagraph1.textContent = `
          The man rose from the floor, having woken. He had spent some hours asleep, after having searched through the items in the main room. He had found more food, stocked away in a cupboard. Canned goods, bread, even fresh fruit.
          None of it had gone bad, or even stale. The apples tasted as if they were freshly picked off a tree. He had found books too, written in some unknown language he could not understand.
          ` // Add books that can be optionally read as the language is larned through the power of the Orb?
          storyParagraph2.textContent = `
          He could stay here for a while, but the food would not last forever. His mission did not change, despite the obvious dangers of this place, he had no choice but to continue. But he did not wish to leave the mystical orb,
          nor the safe refuge offered by the strong doors, which only he had the keys of.
          `

          buttonChoice1.textContent  = `Explore the area around the Holdout.`

          sceneID++
        }
        else if(sceneID == 7) {
          storyParagraph1.textContent = `
          The man inserted the key into the lock, hearing the clicking sounds in the complex mechanism. Grasping the handles, he pulled the doors open, stepping into the corridor. Looking down at the skeleton,
          he decided to simply close the doors, and not lock them. It was obvious that mistake had cost this poor fool his life. Before doing so, he grabbed his torch from the rack inside.
          `
          storyParagraph2.textContent  = `
          Looking down both sides of the corridor, the man was left with a binary choice.
          `

          buttonChoice1.textContent = 'Go left.' // Path A
          buttonChoice2.style.display = 'inline'
          buttonChoice2.textContent = 'Go right.' // Path B

          sceneID++
        }

        else if(sceneID == 8) {
          if(exploredWayBack == true && hasShovel == true && hasLongsword == false && exploredEndlessHallway == false) {
            storyParagraph1.textContent = `
            Before continuing, the man made his way back to explore the left side, passing the Holdout. Two paths stood in front of him.
            `
  
            storyParagraph2.textContent = ``
  
            buttonChoice1.style.display  = 'inline'
            buttonChoice2.style.display  = 'inline'
            buttonChoice3.style.display  = 'none'
  
            buttonChoice1.textContent = 'Go left.'
            buttonChoice2.textContent = 'Go forward.'
  
            sceneID++
            pathID = 'A'
          }

          else if(hasLongsword == true && hasShovel == true && exploredWayBack == true && exploredEndlessHallway == true){
            storyParagraph1.textContent = `
            Having explored the left side, the man made his way back to the right side, passing the Holdout. Three paths stood in front of him. Having explored the other two, only one remained.
            `
  
            storyParagraph2.textContent = ``
  
            buttonChoice1.style.display  = 'none'
            buttonChoice2.style.display  = 'inline'
            buttonChoice3.style.display  = 'none'

            buttonChoice2.textContent = 'Go forward.'
  
            sceneID++
            pathID = 'B'
          }

          else if(hasLongsword == true && exploredEndlessHallway == true && facedUndead == true) {
            storyParagraph1.textContent = `
            Having explored the left side, the man made his way back, passing the Holdout. It was time to face the undead..
            `
  
            storyParagraph2.textContent = ``
  
            buttonChoice1.style.display  = 'none'
            buttonChoice2.style.display  = 'inline'
            buttonChoice3.style.display  = 'none'

            buttonChoice2.textContent = 'Go forward.'
  
            sceneID++
            pathID = 'B'

          }

          else if(hasLongsword == true && exploredEndlessHallway  == true) {

            storyParagraph1.textContent = `
            Having explored the left side, the man made his way back, passing the Holdout. Three paths stood in front of him. Having come from the left corridor, the man knew there was nothing of value there. 
            Only a long, long walk back where he came from.
            `
  
            storyParagraph2.textContent = ``
  
            buttonChoice1.style.display  = 'inline'
            buttonChoice2.style.display  = 'inline'
            buttonChoice3.style.display  = 'inline'
  
            buttonChoice1.textContent = 'Go left.'
            buttonChoice2.textContent = 'Go forward.'
            buttonChoice3.style.display = 'inline'
            buttonChoice3.textContent = 'Go right.'
  
            sceneID++
            pathID = 'B'
            
          }

          else if(hasLongsword == true) { // this will allow the player to turn back once they aquire the Longsword

            storyParagraph1.textContent = `
            The man walked back down the corridor, facing the remaining path.
            `
  
            storyParagraph2.textContent = ``
  
            buttonChoice1.style.display = 'none'
            buttonChoice2.textContent = 'Go forward.'

            buttonChoice2.style.display = 'inline' // set to visible because in the longsword scene its hidden.
            sceneID++
            pathID = 'A'
          }

          else if(exploredEndlessHallway == true) {
            storyParagraph1.textContent = `
            The man walked back down the corridor, facing the remaining path.
            `
  
            storyParagraph2.textContent = ``
  
            
            buttonChoice2.textContent = 'Go forward.'
            buttonChoice2.style.display = 'inline'
            buttonChoice1.style.display = 'none'

            sceneID++ // loop occurs because we return to scene 9 which pushes us back to scene 8, rince and repeat. Solution is to create a variable that switches to true and breaks the loop. This should allow us to return, get the sword, and be able to leave.
            pathID = 'A' //  could also just check if hasLongsword FALSE, and then head over there if false. In the if statement above this one we check exploredEndlessHallway instead.
          
          }

          else {
            storyParagraph1.textContent = `
            The man walked down the corridor, soon arriving at a crossroads. Two paths stood in front of him.
            `
  
            storyParagraph2.textContent = ``
  
            buttonChoice1.textContent = 'Go left.'
            buttonChoice2.textContent = 'Go forward.'

            buttonChoice1.style.display = 'inline'
            buttonChoice2.style.display = 'inline'

            sceneID++
            pathID = 'A'
            }
          
        }
                                                                                                // We can easily do this by adding && isSoldier or isAssasin etc, before it continues to the next scene.
        else if(sceneID  == 9  && pathID == 'A') { // Arrives at an armory. Edit this: Assasin refuses to take the sword, picking out a upgraded dagger instead. Nobleman takes the sword but dies with it against the undead. Peasant refuses to take the sword.
          storyParagraph1.textContent = `
          Turning left, the man walked down the corridor, listening to the echoing sound of his own footsteps. Soon he reached a door at the end of the corridor.
          He grasped the handle, pulling it. The door opened, and inside he found an armory full of mostly rusted weaponry. After a few minutes, he found a longsword
          in near perfect condition.
          `

          if(hasShovel == true) {
            storyParagraph2.textContent = `
            He drew the sword out of its sheet, noticing it was still sharped and well-oiled. This weapon could prove handy in the future. The sheet came with a belt, which he used to secure it to his waist.
            Having no further use for the shovel, he threw it away.
            `
          }
          else {
            storyParagraph2.textContent = `
            He drew the sword out of its sheet, noticing it was still sharped and well-oiled. This weapon could prove handy in the future. The sheet came with a belt, which he used to secure it to his waist.
            ` // Soldier would notice this. Nobleman would not.
          }

          buttonChoice1.textContent = 'Go back.'
          buttonChoice2.style.display = 'none'

          hasLongsword = true
          inventoryItem3.textContent = 'Longsword'
          sceneID = 8
          pathID = 'A'
        }


        else if(sceneID == 9 && pathID == 'B') { // Refuses to back, in confusion. Reset scene ID back to 8 and choose again? Maybe eliminate the 1st button to prevent a loop, or leave it?
          storyParagraph1.textContent = `
          The man walked down the corridor, before stopping in confusion. He came from here, why would he go back? He turned around, returning to his starting position.
          `

          storyParagraph2.textContent = ``

          buttonChoice1.style.display = 'none'
          buttonChoice3.style.display  = 'none'
          buttonChoice2.textContent = 'Go back.'

          exploredWayBack = true
          sceneID = 8
          pathID = 'A'
        }
                                                            //Could also have options to dodge, dash out of the way, depending on if Soldier or Assasin. Dash would be more effective.
        else if(sceneID == 10 && pathID == 'A') { // if the character is a soldier, mention how he is fearless, and has fought many times before. This should be easily added with an additional sentence for each backstory.

          if(isSoldier == true) {
            storyParagraph1.textContent = `
            The man drew the longsword, and the blade gracefully slid out of its sheet. He took a step back, correcting his form. He had no doubts he would slay this foe. The creature's temper changed instantly, as it sightened the weapon. Its expression turned to anger, 
            and it rose the meat cleaver, charging at the man with the weapon raised high.
            `
            storyParagraph2.textContent = ``
            
  
            buttonChoice1.textContent = 'Block the strike.'
            buttonChoice2.textContent = 'Dodge.'
            buttonChoice2.style.display = 'inline'
  
            sceneID++
            pathID = 'A'
  
          }
          else if(isAssasin == true) {
            storyParagraph1.textContent = `
            The man drew the longsword, and the blade gracefully slid out of its sheet. The creature's temper changed instantly, as it sightened the weapon. Its expression turned to anger, 
            and it rose the meat cleaver, charging at the man with the weapon raised high. The assasin was counting on this.
            `
            storyParagraph2.textContent = ``
            

            if(hasOldDagger == true) {
              buttonChoice1.textContent = 'Throw the old dagger.'
              buttonChoice1.style.display = 'inline'
            }
            else if(hasOldDagger == false) {
              buttonChoice1.style.display = 'none'
            }
            
            buttonChoice2.textContent = 'Dash out of the way.'
            buttonChoice2.style.display = 'inline'

            sceneID++
            pathID = 'A'
          }
          else if(isNobleman == true) {
            storyParagraph1.textContent = `
            The man drew the longsword, and the blade gracefully slid out of its sheet. It had been a long time since he wielded a blade. The creature's temper changed instantly, as it sightened the weapon. Its expression turned to anger, 
            and it rose the meat cleaver, charging at the man with the weapon raised high.
            `
            storyParagraph2.textContent = ``
            

            buttonChoice1.textContent = 'Block the strike.'
            buttonChoice2.textContent = 'Dodge.'
            buttonChoice2.style.display = 'inline'

            sceneID++
            pathID = 'A'
          }
          else if(isPeasant == true) {
            storyParagraph1.textContent = `
            The man hesitantly drew the longsword, holding it in front of himself. The creature's temper changed instantly, as it sightened the weapon. Its expression turned to anger, 
            and it rose the meat cleaver, charging at the man with the weapon raised high. In sheer terror, the sword slip out of his fingers.
            `
            storyParagraph2.textContent = ``
            

            buttonChoice1.style.display = 'none'
            buttonChoice2.style.display = 'inline'
            buttonChoice2.textContent = 'Run!'

            sceneID++
            pathID = 'A'
          }
        }

        else if(sceneID == 10 && pathID == 'C') {
          if(hasShovel == true) {
            storyParagraph1.textContent = `
            The man slowly backed away, looking at the undead. The creature tilted its head in confusion, but did not pursue him. The cleaver in its hand remained steady at its side. After the man dissapeared in the darkness,
            the creature just remained standing there, looking around. The man quietly made his way back to the intersection. He had to find a better weapon before he could return there.
            `
            storyParagraph2.textContent = ``
            storyParagraph3.textContent = ``

            buttonChoice1.textContent = 'Explore other areas.'

            sceneID = 8
            facedUndead = true
          }
          else {
          storyParagraph1.textContent = `
          The man slowly backed away, looking at the undead. The creature tilted its head in confusion, but did not pursue him. The cleaver in its hand remained steady at its side. After the man dissapeared in the darkness,
          the creature just remained standing there, looking around. The man quietly made his way back to the intersection. He had to find a weapon before he could return there.
          `
          storyParagraph2.textContent = ``
          storyParagraph3.textContent = ``

          buttonChoice1.textContent = 'Explore other areas.'

          sceneID = 8
          facedUndead = true
          }
        }

        else if(sceneID == 11 && pathID == 'A') {
          if(isSoldier == true) {
            storyParagraph1.textContent = `
            Sparks flew high as the blades colided, steel meeting steel. The creature went to swing again, allowing the man to drive the sword deep into its torso. As the blade plunged into its flesh, the man used his free hand to grab
            the creature around the wrist, stopping it from hitting him with the cleaver. As he pulled out the sword, the creature dropped to the floor, dead.
            `
            storyParagraph2.textContent = ``
            
  
            buttonChoice3.textContent = 'Explore the dinning hall.'

            buttonChoice1.style.display = 'none'
            buttonChoice2.style.display = 'none'
            buttonChoice3.style.display = 'inline'
  
            sceneID++
            pathID = 'A'
          }
          else if(isAssasin == true) {
            storyParagraph1.textContent = `
            The creature's charge came to a halt as the dagger pierced through its eye, sending it crashing to the ground. The man sheathed his sword, and walked over to the corpse, ripping the dagger out of its eye.
            `
            storyParagraph2.textContent = ``
            
  
            buttonChoice3.textContent = 'Explore the dinning hall.'

            buttonChoice1.style.display = 'none'
            buttonChoice2.style.display = 'none'
            buttonChoice3.style.display = 'inline'
  
            sceneID++
            pathID = 'A'
          }
          else if(isNobleman == true) {
            storyParagraph1.textContent = `
            Sparks flew high as the blades colided, steel meeting steel. The man was pushed a few steps back, the sword's hilt saving his hand from being cut. The creature growled at him, pulling its cleaver back to 
            give another blow.
            `
            storyParagraph2.textContent = ``
            
  
            buttonChoice1.textContent = 'Stab it through the chest.'
            buttonChoice2.textContent = 'Attempt to block.'

            buttonChoice1.style.display = 'inline'
            buttonChoice2.style.display = 'inline'
            buttonChoice3.style.display = 'none'
  
            sceneID++
            pathID = 'A'
          }
        }

        else if(sceneID = 12 && pathID == 'A') {
          if(isNobleman == true) {
            storyParagraph1.textContent = `
            Taking his chance, the nobleman drove the sword deep into its chest, the blade coming out the other side. The creature's mouth opened wide, and its knees gave out. However, not before the cleaver found its mark, hitting
            the man's left shoulder.
            `
            storyParagraph2.textContent = `
            The man pulled out the sword out of its chest, feeling his painful wound.
            `
            
  
            buttonChoice3.textContent = 'Explore the dinning hall.'

            buttonChoice1.style.display = 'none'
            buttonChoice2.style.display = 'none'
            buttonChoice3.style.display = 'inline'
  
            sceneID = 12
            pathID = 'A'

            woundAmount++
            healthComponent()
          }
        }
      }

      document.getElementById('buttonChoice2').onclick = function pickChoce2() {
        if(sceneID == 8)  {

          if(facedUndead == true) {
            storyParagraph1.textContent = `
            The man stopped in the middle of the crossroads. He didn't think it would be smart to explore this area, so close to the undead. He knew where the path on his right lead, way back to the start.
            The path to his left did not seem to contain anything of value.
            `

            storyParagraph2.textContent = ``

            buttonChoice1.style.display = `inline`
            buttonChoice3.style.display = `none`
            buttonChoice2.style.display = 'none'
            buttonChoice1.textContent = 'Unexplored Areas: Go back.'
          }

          else if(exploredWayBack == true && hasShovel == true) {
            storyParagraph1.textContent = `
            The man stopped in the middle of the crossroads, facing the remaining path.
            `

            storyParagraph2.textContent = ``

            buttonChoice1.style.display = `none`
            buttonChoice3.style.display = `none`
            buttonChoice2.style.display = 'inline'
            buttonChoice1.textContent = 'Unexplored Areas: Go back.'
            buttonChoice2.textContent = 'Go forward.'

            if(hasLongsword == false) {

              buttonChoice1.style.display = 'inline'
              sceneID = 8
              pathID = 'A'
            }

            else if(hasLongsword == true) {
              sceneID = 9
              pathID = 'B'
            }

            
          }
          else if(exploredWayBack == true) {
            storyParagraph1.textContent = `
            The man walked back to the intersection.
            `

            storyParagraph2.textContent = ``

            buttonChoice1.style.display = `none`
            buttonChoice2.style.display = `inline`
            buttonChoice3.style.display = 'inline'
            buttonChoice2.textContent = 'Go forward.'
            buttonChoice3.textContent = 'Go right.'

            sceneID++
            pathID = 'B'

          }
          else if(hasShovel == true || hasLongsword == true) {
            storyParagraph1.textContent = `
            The man walked back to the intersection.
            `

            storyParagraph2.textContent = ``

            buttonChoice1.style.display = `inline`
            buttonChoice2.style.display = `inline`
            buttonChoice3.style.display = 'none'
            buttonChoice1.textContent = 'Go left.'
            buttonChoice2.textContent = 'Go forward.'

            sceneID++
            pathID = 'B'

          }

          else {
            storyParagraph1.textContent = `
            The man walked down the corridor, soon arriving at a crossroads. Three paths stood in front of him. Having come from the left corridor, the man knew there was nothing of value there. 
            Only a long, long walk back where he came from.
            `

            storyParagraph2.textContent = ``

            buttonChoice1.textContent = 'Go left.'
            buttonChoice2.textContent = 'Go forward.'
            buttonChoice3.style.display = 'inline'
            buttonChoice3.textContent = 'Go right.'

            sceneID++
            pathID = 'B'
          }
          
        }

        else if(sceneID == 9 &&pathID == 'A') { // This is the way out, but its a ridicilusly long hallway so he gives up. It would take him several days to make it across.
          if(exploredEndlessHallway == true) {
            storyParagraph1.textContent = `
            The man walked back down the corridor, facing the remaining path.
            `
  
            storyParagraph2.textContent = ``
  
            
            buttonChoice1.textContent = 'Go forward.'
            buttonChoice1.style.display = 'inline'
            buttonChoice2.style.display = 'none'

            sceneID = 9
            pathID = 'A' 
          }

          else {
            storyParagraph1.textContent = `
            The man made his way down the corridor. And then kept going. And going. After twenty minutes, there was no sign of it ending. The man stopped, shivering. This place
            was truly gigantic, for no apparent reason. He decided to go back, and try another way.
            `

            storyParagraph2.textContent = ``
          
            buttonChoice1.style.display = 'inline'
            buttonChoice1.textContent = 'Go back.'
            buttonChoice2.style.display = 'none'

            exploredEndlessHallway = true
            sceneID = 8
            pathID = 'A'
          }
        }

        else if(sceneID == 9 && pathID == 'B') { // Reaches an empty dining room with an undead inside of it. Different result based on if he has the Longsword or not, knows how to use it or not, has the new dagger and Assasin perk or not.
          storyParagraph1.textContent = `
          The man walked forward, heading down the corridor in front of him. It didn't take hm long to notice something strange, a white light eminating from farther up ahead, on the right side.
          Approaching the source, the man saw on the right side a large open room, with round wooden tables and chairs. A dining hall, with several of those strange lamps he saw in the Holdout.
          Except these were white, not blue. The man approached carefuly, inspecting the enviornment. As he stepped further into the hall a rattling sound from the left drew his attention.
          `

          storyParagraph2.textContent = `A skinny man of average height emerged from the cooking area, rising from the chair he had been sitting in. As he came closer, it became apparent it was no man; But an undead.
          In its blackened hand was a meat cleaver, and on its rotten face a confused expression. The creature opened its mouth, as if it attempted to speak. But without any sign of intelligence, all that came  out
          was a soft growl.`

          if(hasLongsword == true) {
            buttonChoice1.textContent = 'Draw the Longsword.' // can use path A, B, C as they are now free.
            buttonChoice1.style.display = 'inline'
            buttonChoice2.style.display = 'none'
            buttonChoice3.style.display = 'none'

            sceneID = 10
            pathID = 'A'
          }
          else {
            buttonChoice1.textContent = 'Back away.'
            buttonChoice1.style.display = 'inline'
            buttonChoice2.style.display = 'none'
            buttonChoice3.style.display = 'none'
            
            sceneID = 10
            pathID = 'C'
          }

          buttonChoice2.style.display = 'none'
          buttonChoice3.style.display = 'none'
        }

        else if(sceneID == 11 && pathID == 'A') {
          if(isSoldier == true) {
            storyParagraph1.textContent = `
            The man dodged right, attempting to lure the creature to charge past him. It didn't work. The cleaver found its mark, digging into his chest. The man smiled. Every soldier is
            bound to make a mistake once. Sadly, this one cost him his life.
            `
            storyParagraph2.textContent = ''

            buttonChoice1.style.display = 'none'
            buttonChoice2.style.display = 'none'
            buttonChoice3.style.display = 'none'
            buttonInventory.style.display = 'none'

            buttonStart.style.display = 'inline'
            buttonStart.textContent = '[Try Again]'

            hasLongsword = false
            hasShovel = false
            exploredEndlessHallway = false
            exploredWayBack = false

            inventoryItem2.textContent = ''
            inventoryItem3.textContent = ''

            isSoldier = false
            isAssasin = false
            isNobleman = false
            isPeasant = false

            woundAmount = 4
            healthComponent()
          }
          else if(isAssasin == true) {
            storyParagraph1.textContent = `
            The man waited, and in the last moment dashed right, dodging the creature. Using the force of his own momentum the man turned right back, driving the sword through its back.
            The creature fell to the floor.
            `
            storyParagraph2.textContent = ``
            
  
            buttonChoice3.textContent = 'Explore the dinning hall.'

            buttonChoice1.style.display = 'none'
            buttonChoice2.style.display = 'none'
            buttonChoice3.style.display = 'inline'
  
            sceneID++
            pathID = 'A'
          }
          else if(isNobleman == true) {
            storyParagraph1.textContent = `
            The man dodged right, attempting to lure the creature to charge past him. It didn't work. The cleaver found its mark, digging into his chest.
            `
            storyParagraph2.textContent = ''

            buttonChoice1.style.display = 'none'
            buttonChoice2.style.display = 'none'
            buttonChoice3.style.display = 'none'
            buttonInventory.style.display = 'none'

            buttonStart.style.display = 'inline'
            buttonStart.textContent = '[Try Again]'

            hasLongsword = false
            hasShovel = false
            exploredEndlessHallway = false
            exploredWayBack = false

            inventoryItem2.textContent = ''
            inventoryItem3.textContent = ''

            isSoldier = false
            isAssasin = false
            isNobleman = false
            isPeasant = false

            woundAmount = 4
          }
          else if(isPeasant == true) {
            storyParagraph1.textContent = `
            Terrified, the poor peasant ran back to the corridor, listening to the angry growls of the undead in his pursuit. He screamed for help, knowing it would never come. His only option was to
            make it to the Holdout. He was thanking himself for not locking the door.
            `
            storyParagraph2.textContent = `
            Having worked on the lands his whole life, he was quite fit, but he never ran much. This was the last thought the crossed his mind before the undead caught him to him, digging the cleaver into
            his back. The peasant screamed in pain, falling on the cold stone floor. The creature rose the cleaver again, and again, chopping the man into pieces until his screams finally went quiet.
            `

            storyParagraph3.textContent = 'The Dungeon was no place for a mere peasant.'

            buttonChoice1.style.display = 'none'
            buttonChoice2.style.display = 'none'
            buttonChoice3.style.display = 'none'
            buttonInventory.style.display = 'none'

            buttonStart.style.display = 'inline'
            buttonStart.textContent = '[Try Again]'

            hasLongsword = false
            hasShovel = false
            exploredEndlessHallway = false
            exploredWayBack = false

            inventoryItem2.textContent = ''
            inventoryItem3.textContent = ''

            isSoldier = false
            isAssasin = false
            isNobleman = false
            isPeasant = false

            woundAmount = 4
          }
        }

        else if(sceneID == 12 && pathID == 'A') {

          if(isNobleman == true) {
            storyParagraph1.textContent = `
            The man rose the sword, attempting to block the incoming blow, but it was too late. The cleaver found its target, cutting deep into his throat.
            `
            storyParagraph2.textContent = ''

            buttonChoice1.style.display = 'none'
            buttonChoice2.style.display = 'none'
            buttonChoice3.style.display = 'none'
            buttonInventory.style.display = 'none'

            buttonStart.style.display = 'inline'
            buttonStart.textContent = '[Try Again]'

            hasLongsword = false
            hasShovel = false
            exploredEndlessHallway = false
            exploredWayBack = false

            inventoryItem2.textContent = ''
            inventoryItem3.textContent = ''

            isSoldier = false
            isAssasin = false
            isNobleman = false
            isPeasant = false

            woundAmount = 4
          }
        }
      }

      document.getElementById('buttonChoice3').onclick = function pickChoce3() {
        if(sceneID == 9  &&  pathID == 'B') { // Reach a storage room with a shovel inside of it. Only take the shovel if you didn't take the Longsword.
          storyParagraph1.textContent = `
          The man turned right, arriving at a dead end. He was about to turn back, but then saw the shadow of a door on his left. He brought the torch closer and pushed the door open,
          stepping inside. He found himself in a small closet room, with a broom, a shovel, and a few bags of hay.
          `

          if(hasLongsword == true)  {
            storyParagraph2.textContent = `
            The man stepped out of the room. He already had a sword, why would he need a shovel?
            `
          }
          else  {
            storyParagraph2.textContent = `
            The man reached in and grabbed the shovel. It wouldn't be that useful against a determined attacker, but it was better than nothing.
            `
            hasShovel == true
            inventoryItem3.textContent = 'Rusty Shovel'
          }

          buttonChoice2.textContent = 'Go back.'
          buttonChoice1.style.display = 'none'
          buttonChoice3.style.display = 'none'

          hasShovel = true
          sceneID = 8
          pathID = 'A'
        }

        else if(sceneID == 12) {

          storyTitle.textContent = 'End of Chapter II'
          
          storyParagraph1.textContent = ''
          storyParagraph2.textContent = ''
          storyParagraph3.textContent = ''

          buttonChoice1.style.display = 'none'
          buttonChoice2.style.display = 'none'
          buttonChoice3.style.display = 'none'
          buttonInventory.style.display = 'none'

          document.querySelector('.health-container').style.display = 'none'


        }
      }

      // Continue this and make major improvements to the structure of the code before you begin.
      // On the werewolf: At one point in Chapter II the player will get the longsword and then, if they didn't kill the Werewolf, they will face it again. We can use killedWerewofl or endingOne / endingTwo variables for this.
      // The ID system has been selected for Chapter II. However, could we change the 2 functions perhaps? Would this be necessary, or beneficial?

      // Once you complete a Chapter, you unlock the Go Back button, which allows you to go back one scene.
      // Make a color paragraph that says: (Item Name) added to Inventory!
      // A backstory upgrade system? Soldier gets upgraded to Berserker, allowing the man to kill undead with his bare hands. Assasin gets upgraded to smh else, perhaps Nobleman too?
      //  Maybe there is only one true path, (Soldier/Berserker) but all other paths can be played to reveal lore?

      // If the player goes straight to the undead dining hall, he will be chased to the Holdout and emerge a few hours later, refusing to head right, instead exploring left, getting the Longsword.
      // If the player loots left first this does not apply.

      /* Changelog: v0.2
      
      -Added Chapter II
      -Added new choice mechanics
      -Added limited free roam between scenes
      -Various UI improvements
      -Different dialogue & encounters based on class picked

      Plans for v1.0:
      -Back button to return to a previous scene upon game completion (easier game exploration)
      -Improved free-roam
      -Random enemy encounters?
      -Random loot generation?
      
      Maybe start a new project alltogether, make more improvements to code structure by using nested if statements and variables more?

      
      
      */

  }

  function inventoryComponent() {

    document.getElementById('buttonInventory').onclick = function inventoryCheck() {

      function inventoryStateTrigger() {

        if(inventoryOpen == false) {
          document.querySelector('.mainStoryParagraphContainer').style.display = 'none'
          document.querySelector('.choiceButtonsContainer').style.display = 'none'

          document.querySelector('.inventoryContainer').style.display = 'inline'
          document.getElementById('buttonInventory').textContent =  'Close Inventory'

          inventoryOpen = true
        }
        else if(inventoryOpen == true) {
          document.querySelector('.mainStoryParagraphContainer').style.display = 'inline'
          document.querySelector('.choiceButtonsContainer').style.display = 'inline'

          document.querySelector('.inventoryContainer').style.display = 'none'
          document.getElementById('buttonInventory').textContent =  'Inventory'

          inventoryOpen = false
        }
      }
     
     
      
      

      inventoryStateTrigger()
    }
  }

  function healthComponent() {
    if(woundAmount == 0){
      document.getElementById('first-heart').style.display = 'inline'
      document.getElementById('second-heart').style.display = 'inline'
      document.getElementById('third-heart').style.display = 'inline'

      document.getElementById('first-heart-black').style.display = 'none'
      document.getElementById('second-heart-black').style.display = 'none'
      document.getElementById('third-heart-black').style.display = 'none'
    }
    else if(woundAmount == 1) {
      document.getElementById('third-heart').style.display = 'none'
    
      document.getElementById('third-heart-black').style.display = 'inline'
    }
    else if(woundAmount == 2) {
      document.getElementById('second-heart').style.display = 'none'
      document.getElementById('third-heart').style.display = 'none'

      document.getElementById('second-heart-black').style.display = 'inline'
      document.getElementById('third-heart-black').style.display = 'inline'

    }
    else if(woundAmount == 3) {
      document.getElementById('first-heart').style.display = 'none'
      document.getElementById('second-heart').style.display = 'none'
      document.getElementById('third-heart').style.display = 'none'

      document.getElementById('first-heart-black').style.display = 'inline'
      document.getElementById('second-heart-black').style.display = 'inline'
      document.getElementById('third-heart-black').style.display = 'inline'




        document.getElementById('mainStoryParagraph1').textContent = `
        The man could no longer go on. His wounds were too deep, and his life slipped away.
        `
        document.getElementById('mainStoryParagraph2').textContent = ``
        document.getElementById('mainStoryParagraph3').textContent = ``

        document.getElementById('buttonStart').textContent = '[Try Again]'
        document.getElementById('buttonStart').style.display = 'inline'
        document.getElementById('buttonChoice1').style.display = 'none'
        document.getElementById('buttonChoice2').style.display = 'none'
        document.getElementById('buttonChoice3').style.display = 'none'
        document.getElementById('buttonInventory').style.display = 'none'
        document.querySelector('.health-container').style.display = 'inline'
    }
    else if(woundAmount == 4) {
      document.getElementById('first-heart').style.display = 'none'
      document.getElementById('second-heart').style.display = 'none'
      document.getElementById('third-heart').style.display = 'none'

      document.getElementById('first-heart-black').style.display = 'inline'
      document.getElementById('second-heart-black').style.display = 'inline'
      document.getElementById('third-heart-black').style.display = 'inline'
    }
  }
  
  function backstorySelection() {

    document.getElementById('soldierLink').onclick = function() {
      document.querySelector('.backstory-selector-container').style.display = 'none'
      document.querySelector('.health-container').style.display = 'flex'
      buttonChoice1.style.display = 'inline'
      buttonInventory.style.display = 'inline'

      storyParagraph1.textContent = `
      Ripping his hand from the orb, the man looked at the burned imprint in his palm, in the shape of a sword. He was a soldier once. He did not remember when, for how long he campaigned, or in which wars. 
      Why didn't he remember? On second thought, he couldn't remember many things. But he recovered at least that crucial fragment of memory, which would help him survive in this place.
      `

      storyParagraph2.textContent = `
      The man turned around, leaving the room. Perhaps the orb would give him more wisdom later.
      `

      buttonChoice1.textContent = 'Continue exploring the holdout.'

      isSoldier = true
    }

    document.getElementById('assasinLink').onclick = function() {
      document.querySelector('.backstory-selector-container').style.display = 'none'
      document.querySelector('.health-container').style.display = 'flex'
      buttonChoice1.style.display = 'inline'
      buttonInventory.style.display = 'inline'

      storyParagraph1.textContent = `
      Ripping his hand from the orb, the man looked at the burned imprint in his palm, in the shape of a dagger. He was an assasin once. He did not remember when, the people he struck from the shadows, nor whom he served. 
      Why didn't he remember? On second thought, he couldn't remember many things. But he recovered at least that crucial fragment of memory, which would help him survive in this place.
      `

      storyParagraph2.textContent = `
      The man turned around, leaving the room. Perhaps the orb would give him more wisdom later.
      `

      buttonChoice1.textContent = 'Continue exploring the holdout.'

      isAssasin = true
    }

    document.getElementById('noblemanLink').onclick = function() {
      document.querySelector('.backstory-selector-container').style.display = 'none'
      document.querySelector('.health-container').style.display = 'flex'
      buttonChoice1.style.display = 'inline'
      buttonInventory.style.display = 'inline'

      storyParagraph1.textContent = `
      Ripping his hand from the orb, the man looked at the burned imprint in his palm, in the shape of a coin. He was a nobleman once. He did not remember the vast lands he ruled, nor the members of his court
      He did not remember his liege, or if he even bowed the knee to one. Why didn't he remember? On second thought, he couldn't remember many things. But he doubted that this fragment of memory would help him survive in this place.
      `

      storyParagraph2.textContent = `
      The man turned around, leaving the room, rushing to put his hand into the water pool to ease the pain. Perhaps the orb would give him more wisdom later.
      `

      buttonChoice1.textContent = 'Continue exploring the holdout.'

      isNobleman = true
    }

    document.getElementById('peasantLink').onclick = function() {
      document.querySelector('.backstory-selector-container').style.display = 'none'
      document.querySelector('.health-container').style.display = 'flex'
      buttonChoice1.style.display = 'inline'
      buttonInventory.style.display = 'inline'

      storyParagraph1.textContent = `
      Ripping his hand from the orb, the man looked at the burned imprint in his palm, in the shape of a pitchfork. He was a peasant once. He did not remember his home, nor his loved ones, only that
      he toiled the lands, day after day, growing his crops. Why didn't he remember? On second thought, he couldn't remember many things. But he doubted that this fragment of memory would help him survive in this place.
      `

      storyParagraph2.textContent = `
      The man turned around, leaving the room, rushing to put his hand into the water pool to ease the pain. Perhaps the orb would give him more wisdom later.
      `

      buttonChoice1.textContent = 'Continue exploring the holdout.'

      isPeasant = true
    }

    

  }

mainStoryComponent()
inventoryComponent()




}





ChapterI()
//ChapterII()  // By default  were calling Chapter II in Chapter I right as it ends, because otherwise the program mixes up sceneCount and sceneID. Uncomment here to debug, and switch chapterOneEnded to true, so it begins with Chapter II.
