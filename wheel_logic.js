var shared_angle=40;
var rotations=0;
var is_rotating=false;
var lucks=0;
function rotate_wheel()
{
	if(rotations==360)
	{
		rotations=0;
	}
	var wheel=document.getElementById("wheel");
	wheel.style.transform="rotate("+rotations+"deg)";
	rotations=rotations+10;
	is_rotating=true;
	console.log(rotations);
}
function rotations_AI()
{
	//If the rotation is between -20 to +20 of the multiplier(i.e.the sweet spot)
	var sweet_spots=[0,80,160,240,280];
	var wheel=document.getElementById("wheel");

	for (var i = 0; i <sweet_spots.length; i++) {
		//increase the lucks
		lucks=lucks+1;
		if(rotations>sweet_spots[i]-20 && rotations<sweet_spots[i]+20)
		{			
			if(lucks>=10)
			{
				lucks=0;
				//Resetting the bad lucks to zero such that there are less chances of getting gems or jackpot
				wheel.style.transform="rotate("+sweet_spots[i]+"deg)";			
				alert("Very lucky guy");				
			}
			else
			{
				sweet_spots[i]=sweet_spots[i]+shared_angle;
				wheel.style.transform="rotate("+sweet_spots[i]+"deg)";			
				alert("Oops.");								
			}
		}
	}
}
function start_rotation()
{
	if(!is_rotating)
	{
		var timer=setInterval(rotate_wheel,25);
		window.timer=timer;
	}
}
function set_rotation()
{
	console.log('dffdg');
	var wheel=document.getElementById("wheel");
	var input_rot=document.getElementById("rotation").value;
	wheel.style.transform="rotate("+input_rot+"deg)";
	rotations=input_rot;
	rotations_AI();
}
function stop_rotation()
{
	rotations_AI();
	clearInterval(timer);
	is_rotating=false;
}

