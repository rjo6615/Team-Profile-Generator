const generateManager = function(manager) {
    return`
        <div class="card m-3 shadow rounded" style="width: 18rem;">
        <h2 class="bg-primary p-3 text-white">${manager.name}<br>Manager</h2>
        <div class="card-body">
          <p class="card-text border border-muted shadow p-2 bg-body rounded">ID: ${manager.id}</p>
          <p class="card-text border border-muted shadow p-2 bg-body rounded">Email: <a href="${manager.email}">${manager.email}</a></p>
          <p class="card-text border border-muted shadow p-2 bg-body rounded">${manager.officeNumber}</p>
        </div>
      </div>
`
}
const generateIntern = function(intern) {
  return`
      <div class="card m-3 shadow rounded" style="width: 18rem;">
      <h2 class="bg-primary p-3 text-white">${intern.name}<br>Manager</h2>
      <div class="card-body">
        <p class="card-text border border-muted shadow p-2 bg-body rounded">ID: ${intern.id}</p>
        <p class="card-text border border-muted shadow p-2 bg-body rounded">Email: <a href="${intern.email}">${intern.email}</a></p>
        <p class="card-text border border-muted shadow p-2 bg-body rounded">${intern.school}</p>
      </div>
    </div>
`
}
const generateEngineer = function(engineer) {
  return`
      <div class="card m-3 shadow rounded" style="width: 18rem;">
      <h2 class="bg-primary p-3 text-white">${engineer.name}<br>Manager</h2>
      <div class="card-body">
        <p class="card-text border border-muted shadow p-2 bg-body rounded">ID: ${engineer.id}</p>
        <p class="card-text border border-muted shadow p-2 bg-body rounded">Email: <a href="${engineer.email}">${engineer.email}</a></p>
        <p class="card-text border border-muted shadow p-2 bg-body rounded">${engineer.github}</p>
      </div>
    </div>
`
}
module.exports = generateHTML;