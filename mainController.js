angular.module('myApp', []).controller('mainController', function ($scope, $http) {

    $scope.title = 'Lista Telefonica';
    $scope.contatos = [];
    $scope.operadora = [];
    $scope.cor = [];

    $scope.isContatoSelecionado = function (e) {
        e.forEach(element => { 
            if (element.Selecionado)
            deleteContato(element.Selcionado.ID); 
            return true;  
        });
    }

    // operadoras
    var getOperadoras = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost/operadoras',
            headers: { 'X-Force-Content-Type': 'application/json' }
        })
            .then(function (response) {
                $scope.operadora = response.data;
            }).catch(function () {
                console.log("Deu Ruim");
            });
    };

    // contatos
    var getContatos = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost/contatos',
            headers: { 'X-Force-Content-Type': 'application/json' }
        }).then(function (response) {
            console.log('Json de resposta ==== >>>', response.data);
            $scope.contatos = response.data;
        }).catch(function () {
            console.log("Deu ruim")
        });
    };

    var deleteContato = function (ID) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost/contatos/' + ID,
            headers: { 'X-Force-Content-Type': 'application/json' }
        }).then(function (response) {
            console.log('Json de resposta ==== >>>', response.data)
            $scope.contatos = response.data;
        }).catch(function () {
            console.log("Deu ruim")
        });
    };

    var putContato = function (ID) {
        return $http({
            method: 'PUT',
            url: 'http://localhost/contatos/' + ID,
            headers: { 'X-Force-Content-Type': 'application/json' }
        }).then(function (response) {
            console.log('Json de resposta ==== >>>', response.data)
            $scope.contatos = response.data;
        }).catch(function () {
            console.log("Deu ruim")
        });
    };

    $scope.enviar = function (e) {
        console.log(angular.copy(e));
        $scope.contatos.push(angular.copy(e));
        delete $scope.e;
    }


    $scope.apagar = function (e) {
        $scope.contatos = e.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
        console.log(contatosSelecionados);
    }
    // cor 
    var getCor = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost/cores',
            headers: { 'X-Force-Content-Type': 'application/json' }
        })
            .then(function (response) {
                $scope.cor = response.data;
            }).catch(function () {
                console.log("Deu Ruim");
            });
    };




    getCor();
    getOperadoras();
    getContatos();
    
    putContato();
    debugger;

});
