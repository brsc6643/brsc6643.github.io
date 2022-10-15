const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertX = ["Babo the Clown",
,"Sugar Mommy the Girlboss"
,"The Great Oompa Loompa King"];

const insertY = ["the edge of all things that are known",
"magic fantasy gumdrop land",
"Shake Shack"];

const insertZ = ["grew fangs and wings and flew away into the sunset",
"intensly transormed back into a three year old child",
"removed a golf club from an unknown orefice"];


randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    const XItem = randomValueFromArray(insertX);
    const YItem = randomValueFromArray(insertY);
    const ZItem = randomValueFromArray(insertZ);
  
    newStory = newStory.replaceAll(':insertx:',XItem);
    newStory = newStory.replaceAll(':inserty:',YItem);
    newStory = newStory.replaceAll(':insertz:',ZItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }


  story.textContent = newStory;
  story.style.visibility = 'visible';
}
