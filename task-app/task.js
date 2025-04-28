function createTask() 
{
    
// Reconocer elementos

const mypage = document.getElementById('mypage')
const myinput = document.getElementById('myinput')
const mybutton = document.getElementById('mybutton')

// Crear elementos

const mytask = document.createElement('div')
const mytaskText = document.createElement('p')
const mytaskDelete = document.createElement('button')

// Insertar elementos en el documento

mypage.appendChild(mytask)
mytask.appendChild(mytaskText)
mytask.appendChild(mytaskDelete)

// Valores de los elementos

mytask.id = 'mytask'
mytaskText.id = 'mytaskText'
mytaskDelete.id = 'mytaskDelete'

mytaskText.textContent = myinput.value
myinput.value = ''
mytaskDelete.innerHTML = '<i class="fas fa-check"></i>'; // Ícono de check


// Eliminar tarea

mytaskDelete.onclick = () => {

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });

    mytask.remove()
};

}
