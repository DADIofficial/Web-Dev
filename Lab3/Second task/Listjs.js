k = 0;
function addDiv() {
    k++;
    const newList = document.createElement('div');
    newList.classList.add('test');

    const newCheckBox = document.createElement('input');

    newCheckBox.setAttribute('type', 'checkbox');
    newList.appendChild(newCheckBox);

    const newPar = document.createElement('p');
    const someInput = document.getElementById('inputField').value;
    if (someInput === ""){
        alert("You can't add null");
        
    }
    else{

    const newContent = document.createTextNode(someInput);
    newPar.appendChild(newContent);
    newList.appendChild(newPar);

    const newImg = document.createElement('img');
    newImg.src = 'https://cdn1.iconfinder.com/data/icons/color-bold-style/21/56-512.png'
    newList.appendChild(newImg);
    newImg.setAttribute('id', 'Newlist');
    newImg.id = k;

    newList.setAttribute('id', 'Newlist');
    newList.id = k;
    const Container_divs = document.getElementById('box_div');
    Container_divs.appendChild(newList);

    newImg.addEventListener('click', function() {
            const rofl = document.getElementById(newList.id);
            rofl.remove();
        });

    newCheckBox.addEventListener('change', function(){
        if(this.checked){
            newPar.classList.add('line');
        }
        else{
            newPar.classList.remove('line');
        }
    })
    }
}