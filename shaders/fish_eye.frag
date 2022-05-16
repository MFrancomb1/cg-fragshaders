#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    /*
    This optical effect can be accomplished with a barrel distortion
    In order to accomplish a barrel distortion, implement the following equations:
        -scale and translate the texture coordinate such that it is in the range [-1.0, 1.0]
            -multiply by 2, then subtract 1
        -calculate 𝜽 = arctan(texture_coordinate_y, texture_coordinate_x)
        -calculate radius = magnitude of texture coordinate, raised to the power of 1.5
        -calculate fish eye texture coordinate = (radius * cos(𝜽),  radius * sin(𝜽))
        -re-scale final texture coordinate in range [0.0, 1.0]
            -final texture coordinate = 0.5 * (fish eye texture coordinate + 1.0)
    */
    vec2 transform = texcoord*2.0 - 1.0;
    float angle = atan(transform.y, transform.x);
    float radius = pow(length(transform), 1.5);
    vec2 coordinate = vec2(radius * cos(angle), radius*sin(angle));
    coordinate = 0.5 * (coordinate + 1.0);

    FragColor = texture(image, coordinate);
}
