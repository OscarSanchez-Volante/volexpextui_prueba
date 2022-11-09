pipeline {
  agent any
  stages {
    stage('Test npm') {
      steps {
        sh 'node --version'
      }
    }

    stage('Install node') {
      steps {
        sh 'npm install --save-dev @angular/cli@9.0.0'
      }
    }

    stage('build') {
      steps {
        sh 'ng build'
      }
    }

  }
  tools {
    nodejs 'NodeJsAngular'
  }
}