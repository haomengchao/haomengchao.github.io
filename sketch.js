function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
	angleMode(DEGREES);
}

function draw() {
	let clock_sec;
	let clock_min;
	let clock_hour;
	clock_sec = second();
	clock_min = minute();
	clock_hour = hour();
	translate(400,300);
	
	let background_map_am = map(clock_hour%12,0,12,100,200);
	let background_map_pm = map(clock_hour%12,0,12,100,0);

	if (clock_hour >=12){
		background(background_map_pm);
		
	}else{
		background(background_map_am);
	}
	noFill();
	strokeWeight(2);
	stroke(255);
	ellipse(0,0,500,500);
	
	ellipse(0,0,400,400);
	ellipse(0,0,300,300);

	push();
	let sec_end = map(clock_sec,0,60,-90,270);
	let sec_color1 = map (clock_sec,0,60,194,34);
	let sec_color2 = map (clock_sec,0,60,31,148);
	let sec_color3 = map (clock_sec,0,60,48,83);

	rotate(sec_end);

	noStroke();
	fill(sec_color1,sec_color2,sec_color3);
	ellipse(250,0,30,30);
	pop();

	push();
	let min_end = map(clock_min,0,60,-90,270);
	let min_color1 = map (clock_min,0,60,252,15);
	let min_color2 = map (clock_min,0,60,161,89);
	let min_color3 = map (clock_min,0,60,4,164);
	rotate(min_end);
	noStroke();
	fill(min_color1,min_color2,min_color3);
	ellipse(200,0,40,40);
	pop();
	
	push();
	let hour_end = map(clock_hour,0,12,-90,270);
	let hour_color1 = map (clock_hour,0,12,251,242);
	let hour_color2 = map (clock_hour,0,12,200,90);
	let hour_color3 = map (clock_hour,0,12,47,71);
	rotate(hour_end);
	noStroke();
	fill(hour_color1,hour_color2,hour_color3);
	ellipse(150,0,50,50);
	pop();

}
