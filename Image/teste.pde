PImage Color;
PImage a;

void setup () {
  size (600, 600);
  Color= loadImage("Color.png");
}

void draw (){
image(Color,0,0);
}
