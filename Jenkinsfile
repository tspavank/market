pipeline {
    agent any //{ label "build" }
   // environment {
    //     def ip = sh returnStdout: true, script: 'curl -s http://169.254.169.254/latest/meta-data/public-ipv4'
   // }

    stages {
        stage("checkout"){
            steps {
                checkout scm
            }
        }

     /*   stage("static code analysis"){
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh '/opt/sonar/bin/sonar-scanner -Dsonar.projectKey=Zervmarket -Dsonar.sources=api'
                }
            }
        } */

        stage("build docker image"){
            steps {
                sh "docker build -t zervmarket."
            }
        }


        stage("env cleanup"){
            steps {
                sh returnStatus: true, script: 'docker rm -f zervmarket'
                sh "docker image prune -f"
            }
        }

        stage("Launch service"){
            steps {
                sh "docker run -d -p 6061:6060 --name zervmarket zervmarket"
            }
        }

        stage("Launch Info"){
            steps {
                echo "http://${ip}:6061"
            }
        }

    }
}
