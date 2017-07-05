var homie = ['BriBri', 'Playa', 'Vito', 'Kim K', 'Cocheta'];

var loc = ['Liv', 'Bellagio', 'South Beach', 'Los Angeles', 'Atlanta', 'Hollywood', 'New Orleans', 'Denver', 'Nashville', 'Dubai'];

var weaponry = ['kusanagi', 'stapler', 'bazooka', 'nike', 'machete', 'bebe gun', 'fairy dust', 'scissorhand', 'kryptonite', 'yamaha', 'teleporter','silver stake', 'scimitar', 'katana', 'dart', 'blowtorch', 'stun gun', 'taser', 'excalibur', 'AK47'];

document.addEventListener('DOMContentLoaded', function(){
for(var i = 1; i < 101; i++){
    console.log(homie[i]+":");
    var heading = document.createElement('h3')
    heading.className = "header";
    document.body.append(heading)
    var clues = "Clue" + i
    heading.append(clues)
    }
});

