pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t azure-aks-demo:%BUILD_NUMBER% ./app'
            }
        }

        stage('Test') {
            steps {
                echo 'Application test stage'
            }
        }
    }
}
