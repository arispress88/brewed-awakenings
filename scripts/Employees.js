import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

const employeeOrders = (employee) => {
    let orderCount = 0
    for (const order of orders) {
        if(order.employeeId === employee.id) {
           orderCount++

        }
    }
    return orderCount
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    let employeeSales = getEmployees()
                    const matchingEmployeeObjects = []
                    for (const employeeObject of employees) {
                        if (employeeObject.id === parseInt(employeeId)) {
                            const orderCount = employeeOrders(employeeObject)

                            window.alert(`${employee.name} sold ${orderCount} products`)
                        }
                    }

                    
                }
            }
        }
    }
)



export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

