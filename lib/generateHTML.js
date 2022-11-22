const generateManager = function(manager) {
    return`
        <div class="card m-3 shadow rounded" style="width: 18rem;">
        <h2 class="bg-primary p-3 text-white">${manager.name}<br>Manager</h2>
        <div class="card-body">
          <p class="card-text border border-muted shadow p-2 bg-body rounded">ID: ${manager.id}</p>
          <p class="card-text border border-muted shadow p-2 bg-body rounded">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
          <p class="card-text border border-muted shadow p-2 bg-body rounded">Office Number: ${manager.officeNumber}</p>
        </div>
      </div>
`
}
const generateIntern = function(intern) {
  return`
      <div class="card m-3 shadow rounded" style="width: 18rem;">
      <h2 class="bg-primary p-3 text-white">${intern.name}<br>Intern</h2>
      <div class="card-body">
        <p class="card-text border border-muted shadow p-2 bg-body rounded">ID: ${intern.id}</p>
        <p class="card-text border border-muted shadow p-2 bg-body rounded">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="card-text border border-muted shadow p-2 bg-body rounded">${intern.school}</p>
      </div>
    </div>
`
}
const generateEngineer = function(engineer) {
  return`
      <div class="card m-3 shadow rounded" style="width: 18rem;">
      <h2 class="bg-primary p-3 text-white">${engineer.name}<br>Engineer</h2>
      <div class="card-body">
        <p class="card-text border border-muted shadow p-2 bg-body rounded">ID: ${engineer.id}</p>
        <p class="card-text border border-muted shadow p-2 bg-body rounded">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="card-text border border-muted shadow p-2 bg-body rounded">GitHub: <a href="https://www.github.com/${engineer.github}">${engineer.github}</a></p>
      </div>
    </div>
`
}
generateHTML = (data) => {

  cardBuild = []; 

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];  
    const role = employee.getRole(); 
     

      if (role === 'Manager') {
          const managerCard = generateManager(employee);

          cardBuild.push(managerCard);
      }
      if (role === 'Intern') {
        const internCard = generateIntern(employee);

        cardBuild.push(internCard);
    
      }
      if (role === 'Engineer') {
        const engineerCard = generateEngineer(employee);

        cardBuild.push(engineerCard);
      }      
  }
  const employeeCards = cardBuild.join('')
  const generateTeam = generateTeamHTML(employeeCards); 
  return generateTeam;
}
const generateTeamHTML = function (employeeCards) {   
  return`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>My Team</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    </head>
    <body>
      <h1 class="bg-danger text-center p-4 m-3 text-white shadow">My Team</h1>
      <main class="d-flex flex-row">   
      ${employeeCards}
      </main>
    </body>
  </html>`
}

module.exports = generateHTML;