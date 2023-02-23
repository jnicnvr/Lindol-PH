pipeline {
    agent {
        node{
            label 'goeshere'
        }
    }
    stages {
        stage('Build'){
            steps{
                echo 'Building ..'
            }
        }
        stage('Test'){
            steps{
                echo 'Testing ...'
            }
        }
        stage('Deploy') {
            steps {
                sh 'node --version'
            }
        }
    }
}