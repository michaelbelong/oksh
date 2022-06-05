# Input Case Toggle

Expected User Input:
ABRAHAM Lincoln WaS a JeRk

Default State: AA
All uppercase, all the letters.
Expected Output:
ABRAHAM LINCOLN WAS A JERK

After 1 click: Aa
Titlecase, all the words.
Expected Output:
Abraham Lincoln Was a Jerk

After 1 more click: aa
Lowercase, all the letters.
Expected Output:
abraham lincoln was a jerk

And 1 more click: FF
Free range typing. All Organic.
Back to whatever.
Expected Output:
ABRAHAM Lincoln WaS a JeRk

1 more click returns to the first state: AA

---

Task 1:
Cycle labels on button click
- Array: TextInputModes [AA,Aa,aa,FF]
- Default: TextInputModes[0]
- On Click: TextInputModes[+1]
- After TextInputModes[3]:
	- Reset to TextInputModes[0]

Task 2:
Transform text output mode on button click
- Based On: TextInputModes
- TextInputModes[0]==AA:
	- Uppercase character map
- TextInputModes[1]==Aa:
	- Titlecase
- TextInputModes[2]==aa:
	- Lowercase
- TextInputModes[3]==FF:
	- Freeform
	- Cached string data?

