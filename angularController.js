
app.controller('ContactFormController', ['$scope','$http', '$mdToast', '$animate','$templateCache',
        function($scope,$http, $mdToast, $animate,$templateCache) {
 

//  $scope.content = "<p> this is custom directive </p>";
//  $scope.content_two = "<p> this is ng-ckeditor directive </p>";
            

            /* $scope.next = function() {
                $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
            };
            $scope.previous = function() {
            $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
          

            };*/
            $scope.stepChanged = function()
    {
      console.log('step changed');
    };

    $scope.wizardSaved = function()
    {
      console.log('save clicked');
    };
           /* this.selectedTab = null;

            this.nextTab = function() {
            this.selectedTab ;
            this.selectedTab = (this.selectedTab + 1) % 5;
            };

            this.previousTab = function(){
            this.selectedTab = (this.selectedTab - 1);  
            };*/

            tinymce.init({
            selector: 'textarea',
            height: 170,
            width: 400,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table contextmenu paste code'
            ],
            toolbar: ' bold | italic underline | link unlink',
            content_css: 'https://www.tinymce.com/css/codepen.min.css'
          });


              $scope.items = ['BU1', 'BU2', 'BU3', 'BU4', 'BU5', 'BU6'];
      $scope.selectedItem;
      $scope.getSelectedText = function() {
        if ($scope.selectedItem !== undefined) {
          return "You have selected: Item " + $scope.selectedItem;
        } else {
          return "Please select an item";
        }
      };

      $scope.stability = ['Good','Medium','Bad'];
      $scope.stableItem;
      $scope.getSelectedText = function() {
        if ($scope.stableItem !== undefined) {
          return "You have selected: Item " + $scope.stableItem;
        } else {
          return "Please select stability";
        }
      };

      $scope.types = ['Part Time','Full Time'];
      $scope.typeItem;
      $scope.getSelectedText = function() {
        if ($scope.typeItem !== undefined) {
          return "You have selected: Item " + $scope.typeItem;
        } else {
          return "Please select type";
        }
      };

            

           var config = {headers : {'Content-Type': 'application/json;'}};
         $scope.save=function(){
      var myJSON = JSON.stringify($scope.user);
      

        // $http.post('db.php', $scope.user,config)
        //     .then(function (response) {
        //         console.log(response.data)
        //     }, function(response){
        //         console.log("response"+response);
        //     });
    }
    //get data 
    $scope.first = 0;
    $http.post('db.php', $scope.first,config)
            .then(function (response) {
              $scope.record = response.data.employee;
                console.log(response.data.employee[0])
                $scope.contactFirstName = response.data.employee[0].firstname;
                $scope.contactMiddleName = response.data.employee[0].middlename;
                $scope.contactLastName = response.data.employee[0].lastname;
                $scope.contactEmail = response.data.employee[0].email;
                $scope.contactNumber = response.data.employee[0].mobilenumber;
                // $scope.myDate = response.data.employee[0].id;
                $scope.gender = response.data.employee[0].gender;
            }, function(response){
                console.log("response"+response);
            });


        }]).directive('chooseFile', function() {
    return {
      link: function (scope, elem, attrs) {
        var button = elem.find('button');
        var input = angular.element(elem[0].querySelector('input#fileInput'));
        button.bind('click', function() {
          input[0].click();
        });
        input.bind('change', function(e) {
          scope.$apply(function() {
            var files = e.target.files;
            if (files[0]) {
              scope.fileName = files[0].name;
            } else {
              scope.fileName = null;
            }
          });
        });
      }
    };

  }).config(function($mdDateLocaleProvider) {
     $mdDateLocaleProvider.formatDate = function(date) {
    return moment(date).format('YYYY-MM-DD');
      }});

