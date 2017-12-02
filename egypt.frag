void mainImage(out vec4 fragColor, in vec2 fragCoord){
	vec2 r = vec2(fragCoord.x / iResolution.x, fragCoord.y / iResolution.y);

	vec3 red = vec3(1.0,0.0 , 0.0);
	vec3 black = vec3(0.0, 0.0, 0.0);
	vec3 white = vec3(1.0, 1.0, 1.0);
	vec3 yellow = vec3(0.867, 0.910, 0.247);
	vec3 backGroundGrey = vec3(1.05,1.05,1.05);
	vec3 pixel = backGroundGrey;


	if (r.y < 1.0/3.0){
	pixel = black;
	}
	else if (r.y < 2.0/3.0){
	pixel = white;
	}
	else{
	pixel = red;
	}
	
    if (r.x >0.48 && r.x < 0.55 && r.y > 0.4 && r.y < 0.55 ){
    pixel = yellow;
    }
	
     if (r.x >0.5 && r.x < 0.58 && r.y > 0.5 && r.y < 0.55 ){
    pixel = yellow;
    }
    
     if (r.x >0.45 && r.x < 0.49 && r.y > 0.4 && r.y < 0.44 ){
    pixel = yellow;
    }

	
	fragColor = vec4(pixel, 1.0);
}