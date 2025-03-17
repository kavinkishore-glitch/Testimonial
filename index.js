const testimonials=[
{
    "id":1,
    "name":"Nature",
    "testimonial":"Nature is the ultimate source of our living. Both living and non-living things include nature, and everyone is interdependent, which helps maintain the ecosystem. Plants, animals, and humans all depend on nature for their survival. It supplies oxygen, sunlight, soil, water, and other necessary components.",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnF-9MqUDzNEnx6gVmFOatlpY_TdXJ_CReA&s"
},

{
  "id":2,
  "name":"Peacock",
  "testimonial":"The bird has different shades of blue and green feathers. Peacocks can spread out their long feathers like an umbrella revealing hundreds of eye-like patterns. Only the male peacocks have these beautiful feathers and use them to attract the peahens. The peacock is famous for its courtship dance with the females.",
  "image":"https://cdn.britannica.com/37/154237-050-A76A506D/blue-peafowl-tail-Indian-peacock-courtship-displays.jpg"  
},

{
    "id":3,
    "name":"Dogs",
    "testimonial":"In common with other parts of the Armed Services, animals were used by Airborne Forces during the Second World War. These included 'Para Dogs' trained to parachute alongside the troops. They were very important to the men after landing and were called upon to undertake guard, mine-detecting and patrol duties.",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFM4VTMWH0ErZPwxiImmNKZ3mUM8fGmEubA&s" 
  },

  {
    "id":4,
    "name":"Cats",
    "testimonial":"Cats are one of the most popular and lovable pets in the world. They are small, furry animals known for their playful and curious nature. Cats have sharp claws and teeth, which they use for hunting and climbing. They are very clean animals and groom themselves by licking their fur.",
    "image":"https://w0.peakpx.com/wallpaper/764/800/HD-wallpaper-kitty-secrets-graphy-fluffy-kittens-white-cat-fur-animal-thumbnail.jpg" 
  },

  {
    "id":5,
    "name":"Waterfall",
    "testimonial":"Waterfalls are usually made when a river is young, in places where softer rock is underneath harder rock in the waterfalls. Many people like to visit waterfalls. The roar from a big waterfall is very loud. Some people think it is beautiful music and that a waterfall is one of the most beautiful things in nature.",
    "image":"https://t3.ftcdn.net/jpg/02/86/72/18/360_F_286721823_jX2eKauNsttWhIxKAzPYhHwYpSRTCdcm.jpg"  
  },
]



const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1 = document.querySelector(".username");

idx=0;

updateTestimonial()

function updateTestimonial(){
    const {id,name,testimonial,image} = testimonials[idx]
    imgE1.src=image
    textE1.innerHTML=testimonial
    usernameE1.innerHTML=name
    idx++
    if(idx === testimonials.length){
        idx=0;
    }
    setTimeout(()=>{
        updateTestimonial()
    },800)
}

