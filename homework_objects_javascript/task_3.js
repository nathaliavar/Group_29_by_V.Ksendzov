const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

/*
Задания: 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

**Пример:**
Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)*/
function general_info(data){
  let structureOfCompanies = ''
  for (let i=0; i<data.length; i++){
    structureOfCompanies += data[i].name 
    let departments = ''
    let countOfEmploees = 0
    for (let j = 0; j< data[i].departments.length; j++){
      const {employees_count: count, name} =  data[i].departments[j]
      countOfEmploees += count
      departments += `- ${name} (${count} сотрудников) \n`
    }
    structureOfCompanies += ` (${countOfEmploees} сотрудников) \n` + departments
  }
  console.log(structureOfCompanies)
}
general_info(enterprises)


/*
2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
*/
function getEnterpriseName(deparmentLocator){
  return enterprises.find((enterprise)=>enterprise.departments.find(({id, name})=> id === deparmentLocator || name === deparmentLocator))?.name || 'Предприятия не существует'
}
console.log(getEnterpriseName('Отдел маркетинга'))


/*
3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
*/

function addEnterprise(newEnterprise){
  const lastId = enterprises[enterprises.length-1].departments
  enterprises.push({
    id: lastId[lastId.length-1].id + 1,
    name: newEnterprise,
    departments: []
})
return enterprises
}

console.log(addEnterprise(`Звезда`))

/*
4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
*/

function addDepartment(enterpriseId, departmentName){
  const enterpriseToAdd = enterprises.find((enterprise)=> enterprise.id === enterpriseId)
  const lastId = enterpriseToAdd.departments[enterpriseToAdd.departments.length-1].id + 1
  enterpriseToAdd.departments.push({
    id: lastId,
    name: departmentName,
  })
  return enterprises
}

console.log(addDepartment(1, "ОТК"))

/*  
5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
*/
function editEnterprise(enterpriseId, newEnterpriseName){
  const enterpriseToChange = enterprises.find((enterprise)=> enterprise.id === enterpriseId)
  enterpriseToChange.name = newEnterpriseName
  return enterprises
}

console.log(editEnterprise(1, 'Елочка'))

/*
6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
*/
function editDepartment(departmentId, newDepartmentName){
  const enterpriseForDepartment = enterprises.find((enterprise)=>enterprise.departments.find(({id})=>id===departmentId))
  const departmentToChange = enterpriseForDepartment.departments.find((department)=>departmentId===department.id)
  departmentToChange.name = newDepartmentName
  return enterprises
}
editDepartment(10, 'GTV')
console.log(JSON.stringify(enterprises))

/*
7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
*/
function deleteEnterprise(enterpriseId){
  const enterpriseToDelite = enterprises.find((enterprise)=> enterprise.id == enterpriseId)
  enterprises.splice(enterprises.indexOf(enterpriseToDelite), 1)
  return enterprises
}

console.log(deleteEnterprise(9))

/*
8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
*/
function deleteDepartment(departmentId){
  const enterpriseForDepartment = enterprises.find((enterprise)=>enterprise.departments.find(({id})=>id===departmentId))
  const departmentToDelite = enterpriseForDepartment.departments.find((department)=>departmentId===department.id)
  enterpriseForDepartment.departments.splice(enterpriseForDepartment.departments.indexOf(departmentToDelite), 1)
  return enterprises
}


deleteDepartment(2)
console.log(JSON.stringify(enterprises))


/* 
9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: 
id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
*/
function moveEmployees(deleteDepartmentId, insertDepartmentId){
  const employeeEnterprise = enterprises.find((enterprise)=>enterprise.departments.find(({id})=>id===deleteDepartmentId))
  const deleteDepartment = employeeEnterprise?.departments.find(({id})=> id===deleteDepartmentId)
  const insertDepartment = employeeEnterprise?.departments.find(({id})=> id===insertDepartmentId)
  
  if (insertDepartment && deleteDepartment){
  insertDepartment.employees_count += deleteDepartment.employees_count 
  deleteDepartment.employees_count = 0
  }

  return enterprises
}

moveEmployees(3, 4)
console.log(JSON.stringify(enterprises))