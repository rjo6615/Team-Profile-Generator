function generateHTML(answers) {
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
    <main>
        <div class="card m-3 shadow rounded" style="width: 18rem;">
        <h2 class="bg-primary p-3 text-white">${answers.name}<br>${answers.role}</h2>
        <div class="card-body">
          <p class="card-text border border-muted shadow p-2 bg-body rounded">ID: ${answers.id}</p>
          <p class="card-text border border-muted shadow p-2 bg-body rounded">Email: <a href="${answers.email}">${answers.email}</a></p>
          <p class="card-text border border-muted shadow p-2 bg-body rounded">Office number: 1</p>
        </div>
      </div>
    </main>
  </body>
</html>
`
}
module.exports = generateHTML;