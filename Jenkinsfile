pipeline {
  agent any
  stages {
    stage('Checkout'){
      deleteDir()
      checkout scm
    }
    
    stage('NPM Install') {
      withENV(["NPM_CONFIG_LOGLEVEL=warn"]) {
        sh 'npm install'
      }
    }
    
    
  }
}
