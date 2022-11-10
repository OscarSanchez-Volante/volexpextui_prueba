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
        sh 'npm install'
      }
    }

    stage('build') {
      steps {
        sh 'node --max-old-space-size=3000 ./node_modules/@angular/cli/bin/ng build'
      }
    }
    
    stage('test') {
      sh 'ng test'
    }

  }
  tools {
    nodejs 'NodeJsAngular'
  }
}
