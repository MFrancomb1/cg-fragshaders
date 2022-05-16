#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 t = texture(image, texcoord);

    //inverted colors
    t.r = (1.0-t.r);
    t.g = (1.0-t.g);
    t.b = (1.0-t.b);
    FragColor = t;
}
