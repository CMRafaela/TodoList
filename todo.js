const todoObjectList = []

class TodoClass {
    constructor(item) {
        this.ulElement = item
    }

    add() {
        const todoInput = document.querySelector("#myInput").value 
    
        if(todoInput == "") {
            alert("aqui")
        } else {
            const todoObject = {
                id: todoObjectList.length,
                todoText: todoInput,
                isDone: false,
            }

            todoObjectList.unshift(todoObject)
            this.display()
            document.querySelector("#myInput").value = ''
        }
    }

    done_undone(x) {
        const selectedTodoIndex = todoObjectList.findIndex((item)=> item.id == x)
        todoObjectList[selectedTodoIndex].isDone == false ? todoObjectList[selectedTodoIndex].isDone = true : todoObjectList[selectedTodoIndex].isDone = false
        this.display()
    }

    deleteElement(z) {
        const selectedDelIndex = todoObjectList.findIndex((item)=> item.id == z)
        todoObjectList.splice(selectedDelIndex, 1)
        this.display()
    }

    display() {
        this.ulElement.innerHTML = ""
        
        todoObjectList.forEach((Object_item) => {
            const liElement = document.createElement("li")
            const delBtn = document.createElement("i")

            liElement.innerText = Object_item.todoText
            liElement.setAttribute("data-id", Object_item.id)

            delBtn.setAttribute("data-id", Object_item.id)
            delBtn.classList.add("far", "fa-trash-alt")

            liElement.appendChild(delBtn)

            delBtn.addEventListener("click", function(e) {
                const deleteId = e.target.getAttribute("data-id")
                myTodoList.deleteElement(deleteId)
            })

            liElement.addEventListener("click", function(e) {
                const selectedId = e.target.getAttribute("data-id")
                myTodoList.done_undone(selectedId)
            })

            if(Object_item.isDone) {
                liElement.classList.add("checked")
            }

            this.ulElement.appendChild(liElement)
        })
    }

}

const listSection = document.querySelector("#myUL")

myTodoList = new TodoClass(listSection)

document.querySelector(".addBtn").addEventListener("click", function() {
    myTodoList.add()
})