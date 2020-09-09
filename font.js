function registerFontFunctions(ctx){
	ctx.drawFontCenter = function(text,xCentre,y,scale){
		var x = xCentre - text.length/2 * 6 * scale;
		this.drawFont(text,x,y,scale);
	}
	ctx.drawFontRight = function(text,x,y,scale){
		var xR = x - text.length * 6 * scale;
		this.drawFont(text,xR,y,scale)
	}
	ctx.drawFont = function(text,x,y,scale){
		var font = this.fonts[this.fonts.current];
		for (var c=0,t=text.length;c<t;c++){
			this.drawLetter(font,text[c],x+(c*(font.width+1)*scale),y,scale);
		}
	}
	ctx.drawLetter = function(font,character,xPos,yPos,scale){
		var scale = scale || 1;
		var character = character.toLowerCase();
		var c = font.characters[character];
		if (!c) throw new Error("Character " + character + " is not in font " + ctx.fonts.current);
		for (var y=0; y<font.height; y++){		
			for (var x=0; x<font.width; x++){
				if (typeof c[y][x] !== "undefined"){
					if (typeof c[y][x] === "number") this.fillStyle = this.fonts.palettes[this.fonts.palette][c[y][x]];
					this.fillRect((x*scale) + xPos, (y*scale) + yPos, scale, scale);
				}
			}
		}
	}
	//ctx.setPalette = function(palette){
		//this.fonts.palette = palette;
	//}
}

function registerFonts(ctx){
	var X = true;
	ctx.fonts = {
		current: "alphanumeric",
		palette: 0,
		palettes: [
			["#fff", "#000"],	//1-bit
			["#000", "#fff"]	//1-bit inverted
		],
		alphanumeric:{
			height: 7,
			width: 5,
			characters: {
				////////// LETTERS ////////////////
				
				"a": [[ , ,X, , ],
					  [ ,X, ,X, ],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X,X,X,X,X],
					  [X, , , ,X],
					  [X, , , ,X]],
					
				"b": [[X,X,X,X, ],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X,X,X,X, ],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X,X,X,X, ]],
					
				"c": [[ ,X,X,X, ],
					  [X, , , ,X],
					  [X, , , , ],
					  [X, , , , ],
					  [X, , , , ],
					  [X, , , ,X],
					  [ ,X,X,X, ]],
				
				"d": [[X,X,X,X, ],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X,X,X,X, ]],
					
				"e": [[X,X,X,X,X],
					  [X, , , , ],
					  [X, , , , ],
					  [X,X,X,X, ],
					  [X, , , , ],
					  [X, , , , ],
					  [X,X,X,X,X]],
					
				"f": [[X,X,X,X,X],
					  [X, , , , ],
					  [X, , , , ],
					  [X,X,X,X, ],
					  [X, , , , ],
					  [X, , , , ],
					  [X, , , , ]],
					
				"g": [[ ,X,X,X, ],
					  [X, , , ,X],
					  [X, , , , ],
					  [X, , , , ],
					  [X, ,X,X,X],
					  [X, , , ,X],
					  [ ,X,X,X, ]],
				
				"h": [[X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X,X,X,X,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X]],
				
				"i": [[ ,X,X,X, ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ ,X,X,X, ]],
				
				"j": [[ ,X,X,X,X],
					  [ , , ,X, ],
					  [ , , ,X, ],
					  [ , , ,X, ],
					  [ , , ,X, ],
					  [X, , ,X, ],
					  [ ,X,X, , ]],
				
				"k": [[X, , , ,X],
					  [X, , ,X, ],
					  [X, ,X, , ],
					  [X,X, , , ],
					  [X, ,X, , ],
					  [X, , ,X, ],
					  [X, , , ,X]],
				
				"l": [[X, , , , ],
					  [X, , , , ],
					  [X, , , , ],
					  [X, , , , ],
					  [X, , , , ],
					  [X, , , , ],
					  [X,X,X,X,X]],
				
				"m": [[X, , , ,X],
					  [X,X, ,X,X],
					  [X, ,X, ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X]],
				
				"n": [[X, , , ,X],
					  [X, , , ,X],
					  [X,X, , ,X],
					  [X, ,X, ,X],
					  [X, , ,X,X],
					  [X, , , ,X],
					  [X, , , ,X]],
				
				"o": [[ ,X,X,X, ],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [ ,X,X,X, ]],
				
				"p": [[X,X,X,X, ],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X,X,X,X, ],
					  [X, , , , ],
					  [X, , , , ],
					  [X, , , , ]],
				
				"q": [[ ,X,X,X, ],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, ,X, ,X],
					  [X, , ,X,X],
					  [ ,X,X,X,X]],
				
				"r": [[X,X,X,X, ],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X,X,X,X, ],
					  [X, ,X, , ],
					  [X, , ,X, ],
					  [X, , , ,X]],
				
				"s": [[ ,X,X,X, ],
					  [X, , , ,X],
					  [X, , , , ],
					  [ ,X,X,X, ],
					  [ , , , ,X],
					  [X, , , ,X],
					  [ ,X,X,X, ]],
				
				"t": [[X,X,X,X,X],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ]],
				
				"u": [[X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [ ,X,X,X, ]],
				
				"v": [[X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [ ,X, ,X, ],
					  [ ,X, ,X, ],
					  [ , ,X, , ]],
				
				"w": [[X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, ,X, ,X],
					  [X,X, ,X,X],
					  [X, , , ,X]],
				
				"x": [[X, , , ,X],
					  [X, , , ,X],
					  [ ,X, ,X, ],
					  [ , ,X, , ],
					  [ ,X, ,X, ],
					  [X, , , ,X],
					  [X, , , ,X]],
				
				"y": [[X, , , ,X],
					  [X, , , ,X],
					  [ ,X, ,X, ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ]],
				
				"z": [[X,X,X,X,X],
					  [ , , , ,X],
					  [ , , ,X, ],
					  [ , ,X, , ],
					  [ ,X, , , ],
					  [X, , , , ],
					  [X,X,X,X,X]],
				
				/////////// NUMBERS //////////////
				
				"0": [[ ,X,X,X, ], 
					  [X, , , ,X],
					  [X, , ,X,X],
					  [X, ,X, ,X],
					  [X,X, , ,X],
					  [X, , , ,X],
					  [ ,X,X,X, ]],
				
				"1": [[ ,X,X, , ], 
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ ,X,X,X, ]],
				
				"2": [[ ,X,X,X, ], 
					  [X, , , ,X],
					  [ , , ,X, ],
					  [ , ,X, , ],
					  [ ,X, , , ],
					  [X, , , , ],
					  [X,X,X,X,X]],
				
				"3": [[ ,X,X,X, ], 
					  [X, , , ,X],
					  [ , , , ,X],
					  [ , ,X,X, ],
					  [ , , , ,X],
					  [X, , , ,X],
					  [ ,X,X,X, ]],
				
				"4": [[ , , ,X, ], 
					  [ , ,X,X, ],
					  [ ,X, ,X, ],
					  [X, , ,X, ],
					  [X,X,X,X,X],
					  [ , , ,X, ],
					  [ , , ,X, ]],
				
				"5": [[X,X,X,X,X], 
					  [X, , , , ],
					  [X, , , , ],
					  [X,X,X,X, ],
					  [ , , , ,X],
					  [X, , , ,X],
					  [ ,X,X,X, ]],
				
				"6": [[ ,X,X,X, ], 
					  [X, , , ,X],
					  [X, , , , ],
					  [X,X,X,X, ],
					  [X, , , ,X],
					  [X, , , ,X],
					  [ ,X,X,X, ]],
				
				"7": [[X,X,X,X,X], 
					  [ , , , ,X],
					  [ , , ,X, ],
					  [ , , ,X, ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ]],
				
				"8": [[ ,X,X,X, ], 
					  [X, , , ,X],
					  [X, , , ,X],
					  [ ,X,X,X, ],
					  [X, , , ,X],
					  [X, , , ,X],
					  [ ,X,X,X, ]],
				
				"9": [[ ,X,X,X, ], 
					  [X, , , ,X],
					  [X, , , ,X],
					  [ ,X,X,X,X],
					  [ , , , ,X],
					  [X, , , ,X],
					  [ ,X,X,X, ]],
				
				///////// SYMBOLS //////////////////
				
				" ": [[ , , , , ], 	// space
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ]],
				
				",": [[ , , , , ],  // comma
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , ,X, , ],
					  [ ,X, , , ]],
				
				".": [[ , , , , ],  // full stop
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ ,X, , , ]],
				
				/*"!": [[ , ,X, , ],  // exclamation mark
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , , , , ],
					  [ , ,X, , ]],*/
					  
				":": [[ , , , , ],  // colon
					  [ , ,X, , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , ,X, , ],
					  [ , , , , ]],
				
				/*"=": [[ , , , , ],  // equals
					  [ , , , , ],
					  [X,X,X,X,X],
					  [ , , , , ],
					  [X,X,X,X,X],
					  [ , , , , ],
					  [ , , , , ]],*/
				
				/*"≺": [[ , , , ,X],  // precedes
					  [ , ,X,X, ],
					  [X,X, , , ],
					  [ , , , , ],
					  [X,X, , , ],
					  [ , ,X,X, ],
					  [ , , , ,X]],*/
					  
				/*"≡": [[ , , , , ],  // triple bar
					  [X,X,X,X,X],
					  [ , , , , ],
					  [X,X,X,X,X],
					  [ , , , , ],
					  [X,X,X,X,X],
					  [ , , , , ]],*/
				
				"?": [[ ,X,X,X, ],  // question mark
					  [X, , , ,X],
					  [ , , , ,X],
					  [ , ,X,X, ],
					  [ , ,X, , ],
					  [ , , , , ],
					  [ , ,X, , ]],
				
				/*"-": [[ , , , , ],  // hyphen
					  [ , , , , ],
					  [ , , , , ],
					  [X,X,X,X,X],
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ]],*/
				
				"%": [[ ,X, , , ],  // percent
					  [X, ,X, ,X],
					  [ ,X, ,X, ],
					  [ , ,X, , ],
					  [ ,X, ,X, ],
					  [X, ,X, ,X],
					  [ , , ,X, ]],
				
				"@": [[ ,X,X,X, ],  // at sign
					  [X, , ,X,X],
					  [X, ,X, ,X],
					  [X, ,X, ,X],
					  [X, ,X,X, ],
					  [X, , , , ],
					  [ ,X,X,X, ]],
				
				/*"'": [[ ,X, , , ],  // apostrophe
					  [ , ,X, , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ]],*/
					  
				"\"": [[ ,X, ,X, ],  // quote
					  [ ,X, ,X, ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ],
					  [ , , , , ]],
				
				/*"₂": [[ , , , , ],  // subscript two
					  [ , , , , ],
					  [ , , , , ],
					  [ ,X,X, , ],
					  [ , , ,X, ],
					  [ , ,X, , ],
					  [ ,X,X,X, ]],*/
				
				"→": [[ , , , , ],  // right arrow
					  [ , ,X, , ],
					  [ , , ,X, ],
					  [X,X,X,X,X],
					  [ , , ,X, ],
					  [ , ,X, , ],
					  [ , , , , ]],
				
				"←": [[ , , , , ],  // left arrow
					  [ , ,X, , ],
					  [ ,X, , , ],
					  [X,X,X,X,X],
					  [ ,X, , , ],
					  [ , ,X, , ],
					  [ , , , , ]],
				
				"↑": [[ , , , , ],  // up arrow
					  [ , ,X, , ],
					  [ ,X,X,X, ],
					  [X, ,X, ,X],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , , , , ]],
				
				"↓": [[ , , , , ],  // down arrow
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [X, ,X, ,X],
					  [ ,X,X,X, ],
					  [ , ,X, , ],
					  [ , , , , ]],
				
				/*"+": [[ , , , , ],  // plus
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [X,X,X,X,X],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , , , , ]],*/
				
				/*"(": [[ , , ,X, ],  // left paren
					  [ , ,X, , ],
					  [ ,X, , , ],
					  [ ,X, , , ],
					  [ ,X, , , ],
					  [ , ,X, , ],
					  [ , , ,X, ]],*/
				
				/*")": [[ ,X, , , ],  // right paren
					  [ , ,X, , ],
					  [ , , ,X, ],
					  [ , , ,X, ],
					  [ , , ,X, ],
					  [ , ,X, , ],
					  [ ,X, , , ]],*/
				
				/*"↶": [[ , ,X,X, ],  // anticlockwise
					  [ ,X, , ,X],
					  [ ,X, , , ],
					  [X,X,X, , ],
					  [ ,X, , , ],
					  [ , , , , ], 
					  [ , , , , ]],*/
				
				/*"↷": [[ ,X,X, , ],  // clockwise
					  [X, , ,X, ],
					  [ , , ,X, ],
					  [ , ,X,X,X],
					  [ , , ,X, ],
					  [ , , , , ],
					  [ , , , , ]],*/
				
				"/": [[ , , ,X, ],  // slash
					  [ , , ,X, ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ , ,X, , ],
					  [ ,X, , , ],
					  [ ,X, , , ]],
				
				/*"☐": [[X,X,X,X,X],  // box
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X, , , ,X],
					  [X,X,X,X,X]],*/
				
				/*"☑": [[X,X,X,X,X],  // checked box
					  [X, , , ,X],
					  [X,X, ,X,X], 
					  [X, ,X, ,X],
					  [X,X, ,X,X],
					  [X, , , ,X],
					  [X,X,X,X,X]],*/
					  
				/*">": [[ , , , , ],  // greater than
					  [ ,X, , , ],
					  [ , ,X, , ], 
					  [ , , ,X, ],
					  [ , ,X, , ],
					  [ ,X, , , ],
					  [ , , , , ]],*/
					  
				/*"[": [[ ,X,X,X, ],  // open square bracket
					  [ ,X, , , ],
					  [ ,X, , , ], 
					  [ ,X, , , ],
					  [ ,X, , , ],
					  [ ,X, , , ],
					  [ ,X,X,X, ]],*/
					  
				/*"]": [[ ,X,X,X, ],  // close square bracket
					  [ , , ,X, ],
					  [ , , ,X, ], 
					  [ , , ,X, ],
					  [ , , ,X, ],
					  [ , , ,X, ],
					  [ ,X,X,X, ]],*/
					  
				/*"&": [[ , ,X, , ],  // ampersand
					  [ ,X, ,X, ],
					  [ ,X, ,X, ], 
					  [ ,X,X, , ],
					  [X, ,X, ,X],
					  [X, , ,X, ],
					  [ ,X,X, ,X]],*/
					  
				"♥": [[ , , , , ],  // heart
					  [ ,X, ,X, ],
					  [X,X,X,X,X],
					  [X,X,X,X,X],
					  [ ,X,X,X, ],
					  [ , ,X, , ],
					  [ , , , , ]],
					  
				"¢": [[ ,X,X,X, ],	// coil logo
					  [X, , , ,X],
					  [X, , ,X,X],
					  [X, , , , ],
					  [X, , , , ],
					  [X, , , ,X],
					  [ ,X,X,X, ]],
			}
		},
		gameObjects:{
			height: 8,
			width: 8,
			characters: {
				/*"♥": [[ ,X,X, , ,X,X, ],  // heart
					  [X,X,X,X,X,X,X,X],
					  [X,X,X,X,X,X,X,X],
					  [X,X,X,X,X,X,X,X],
					  [X,X,X,X,X,X,X,X],
					  [ ,X,X,X,X,X,X, ],
					  [ , ,X,X,X,X, , ],
					  [ , , ,X,X, , , ]],*/
				
				"★": [[ , , , ,X, , , ],  // star
					  [ , , , ,X, , , ],
					  [X,X, ,X,X, ,X,X],
					  [ ,X,X,X,X,X,X, ],
					  [ , ,X,X,X,X,X, ],
					  [ , ,X,X,X,X, , ],
					  [ ,X,X, , ,X,X, ],
					  [ ,X, , , , ,X,X]],
				
				"b": [[ , , , ,X,X, , ],  // dude (currently used for dashing)
					  [ , , , ,X,X, , ],
					  [ , , ,X,X,X, , ],
					  [ ,X,X, ,X, ,X, ],
					  [X, ,X,X, ,X,X, ],
					  [X, ,X,X,X,X,X, ],
					  [ , ,X, ,X,X, , ],
					  [ , ,X, , ,X, , ]],
				
				"t": [[ , , , , , , , ],  // legs and torso
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ , ,X, ,X, , , ],
					  [ , ,X,X, ,X, , ],
					  [ , ,X,X,X,X, , ],
					  [ , ,X, ,X,X, , ],
					  [ , ,X, , ,X, , ]],
					  
				"a": [[ , , , , , , , ],  // arms
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ ,X, , , , ,X, ],
					  [X, , , , , , ,X],
					  [X, , , , , , , ],
					  [ , , , , , , , ],
					  [ , , , , , , , ]],
				"k": [[ , , , , , , , ],  // arms attacking
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ ,X, , , , , , ],
					  [ ,X, , , , ,X,X],
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ , , , , , , , ]],
				
				"h": [[ , , , ,X,X, , ],  // head
					  [ , , , ,X,X, , ],
					  [ , , ,X,X,X, , ],
					  [ , , , ,X, , , ],
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ , , , , , , , ]],
					  
				"w": [[ , , , , , , , ],
					  [ , , ,X,X,X,X,X],  // wing
					  [ , , ,X,X,X,X, ],
					  [ , ,X,X,X,X, , ],
					  [ ,X,X,X, , ,X, ],
					  [ ,X,X, ,X, , , ],
					  [ ,X, , , , , , ],
					  [ ,X, , , , , , ]],
				
				"u": [[ , , , , , ,X,X],
					  [ , , , , ,X,X, ],
					  [ , , , ,X,X,X, ],  // wing up
					  [ , , ,X,X,X, ,X],
					  [ , ,X,X,X,X, , ],
					  [ , ,X,X, , ,X, ],
					  [ ,X,X, ,X, , , ],
					  [ ,X, , , , , , ]],
				
				"d": [[ , , ,X, , , , ],  // wing down
					  [ , , ,X,X, , , ],
					  [ , ,X,X,X,X, , ],
					  [ ,X,X,X,X,X,X, ],
					  [ ,X,X,X, ,X,X, ],
					  [ ,X,X, ,X, , ,X],
					  [ ,X, , , , , , ],
					  [ ,X, , , , , , ]],
				
				"^": [[ , , , , , , , ],  // spikes
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ ,X, , , ,X, , ],
					  [ ,X, , , ,X, , ],
					  [X,X,X, ,X,X,X, ]],
				
				"i": [[ , , , , , , , ],  // impb
					  [ , , , ,X,X, , ],
					  [ ,X, , ,X,X, , ],
					  [X, , , ,X, , , ],
					  [X, , ,X,X,X, , ],
					  [X,X,X,X,X,X, , ],
					  [ ,X,X,X,X, , , ],
					  [ , , ,X, ,X, , ]],
					  
				"!": [[ ,X, ,X, , , , ],  // deadimp
					  [X,X, , ,X, , ,X],
					  [X,X, , ,X, ,X,X],
					  [X,X, ,X,X, ,X,X],
					  [X,X,X,X,X,X,X,X],
					  [ ,X, ,X,X,X,X,X],
					  [ , ,X,X,X, ,X, ],
					  [ , ,X,X, , , , ]],
				
				"/": [[ , , , , , , , ],  // blank
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ , , , , , , ,X],
					  [ , , , , , ,X, ],
					  [ , , , , ,X, , ],
					  [ , , , ,X, , , ],
					  [ , , , , , , , ]],
				
				"@": [[ ,X,X,X,X, , , ],  // spiral
					  [X, , , , ,X, , ],
					  [ , ,X,X, , ,X, ],
					  [ ,X, , ,X, ,X, ],
					  [ ,X, ,X, , ,X, ],
					  [ ,X, , , ,X, , ],
					  [ , ,X,X,X, , , ],
					  [ , , , , , , , ]],
				
				/*" ": [[ , , , , , , , ],  // blank
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ , , , , , , , ],
					  [ , , , , , , , ]],*/
			}
		},
		boss:{
			height: 8,
			width: 8,
			characters: {
				/*"h": [[ , ,0,0,0, , , ],	//sword handle
					  [ , , ,0, , , , ],
					  [ , , ,0, , , , ],
					  [ , , ,0, , , , ],
					  [ ,0,0,0,0,0, , ],
					  [0,0,0,0,0,0,0, ],
					  [ , ,0,1,0, , , ],
					  [ ,0,1,1,1,0, , ]],
				"b": [[ ,0,1,0,1,0, , ],	//sword blade
					  [ ,0,1,0,1,0, , ],
					  [ ,0,1,0,1,0, , ],
					  [ ,0,1,0,1,0, , ],
					  [ ,0,1,0,1,0, , ],
					  [ ,0,1,0,1,0, , ],
					  [ ,0,1,0,1,0, , ],
					  [ ,0,1,0,1,0, , ]],
				"t": [[ ,0,1,0,1,0, , ],	//sword tip
					  [ ,0,1,0,1,0, , ],
					  [ ,0,1,0,1,0, , ],
					  [ ,0,1,0,1,0, , ],
					  [ ,0,1,1,1,0, , ],
					  [ , ,0,1,0, , , ],
					  [ , ,0,1,0, , , ],
					  [ , , ,0, , , , ]],*/
				
				"o": [[ , , , , , , , ],	//eye open
					  [ , , ,0,0, , , ],
					  [ ,0,0,1,1,0,0, ],
					  [0,1,1,0,0,1,1,0],
					  [0,1,1,0,0,1,1,0],
					  [ ,0,0,1,1,0,0, ],
					  [ , , ,0,0, , , ],
					  [ , , , , , , , ]],
					  
				"e": [[ , , , , , , , ],  // eye half open
					  [ , , ,0,0, , , ],
					  [ ,0,0,1,1,0,0, ],
					  [0,0,0,0,0,0,0,0],
					  [0,1,1,0,0,1,1,0],
					  [ ,0,0,1,1,0,0, ],
					  [ , , ,0,0, , , ],
					  [ , , , , , , , ]],
					  
				"u": [[ , , , , , , , ],  // eye closed
					  [ , , ,0,0, , , ],
					  [ ,0,0,1,1,0,0, ],
					  [0,1,1,1,1,1,1,0],
					  [0,0,1,1,1,1,0,0],
					  [ ,0,0,0,0,0,0, ],
					  [ , , ,0,0, , , ],
					  [ , , , , , , , ]],
					  
				"r": [[ , , ,0,0,0, , ],  // wing one upper
					  [ , ,0, , , ,0, ],
					  [ ,0, , , , , ,0],
					  [ ,0, , , , , , ],
					  [0, , , ,0, ,0,0],
					  [0, , , , ,0, , ],
					  [0, , , , , ,0, ],
					  [0, , ,0, ,0,0, ]],
				"l": [[0, , , ,0, , , ],  // wing one lower
					  [ ,0, , , ,0, , ],
					  [ ,0, , , ,0,0, ],
					  [ ,0, , ,0, , , ],
					  [ , ,0, , ,0, , ],
					  [ , ,0, , , ,0, ],
					  [ , , ,0, , , ,0],
					  [ , , , ,0,0,0,0]],
					  
				"/": [[ , , , , , , , ],  // wing two outer
					  [ , , , , , ,0,0],
					  [ , , , ,0,0, , ],
					  [ , , ,0, , , , ],
					  [ , ,0, , , , , ],
					  [ ,0, , , , , ,0],
					  [0, , ,0,0, ,0, ],
					  [0,0,0, , ,0, , ]],
				"-": [[ ,0,0,0,0,0, , ],  // wing two inner
					  [0, , , , , ,0, ],
					  [ , , , , , , ,0],
					  [ , , , , , , , ],
					  [ , , ,0, ,0,0, ],
					  [0, ,0, ,0, , ,0],
					  [ ,0, , , , , , ],
					  [ , , , , , , , ]],
					  
				/*"=": [[0,0,0,0, , , , ],  // wing three outer
					  [0, , , ,0,0,0, ],
					  [ ,0, , , , , ,0],
					  [0, , , , , , , ],
					  [ ,0,0, , , , , ],
					  [ , , ,0, ,0,0,0],
					  [ , , ,0,0, , ,0],
					  [ , , , , , , ,0]],
				"_": [[ , , , , , , , ],  // wing three inner
					  [ , , ,0,0,0,0, ],
					  [0,0,0, , , , ,0],
					  [ , , , , , , ,0],
					  [ , , , , ,0, , ],
					  [ , ,0, , ,0,0,0],
					  [ ,0, ,0, ,0, , ],
					  [0, , , ,0, , , ]],*/
			}
		}
	}
};