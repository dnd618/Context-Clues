var homie = ['BriBri', 'Playa', 'Vito', 'Kim K', 'Cocheta'];

var loc = ['Liv', 'Bellagio', 'South Beach', 'Los Angeles', 'Atlanta', 'Hollywood', 'New Orleans', 'Denver', 'Nashville', 'Dubai'];

var weaponry = ['kusanagi', 'stapler', 'bazooka', 'nike', 'machete', 'bebe gun', 'fairy dust', 'scissorhand', 'kryptonite', 'yamaha', 'teleporter','silver stake', 'scimitar', 'katana', 'dart', 'blowtorch', 'stun gun', 'taser', 'excalibur', 'AK47'];

document.addEventListener('DOMContentLoaded', function(){
    for(var i = 1; i < 101; i++){
    console.log(i);
    var heading = document.createElement('h3')
    heading.innerHTML = 'Clue ' + i;
    //Binding arrays to a set
    var set = {
        num: i,
        homie : homie[Math.floor(Math.random() * homie.length)],
        loc : loc[Math.floor(Math.random() * loc.length)],
        weaponry : weaponry[Math.floor(Math.random() * weaponry.length)]
    
    };
    //Binding called content to object
    heading.addEventListener('click', config.bind(set));
    document.body.appendChild(heading);
    }
});
//Allows .this to find keyword
function config() {
    alert(this.homie + ' did it in ' + this.loc + ' with a ' + this.weaponry);
}