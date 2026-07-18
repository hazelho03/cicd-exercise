import './App.css'

function App() {
  return (
    <main className="container">
      <h1>CI/CD Tech Exercise</h1>

      <p className="subtitle">
        A React application automatically built and deployed using GitHub
        Actions.
      </p>

      <div className="card">
        <h2>Project Information</h2>

        <p>
          <strong>Student:</strong> Hazel Ho
        </p>

        <p>
          <strong>CI/CD Tool:</strong> GitHub Actions
        </p>

        <p>
          <strong>Cloud Hosting:</strong> GitHub Pages
        </p>

        <p>
          <strong>Framework:</strong> React and Vite
        </p>
      </div>

      <div className="card">
        <h2>How the Pipeline Works</h2>

        <p>
          Whenever code is pushed to the main branch, GitHub Actions installs
          the dependencies, builds the application, and deploys the new version
          to GitHub Pages.
        </p>
      </div>

      <p className="status">Deployment status: Ready for CI/CD</p>
    </main>
  )
}

export default App